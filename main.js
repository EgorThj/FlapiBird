import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";


kaplay({
    width: 500,
    height: 200,
    background: "#d46eb3",
    scale: 2,
    canvas: document.getElementById("canvas"),
});
loadSprite("bird", "Flapybird.png")
loadSprite("bg", "Background.png")
loadSprite("ps", "newPipe.png")
setGravity(180)
let bird = add([
    sprite("bird"),
    pos(50,50),
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
let state = "start"
let btn = add([
    rect(100,40,{radius:8}),
    pos(width()/2,height()/2),
    color(0,255,0),
    anchor("center"),
    area(),
    "startBtn",
    
])
btn.add([
    text("Click",{size:15}),
    anchor("center")
    
])
onClick("startBtn",()=>{
    state = "game"
    btn.hidden  = true
})
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
}
function createPipes(){
    const randInt = getRandomInt(80,120)
    let pipe1 =add([
        sprite("ps"),
        pos(500,randInt),
        area(),
        scale(0.2),
        move(LEFT,70),
        offscreen({destroy:true}),
        "pipes"
    ]) 
    let pipe2 =add([
        sprite("ps"),
        pos(500,randInt-50),
        area(),
        scale(0.2),
        rotate(180),
        move(LEFT,70),
        offscreen({destroy:true}),
        "pipes"
    ]) 
    
}
onCollide("bird","pipe1",function(){
    type = 
})
onUpdate(function(){
    if (type === "game"){
        loop(2.5,function(){
            createPipes()
            
        })    
    }
})
