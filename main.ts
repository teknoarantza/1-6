function Birau_eskuinera () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.NorthWest)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.NorthEast)
}
function Birau_ezkerrera () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.NorthWest)
}
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        Birau_ezkerrera()
    }
    if (input.isGesture(Gesture.TiltRight)) {
        Birau_eskuinera()
    }
})
