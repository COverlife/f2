scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterSouthWest, function (sprite, location) {
    mySprite.setPosition(230, 225)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerSouthEast, function (sprite, location) {
    mySprite.setPosition(230, 225)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterEast0, function (sprite, location) {
    mySprite.setPosition(230, 225)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterNorthWest, function (sprite, location) {
    mySprite.setPosition(230, 225)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerNorthEast, function (sprite, location) {
    mySprite.setPosition(230, 225)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterWest0, function (sprite, location) {
    mySprite.setPosition(230, 225)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterNorthEast, function (sprite, location) {
    mySprite.setPosition(230, 225)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterSouth2, function (sprite, location) {
    mySprite.setPosition(230, 225)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterNorth2, function (sprite, location) {
    mySprite.setPosition(230, 225)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterEast2, function (sprite, location) {
    mySprite.setPosition(230, 225)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterEast1, function (sprite, location) {
    mySprite.setPosition(230, 225)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterSouth0, function (sprite, location) {
    mySprite.setPosition(230, 225)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterSouth1, function (sprite, location) {
    mySprite.setPosition(230, 225)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterSouthEast, function (sprite, location) {
    mySprite.setPosition(230, 225)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterWest2, function (sprite, location) {
    mySprite.setPosition(230, 225)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterNorth1, function (sprite, location) {
    mySprite.setPosition(230, 225)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbd1fddf1dbf......
    ......fcd3f11f3dcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
mySprite.setPosition(230, 225)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
info.startCountdown(300)
