//% color=#d6b10b weight=100 icon=""
namespace Sprites_beta {
let sprite_icons: Image[] = []
let sprite_data: string[][] = [[]]

//% block
export function add_sprite(image: Image, data: string[]) {
    sprite_icons.push(image)
    sprite_data.push(data)
}

//% block
export function delete_sprite(indx: number) {
    sprite_icons.splice(indx, 1)
    sprite_data.splice(indx, 1)
}

//% block
export function draw_sprites(){
    for (let i = 0; i < sprite_icons.length-1; i++) {
        kitronik_VIEW128x64.writeImageNoBackOLED(sprite_icons[i], parseInt(sprite_data[i][0]), parseInt(sprite_data[i][1]))
    }
}

//% block
export function get_sprite_data(indx: number, data: number){
    return sprite_data[indx][data]
}

//% block
export function replace_sprite_data(indx: number, data: number, replation: string){
    sprite_data[indx][data] = replation
}

}