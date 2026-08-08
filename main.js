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
let bird = add([
    sprite("bird"),
    scale(0.07),
]);
let bg = add([
    sprite("bg",{width:width(),height:height()}),
    pos(0,0),
    fixed(), 
    z(-100)
]);