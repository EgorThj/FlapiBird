import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";


let state = "start"

kaplay({
  width: 500,
  height: 200,
  background: "#d46eb3",
  scale: 2,
  canvas: document.getElementById("canvas"),
});

// загрузка спрайтов
loadSprite("bird", "./sprites/Flapybird.png")
loadSprite("bg", "./sprites/Background.png")
loadSprite("ps", "./sprites/newPipe.png")

// гравитация
setGravity(180)

// создание основных персонажей
let bird = add([
  sprite("bird"),
  pos(50, 50),
  scale(0.07),
  body(),
  area(),
  "bird"
]);

let groud = add([
  rect(400, 10),
  body({
    isStatic: true
  }),
  area(),
  pos(0, 200),
  color(0, 43, 0),
  "enemy"
])

let btn = add([
  rect(100, 40, { radius: 8 }),
  pos(width() / 2, height() / 2),
  color(0, 255, 0),
  anchor("center"),
  area(),
  "startBtn",
])

btn.add([
  text("Click", { size: 15 }),
  anchor("center")

])

let bg = add([
  sprite("bg", { width: width(), height: height() }),
  pos(0, 0),
  fixed(),
  z(-100)
]);

// события
onKeyPress("space", function () {
  bird.jump(100)
})

onCollide("enemy", "bird", function () {
  console.log("wewrewer")
})

onClick("startBtn", () => {
  state = "game"
  btn.hidden = true
})

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function createPipes() {
  const randInt = getRandomInt(60, 150)
  let pipe1 = add([
    sprite("ps"),
    pos(500, randInt),
    area(),
    scale(0.2),
    move(LEFT, 70),
    offscreen({ destroy: true }),
    "pipe"
  ])
  let pipe2 = add([
    sprite("ps"),
    pos(585, randInt - 80),
    area(),
    scale(0.2),
    rotate(180),
    move(LEFT, 70),
    offscreen({ destroy: true }),
    "pipe"
  ])

}
onCollide("bird", "pipe", function () {
  state = 'game over'
})
// onUpdate(function(){
//     if (type === "game"){

//     }
// })

loop(2.5, function () {
  createPipes()

})   
