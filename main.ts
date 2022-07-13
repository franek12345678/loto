input.onButtonPressed(Button.A, function () {
    _2 += 1
    if (_2 > 200) {
        _2 = 200
    }
    basic.showNumber(_2)
})
input.onButtonPressed(Button.AB, function () {
    if (_1 == _2) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(1000)
        control.reset()
    }
})
input.onButtonPressed(Button.B, function () {
    _2 += -1
    if (_2 < 1) {
        _2 = 1
    }
    basic.showNumber(_2)
})
let _2 = 0
let _1 = 0
led.setBrightness(255)
_2 = 1
_1 = randint(1, 200)
basic.showNumber(_2)
