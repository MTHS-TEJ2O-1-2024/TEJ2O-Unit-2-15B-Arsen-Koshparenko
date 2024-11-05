/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Arsen Koshparenko
 * Created on: Nov 2024
 * This program make square out of sprites
*/

let sprite: game.LedSprite = null
let sideCounter = 0
let stepCounter = 0

// setup
basic.showIcon(IconNames.Happy)

// Button A is pressed
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    sprite = game.createSprite(0, 0)
    basic.pause(500)

    sideCounter = 0
    while (sideCounter <= 5) {
        stepCounter = 0
        while (stepCounter <= 5) {
            sprite.move(1)
            basic.pause(500)
            stepCounter += 1
        }
        // turn 90 degrees
        sprite.turn(Direction.Right, 90)
        sideCounter += 1
    }

    sprite.delete()
    basic.showIcon(IconNames.Happy)
})