import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";
    
kaboom({
    width: 700,
    height: 500,
    font: "sinko",
    canvas: document.querySelector("#mycanvas"),
    background: [ 0, 0, 0 ],
})


// load assets

//sounds
loadSound("note-a", "src/assets/audio/note-a.wav")
loadSound("note-b", "src/assets/audio/note-b.wav")

//sprites
loadSprite('button-a', 'src/assets/sprites/button-a.png')
loadSprite('button-b', 'src/assets/sprites/button-b.png')
loadSprite('button-go', 'src/assets/sprites/button-go.png')


// buttons

let playerSequence = [];
let count = 0

const score = add([
    text("Score: 0"),
    pos(24, 24),
    { value: 0 },
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