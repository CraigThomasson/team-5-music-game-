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
loadSound("note-c", "src/assets/audio/note-c.wav")
loadSound("note-d", "src/assets/audio/note-d.wav")
loadSound("note-e", "src/assets/audio/note-e.wav")
loadSound("note-f", "src/assets/audio/note-f.wav")
loadSound("note-g", "src/assets/audio/note-g.wav")

//sprites
loadSprite('button-a', 'src/assets/sprites/button-a.png')
loadSprite('button-b', 'src/assets/sprites/button-b.png')
loadSprite('button-c', 'src/assets/sprites/button-c.png')
loadSprite('button-d', 'src/assets/sprites/button-d.png')
loadSprite('button-e', 'src/assets/sprites/button-e.png')
loadSprite('button-f', 'src/assets/sprites/button-f.png')
loadSprite('button-g', 'src/assets/sprites/button-g.png')
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

const buttonC = add([
    sprite("button-c"),
    pos(140, 40),
    area(),
    'soundButtonC',
])

const buttonD = add([
    sprite("button-d"),
    pos(140, 120),
    area(),
    'soundButtonD',
])

const buttonE = add([
    sprite("button-e"),
    pos(200, 40),
    area(),
    'soundButtonE',
])

const buttonF = add([
    sprite("button-f"),
    pos(200, 120),
    area(),
    'soundButtonF',
])

const buttonG = add([
    sprite("button-g"),
    pos(260, 40),
    area(),
    'soundButtonG',
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
        playerSequence.push('note-a')
        console.log(playerSequence)
})

onClick(
    "soundButtonB", () => play('note-b'),
    )

onClick(
    "soundButtonB", () => {
        score.value += 1
        score.text = "Score:" + score.value
        playerSequence.push('note-b')
        console.log(playerSequence)
})

onClick(
    "soundButtonC", () => play('note-c'),
    )

onClick(
    "soundButtonC", () => {
        score.value += 1
        score.text = "Score:" + score.value
        playerSequence.push('note-c')
        console.log(playerSequence)
})

onClick(
    "soundButtonD", () => play('note-d'),
    )

onClick(
    "soundButtonD", () => {
        score.value += 1
        score.text = "Score:" + score.value
        playerSequence.push('note-d')
        console.log(playerSequence)
})

onClick(
    "soundButtonE", () => play('note-e'),
    )

onClick(
    "soundButtonE", () => {
        score.value += 1
        score.text = "Score:" + score.value
        playerSequence.push('note-e')
        console.log(playerSequence)
})

onClick(
    "soundButtonF", () => play('note-f'),
    )

onClick(
    "soundButtonF", () => {
        score.value += 1
        score.text = "Score:" + score.value
        playerSequence.push('note-f')
        console.log(playerSequence)
})

onClick(
    "soundButtonG", () => play('note-g'),
    )

onClick(
    "soundButtonG", () => {
        score.value += 1
        score.text = "Score:" + score.value
        playerSequence.push('note-G')
        console.log(playerSequence)
})

onClick("buttonGo", () => audioControls())

let sequence = [];

let level = 0;

function audioControls(sound) {
    play(sound);
}

function game () {
    level = 1;
    soundSequence = ["note-A", "note-B", "note-C", "note-D", "note-E", "note-F", "note-G"]
    audioControls(soundSequence)


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

