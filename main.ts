function callname () {
    if (0 == hat) {
        basic.showString("s")
    } else if (1 == hat) {
        basic.showString("a")
    } else if (2 == hat) {
        basic.showString("m")
    } else if (3 == hat) {
        basic.showString("u")
    } else if (4 == hat) {
        basic.showString("e")
    } else if (5 == hat) {
        basic.showString("l")
    } else {
        basic.showString("")
    }
}
input.onSound(DetectedSound.Loud, function () {
    hat += 1
    callname()
})
input.onSound(DetectedSound.Quiet, function () {
	
})
let hat = 0
hat = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
