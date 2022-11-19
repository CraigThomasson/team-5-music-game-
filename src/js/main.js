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
        playerSequence.push('note-g')
        console.log(playerSequence)
})

onClick("buttonGo", () => audioControls())

let sequence = [];

let level = 0;

<<<<<<< HEAD
function delayPlay(x, n) {
    setTimeout(function() {
        play(n)
    }, 2000 * x);
  }
 
function game() {
    const comAray = ['note-a', 'note-b', 'note-c', 'note-d', 'note-e', 'note-f', 'note-g'];
    let i = 0
    for (let notes in comAray) {
        delayPlay(i, comAray[i])
        i ++
    }
=======
function audioControls(sound) {
    play(sound);
}

function game () {
    level = 1;
    let soundSequence = ["note-A", "note-B", "note-C", "note-D", "note-E", "note-F", "note-G"]
    for (let i = 0; i < soundSequence.length; i++) {
        audioControls(soundSequence);
        if (playerSequence === soundSequence) {
            correctAnswer();
    
        } else {
            gameOver()
        }
    }
    
>>>>>>> 23d3cd4ac8304c8abf80a320bb94fbd00df74bb4
}

function nextStep() {
    const sounds = ["note-A", "note-B", "note-C", "note-D", "note-E", "note-F", "note-G"];
    const random = sounds[Math.floor(Math.random() * sounds.length)];
    return random;
}

function nextRound() {
    level += 1;
    const nextSequence = [...sequence];
    nextSequence.push(nextStep());
}

function correctAnswer() {
    score++
    nextRound()
}

function gameOver() {

}

