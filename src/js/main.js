// variable setup

let playerSequence = [];
let count;
let score;
let round_started = false;

let soundSequence;
let level = 0;

let noteC = new Audio("src/assets/audio/note-c.wav")
let noteD = new Audio("src/assets/audio/note-d.wav")
let noteE = new Audio("src/assets/audio/note-e.wav")
let noteF = new Audio("src/assets/audio/note-f.wav")
let noteG = new Audio("src/assets/audio/note-g.wav")
let noteA = new Audio("src/assets/audio/note-a.wav")
let noteB = new Audio("src/assets/audio/note-b.wav") // missing this sound
let noteCS = new Audio("src/assets/audio/note-cs.wav") // missing this sound
// let sounds = [noteC, noteD, noteE, noteF, noteG, noteA, noteB, noteCS]
let sounds = [noteC, noteD, noteE, noteF, noteG, noteA]

// buttons

// add event listener to the music keys
$(".key").click(function (event) {
    
    console.log(event.target.id + ' clicked!');
    let audio = new Audio('src/assets/audio/' +  event.target.id + '.wav')
    audio.play()
    // highlight keys when clicked
    highlightKey(event.target) 
    // check if round started and record player responses
    if (round_started === true) {
        let response = new Audio('src/assets/audio/' +  event.target.id + '.wav');
        playerSequence.push(response);
        console.log(playerSequence);
    }
});

function highlightKey(key) { // throws an error "Cannot read properties of undefined (reading 'add')" not sure why
    console.log(key.id)
    key.ClassList.add("highlight");
    setTimeout(function() {
        key.ClassList.remove("highlight");
      }, 2000);
}

// initiate game() function on clicking "Go"
$("#go-btn").click(game)

// game logic


function delayPlay(x, n) {  // x - array index, n - file to play
    setTimeout(function() {
        n.play()
    }, 1500 * x);

  }

function game() {

    let level = 1;
    // generate random sequence of sounds
    let random = shuffle()

    // truncate random sequence to equal level
    random = random.slice(0, level+3); // added 2 for testing
    
    // play sequence
    console.log(random)
    let soundSequence = random
    for (let sound of soundSequence) {
        console.log(soundSequence.indexOf(sound))
        delayPlay(soundSequence.indexOf(sound), sound)
    }
    round_started = true
    // display message box asking player to repeating the sequence

    //check if correct 
   // if (playerSequence === soundSequence) {
        //         correctAnswer();
        
        //     } else {
        //         gameOver()
        //     }
        
    // level +=1 increase level

}
function delayPlay(x, n) {
    setTimeout(function() {
        play(n)
    }, 2000 * x);
  }

//Check if given answer is correct -> playerSequence does not seem to update the global list so 
function checkCorrect() {
    console.log(playerSequence)
    console.log(soundSequence)
    if (playerSequence.length = soundSequence.length) {
        if (playerSequence === soundSequence) {
            console.log("You are correct")
        } else {
            console.log("You got it wrong this time")
        }
    }
    round_started = false;
}

$("#test-btn").click(checkCorrect); // button to initiate functions for testing

// shuffle sequence
function shuffle() {
    let shuffledNotes = sounds.sort(function () {
        return Math.random() - 0.5;
      });
      console.log(shuffledNotes)
      return shuffledNotes
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
