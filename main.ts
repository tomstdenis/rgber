namespace rgber {
    export function plot (x: number, y: number, r: number, g: number, b: number) {
    let i = 0
    i = x * 8
    if (x / 2 == 0) {
        i = x + y
    } else {
        i = x + (7 - y)
    }
    strip.setPixelColor(i, neopixel.rgb(r, g, b))
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
}
