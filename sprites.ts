//% color=#d6b10b weight=100 icon=""
namespace NOT_DONE_DONT_OPEN {
let sprite_icons: Image[] = []
let sprite_data: String[][] = [[]]

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


}