import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";
    
kaboom({
    width: 700,
    height: 500,
    font: "sinko",
    canvas: document.querySelector("#mycanvas"),
    // background: [ 0, 0, 0 ],
    background: [ 254, 254, 254 ],
})


// load assets

//sounds
loadSound("note-a", "src/assets/audio/note-a.wav")
loadSound("note-b", "src/assets/audio/note-b.wav")

//sprites
loadSprite('button-a', 'src/assets/sprites/button-a.png')
loadSprite('button-b', 'src/assets/sprites/button-b.png')
loadSprite('button-go', 'src/assets/sprites/button-go.png')
loadSprite('c-note', 'src/assets/sprites/C.png')
loadSprite('d-note', 'src/assets/sprites/D.png')
loadSprite('e-note', 'src/assets/sprites/E.png')
loadSprite('f-note', 'src/assets/sprites/F.png')
loadSprite('g-note', 'src/assets/sprites/G.png')
loadSprite('a-note', 'src/assets/sprites/A.png')
loadSprite('h-note', 'src/assets/sprites/H.png')
loadSprite('cs-note', 'src/assets/sprites/C-sharp.png')
loadSprite('line', 'src/assets/sprites/musical-line.png')


// buttons

let playerSequence = [];
let count = 0

const score = add([
    text("Score: 0"),
    pos(24, 24),
    { value: 0 },
])

const line = add([
    sprite("line"),
    pos(0, 350),
    area(),
    scale(0.1),
    'soundButtonC',
])

const buttonA = add([
    sprite("button-a"),
    pos(80, 40),
    area(),
    'soundButtonA',
])

const buttonb = add([
    sprite("button-b"),
    pos(80, 120),
    area(),
    'soundButtonB',
])

const buttonc = add([
    sprite("c-note"),
    pos(70, 410),
    scale(0.15),
    area(),
    'soundButtonC',
])

const buttond = add([
    sprite("d-note"),
    pos(120, 410),
    scale(0.15),
    area(),
    'soundButtonD',
])

const buttone = add([
    sprite("e-note"),
    pos(180, 410),
    scale(0.15),
    area(),
    'soundButtonE',
])

const buttonf = add([
    sprite("f-note"),
    pos(240, 410),
    scale(0.15),
    area(),
    'soundButtonF',
])

const buttong = add([
    sprite("g-note"),
    pos(300, 410),
    scale(0.15),
    area(),
    'soundButtonG',
])

const buttona = add([
    sprite("a-note"),
    pos(360, 410),
    scale(0.15),
    area(),
    'soundButtonA',
])

const buttonh = add([
    sprite("h-note"),
    pos(420, 410),
    scale(0.15),
    area(),
    'soundButtonH',
])

const buttoncs = add([
    sprite("cs-note"),
    pos(480, 410),
    scale(0.15),
    area(),
    'soundButtonCS',
])

const buttonGo = add([
    sprite("button-go"),
    pos(80, 220),
    area(),
    'buttonGo'
])

// game logic

onClick(
    "soundButtonA", () => play('note-a')
    )

onClick(
    "soundButtonA", () => {
        score.value += 1
        score.text = "Score:" + score.value
        playerSequence.push('a')
        console.log(playerSequence)
})

onClick(
    "soundButtonB", () => play('note-b'),
    )

onClick(
    "soundButtonB", () => {
        score.value += 1
        score.text = "Score:" + score.value
        playerSequence.push('b')
        console.log(playerSequence)
})


onClick("buttonGo", () => game())

let sequence = [];

let level = 0;

function game () {

}

function nextStep() {
    const sounds = ['note-a', 'note-b'];
    const random = sounds[Math.floor(Math.random() * sounds.length)];
  
    return random;
  }

function nextRound() {
    level += 1;
    const nextSequence = [...sequence];
    nextSequence.push(nextStep());
}