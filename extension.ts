//% color=#32a852 weight=100 icon=""
namespace tilemap {
let tilemap_tiles: Image[] = []
let tilemap_layout: string[] = []
let cam_x: number = 0
let cam_y: number = 0
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
    export function get_tilemap(x: number, y: number): number {
        return parseInt(tilemap_layout[y].charAt(x))
    }

    //% block
    export function draw_tilemap(){
        for (let x = 0; x < tilemap_layout[0].length; x++) {
            for (let y = 0; y < tilemap_layout.length; y++) {
                kitronik_VIEW128x64.writeImageNoBackOLED(tilemap_tiles.get(tilemap.get_tilemap(x, y)), x*8+cam_x, y*8+cam_y)
            }
        }
    }

    //% block
    export function is_collision(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number) {
        return x1 + (x2 - x1) > x3 && x2 - (x2 - x1) < x4 && (y1 + (y2 - y1) > y3 && y2 - (y2 - y1) < y4)
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
        return tilemap.get_tilemap(xs, ys)
    }

}