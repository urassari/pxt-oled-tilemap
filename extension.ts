//% color=#32a852 weight=100 icon=""
namespace tilemap {
let tilemap_tiles: Image[] = []
let tilemap_layout: string[] = []
let cam_x: number = 0
let cam_y: number = 0
let ax = 0
let ay = 0
let aax = 0
let aay = 0
    function replaceCharacter(str: string, index: number, replacement: string) {
    return str.substr(0, index) + replacement + str.substr(index + replacement.length)
    }

    //% block
    export function draw_line(x: number, y: number, x1: number, y1: number) {
        aax = (x1 - x) / ((x1 - x) + (y1 - y))
        aay = (y1 - y) / ((x1 - x) + (y1 - y))
        ax = x
        ay = y
        for (let index = 0; index < Math.abs((x1 - x) + (y1 - y)); index++) {
            kitronik_VIEW128x64.setPixelbuffer(Math.round(ax), Math.round(ay))
            ax += aax
            ay += aay
        }
    }

    //% block
    export function set_blocks (list: Image[]) {
    tilemap_tiles = list
    }

    //% block
    export function get_tile_index (num: number): Image {
        return tilemap_tiles[num]
    }

    //% block
    export function add_blocks(tile: Image) {
        tilemap_tiles.push(tile)
    }

    //% block
    export function set_tilemap_layout(list: string[]) {
        tilemap_layout = list
    }

    //% block
    export function get_tilemap(x: number, y: number): string {
        return (tilemap_layout[y].charAt(x))
    }

    //% block
    export function draw_tilemap(){
        for (let x = 0; x < tilemap_layout[0].length; x++) {
            for (let y = 0; y < tilemap_layout.length; y++) {
                kitronik_VIEW128x64.writeImageNoBackOLED(tilemap_tiles.get(tilemap.get_tilemap(x, y).charCodeAt(0) - 32), x*8+cam_x, y*8+cam_y)
            }
        }
    }

    //% block
    export function is_collision(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number) {
        return x1 + (x2 - x1) > x3 && x2 - (x2 - x1) < x4 && (y1 + (y2 - y1) > y3 && y2 - (y2 - y1) < y4)
    }

    //% block
    export function is_x_y_touching_tile(x: number, y: number, xt: number, yt: number) {
        return tilemap.is_collision(x, y, x+8, y+8, xt/8, yt/8, xt/8+8, yt/8+8)
    }

    //%block
    export function set_camera(x: number, y: number) {
    
        cam_x = x
        cam_y = y

    }

    //%block
    export function change_camera(x: number, y: number) {

        cam_x = cam_x+x
        cam_y = cam_y+y

    }

    //% block
    export function the_colliding_tile_image(xs: number, ys: number) {
        return tilemap.get_tilemap(Math.floor(xs / 8), Math.floor(ys / 8))
    }

    //% block
    export function replace_tile(x: number, y: number, rep: string) {
        tilemap_layout[y] = replaceCharacter(tilemap_layout[y], x, rep)
    }

    //% block
    export function remove_block(indx: number) {
        tilemap_tiles.splice(indx, 1)
    }
}