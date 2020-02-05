
    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        //counts to 10
        for (let index = 0; index < 11; index++) {
            game.splash("counting up:" + index)
        }
        //counts down to 0
        for (let index = 100; index > 0; index--) {
            game.splash("counting down:" + index)
        }
        //counts by 10
        for (let index = 100; index > 0; index-=10) {
            game.splash("counting 10 down:" + index)
        }
    })