//% color=#d6b10b weight=100 icon=""
namespace sprites_beta {
let sprite_icons: Image[] = []
let sprite_data: string[][] = []
let sprite_name: string[] = []

//% block
export function add_sprite(image: Image, data: string[], name: string) {
    sprite_icons.push(image)
    sprite_data.push(data)
    sprite_name.push(name)
}

//% block
export function delete_sprite(indx: string) {
    sprite_icons.splice(sprite_name.indexOf(indx), 1)
    sprite_data.splice(sprite_name.indexOf(indx), 1)
    sprite_name.splice(sprite_name.indexOf(indx), 1)
}

//% block
export function draw_sprites(){
    for (let i = 0; i < sprite_icons.length; i++) {
        kitronik_VIEW128x64.writeImageNoBackOLED(sprite_icons[i], parseInt(sprite_data[i][0]), parseInt(sprite_data[i][1]))
    }
}

//% block
export function get_sprite_data(indx: string, data: number){
    return sprite_data[sprite_name.indexOf(indx)][data]
}

//% block
export function replace_sprite_data(indx: string, data: number, replation: string){
    sprite_data[sprite_name.indexOf(indx)][data] = replation
}

}