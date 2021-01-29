let 计步器 = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(计步器)
    计步器 += 1
})
input.onGesture(Gesture.Shake, function () {
    计步器 += 1
    basic.showNumber(计步器)
})
input.onButtonPressed(Button.B, function () {
    计步器 = 0
    basic.showNumber(计步器)
})
