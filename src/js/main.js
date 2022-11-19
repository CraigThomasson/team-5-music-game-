// variable setup

let playerSequence = [];
let count = 0;
let score = 0;

let sequence = [];
let level = 0;

let noteC = new Audio("src/assets/audio/note-c.wav")
let noteD = new Audio("src/assets/audio/note-d.wav")
let noteE = new Audio("src/assets/audio/note-e.wav")
let noteF = new Audio("src/assets/audio/note-f.wav")
let noteG = new Audio("src/assets/audio/note-g.wav")// missing this sound
let noteA = new Audio("src/assets/audio/note-a.wav")
let noteB = new Audio("src/assets/audio/note-b.wav") 
let noteCS = new Audio("src/assets/audio/note-cs.wav") // missing this sound

// buttons

// add event listener to the music keys
$(".key").click(function (event) {
    console.log(event.target.id + ' clicked!');
    let audio = new Audio('src/assets/audio/' +  event.target.id + '.wav')
    audio.play()
    // if game_in_progress == true > 
        // score.value += 1
        // score.text = "Score:" + score.value
        // playerSequence.push('note-a')
        // console.log(playerSequence)
    //scorebox.html(')
});

// initiate game() function on clicking "Go"
$("#go-btn").click(game)

// game logic

// onClick(
//     "soundButtonA", () => {
//         score.value += 1
//         score.text = "Score:" + score.value
//         playerSequence.push('note-a')
//         console.log(playerSequence)
// })

// onClick(
//     "soundButtonB", () => {
//         score.value += 1
//         score.text = "Score:" + score.value
//         playerSequence.push('note-b')
//         console.log(playerSequence)
// })


// onClick(
//     "soundButtonC", () => {
//         score.value += 1
//         score.text = "Score:" + score.value
//         playerSequence.push('note-c')
//         console.log(playerSequence)
// })


// onClick(
//     "soundButtonD", () => {
//         score.value += 1
//         score.text = "Score:" + score.value
//         playerSequence.push('note-d')
//         console.log(playerSequence)
// })


// onClick(
//     "soundButtonE", () => {
//         score.value += 1
//         score.text = "Score:" + score.value
//         playerSequence.push('note-e')
//         console.log(playerSequence)
// })


// onClick(
//     "soundButtonF", () => {
//         score.value += 1
//         score.text = "Score:" + score.value
//         playerSequence.push('note-f')
//         console.log(playerSequence)
// })


// onClick(
//     "soundButtonG", () => {
//         score.value += 1
//         score.text = "Score:" + score.value
//         playerSequence.push('note-G')
//         console.log(playerSequence)
// })


function audioControls(sound) {
    play(sound);
}


function delayPlay(x, n) {  // x - array index, n - file to play
    setTimeout(function() {
        n.play()
    }, 1500 * x);
  }

function game() {
    let level = 1;
    let soundSequence = [noteA, noteB, noteC]
    for (let sound of soundSequence) {
        // sound.play()
        console.log(soundSequence.indexOf(sound))
        delayPlay(soundSequence.indexOf(sound), sound)
    }
}

// function game () {
//     level = 1;
//     let soundSequence = [noteA, noteB, noteC]
//     for (let i = 0; i < soundSequence.length; i++) {
//         audioControls(soundSequence);
//         soundSequence.play()
    //     if (playerSequence === soundSequence) {
    //         correctAnswer();
    
    //     } else {
    //         gameOver()
    //     }
    
// }
// }};

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


function shuffle() {
    shuffledNotes = sounds.sort(function () {
        return Math.random() - 0.5;
      });
    };