//% color=#d6b10b weight=100 icon=""
namespace sprites_beta {
let sprite_icons: Image[] = []
let sprite_data: number[][] = []
let sprite_name: string[] = []

//% block
export function add_sprite(image: Image, data: number[], name: string) {
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
export function sprite_frame(){
    for (let i = 0; i < sprite_icons.length; i++) {
        kitronik_VIEW128x64.writeImageNoBackOLED(sprite_icons[i], sprite_data[i][0], sprite_data[i][1])
    }
}

//% block
export function get_sprite_data(indx: string, data: number){
    return sprite_data[sprite_name.indexOf(indx)][data]
}

//% block
export function replace_sprite_data(indx: string, data: number, replation: number){
    sprite_data[sprite_name.indexOf(indx)][data] = replation
}

//% block
export function move_sprite(indx: string, data: number, replation: number) {
    sprite_data[sprite_name.indexOf(indx)][data] += replation
}

//% block
export function set_sprite_image(indx: string, image: Image){
    sprite_icons[sprite_name.indexOf(indx)] = image
}


}