basic.forever(function () {
    if (input.lightLevel() < 128) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    basic.showNumber(input.lightLevel())
})
