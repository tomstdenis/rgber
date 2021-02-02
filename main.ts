function plot (x: number, y: number, r: number, g: number, b: number) {
    i = x * 8
    if (x / 2 == 0) {
        i = i + y
    } else {
        i = i + (7 - y)
    }
    strip.setPixelColor(i, neopixel.rgb(r, g, b))
}
let i = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
