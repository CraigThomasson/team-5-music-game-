


// buttons

let playerSequence = [];
let count = 0

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
onClick("buttonGo", () => audioControls())

let sequence = [];

let level = 0;

function audioControls(sound) {
    play(sound);
}

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
        level = 1;
    let soundSequence = ["note-A", "note-B", "note-C", "note-D", "note-E", "note-F", "note-G"]
    for (let i = 0; i < soundSequence.length; i++) {
        audioControls(soundSequence);
        if (playerSequence === soundSequence) {
            correctAnswer();
    
        } else {
            gameOver()
        }
            } else {
            gameOver()
        }
    }
        
}

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



function correctAnswer() {
    score++
    nextRound()
}

function gameOver() {

}