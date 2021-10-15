input.onButtonPressed(Button.A, function () {
    basic.pause(10)
    while (count <= repetitions) {
        direction = input.acceleration(Dimension.Z)
        if (direction >= (prev_dir - tolerance) * -1 && direction <= (prev_dir + tolerance) * -1) {
            count += 1
            light2 += Math.trunc(255 / repetitions) * -1
        }
        basic.setLedColor(basic.rgbw(
        light2,
        0 - light2,
        0,
        light2
        ))
        basic.showNumber(count)
        basic.pause(100)
    }
    if (count == repetitions) {
        music.playMelody("E F G B G - B - ", 350)
    }
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 A F - - - - - ", 1000)
    count = 0
    basic.pause(100)
})
let tolerance = 0
let prev_dir = 0
let direction = 0
let light2 = 0
let repetitions = 0
let count = 0
music.playMelody("G B G B B - - - ", 350)
count = 0
repetitions = 15
light2 = 255 + Math.trunc(255 / repetitions)
direction = 0
prev_dir = 0
tolerance = 10
basic.forever(function () {
    basic.showNumber(0)
})
