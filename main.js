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
  rect(120, 40, { radius: 8 }),
  pos(width() / 2, height() / 2),
  color(0, 235, 0),
  anchor("center"),
  area(),
  "startBtn",
])

let textBtn = btn.add([
  text("Click", { size: 15 }),
  anchor("center")

])

let bg = add([
  sprite("bg", { width: width(), height: height() }),
  pos(0, 0),
  fixed(),
  z(-100)
]);
let scoore = 0
let score = add([
  text(scoore, { size: 20 }),
  anchor("center"),
  color(255,255,255),
  pos(10, 15),
  z(100),

])
// события
onKeyPress("space", function () {
  bird.jump(100)
})
bird.hidden = true
onClick("startBtn", () => {
  timer.paused = false
  btn.hidden = true
  bird.paused = false
  bird.hidden = false
  score.text = 0
  textBtn.text = "Начать игру?"
  bird.pos.y = 10
  btn.paused = true

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
  let trigger = add([
    rect(100, 10),
    pos(510, randInt - 80),
    move(LEFT, 70),
    rotate(90),
    area(),
    opacity(0),
    "trigger"
  ]) 

}
onCollide("bird", "trigger", function () {
  scoore += 1
  console.log(scoore)
  score.text = scoore.toString()
})
onCollide("bird", "pipe", function () {
  destroyAll("pipe")
  destroyAll("trigger")
  bird.paused = true
  timer.paused = true
  btn.hidden = false
  scoore = 0
  bird.hidden = true
})


let timer = loop(2.5, function () {
  createPipes()

})
timer.paused = true
onKeyPress("p", function () {
  timer.paused = true
})
onCollide("bird", "enemy", function () {
  destroyAll("pipe")
  destroyAll("trigger")
  bird.paused = true
  timer.paused = true
  btn.hidden = false
  btn.paused = false
  scoore = 0
  bird.hidden = true
})
