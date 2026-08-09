import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";


kaplay({
    width: 200,
    height: 200,
    background: "#d46eb3",
    scale: 2,
    canvas: document.getElementById("canvas"),
});
loadSprite("bird", "Flapybird.png")
loadSprite("bg", "Background.png")
setGravity(180)
let bird = add([
    sprite("bird"),
    pos(20,150),
    scale(0.07),
    body(),
    area(),
    "bird"
]);
let groud =add([
    rect(400,10),
    body({
        isStatic:true
    }),
    area(),
    pos(0,200),
    color(0,43,0),
    "enemy"

])
let bg = add([
    sprite("bg",{width:width(),height:height()}),
    pos(0,0),
    fixed(), 
    z(-100)
]);
onKeyPress("space",function(){
    bird.jump(100)
})
onCollide("enemy","bird",function(){
    console.log("wewrewer")
})