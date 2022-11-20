// variable setup
$(document).ready(function() {

    let playerSequence = [];
    let count;
    let score;
    let round_started = false;

    let soundSequence;
    let level = 0;

    let noteC = new Audio("src/assets/audio/note-c.mp3")
    let noteD = new Audio("src/assets/audio/note-d.mp3")
    let noteE = new Audio("src/assets/audio/note-e.mp3")
    let noteF = new Audio("src/assets/audio/note-f.mp3")
    let noteG = new Audio("src/assets/audio/note-g.mp3")
    let noteA = new Audio("src/assets/audio/note-a.mp3")
    let noteB = new Audio("src/assets/audio/note-b.mp3") // missing this sound
    // let noteCS = new Audio("src/assets/audio/note-cs.wav") // missing this sound
    // let sounds = [noteC, noteD, noteE, noteF, noteG, noteA, noteB, noteCS]
    let sounds = [noteC, noteD, noteE, noteF, noteG, noteA]

    // buttons

// add event listener to the music keys
$(".key").click(function (event) {

    if (round_started === false) {
        console.log(event.target.id + ' clicked!');
        let key = event.target
        let audio = new Audio('src/assets/audio/' +  event.target.id + '.wav')
        audio.play()
    
        // highlight keys when clicked
        key.classList.add("highlight")
        // remove highlight after a set time
        removeHighlight(key)
    } else if (round_started === true ) {
        let response = new Audio('src/assets/audio/' +  event.target.id + '.wav');
        playerSequence.push(response);
        console.log(playerSequence);
    }
});

// Remove highlight from key function
let removeHighlight = (key) => {
    setTimeout(function () {
    key.classList.remove("highlight");
}, 1000);
}

// initiate game() function on clicking "Go"
$("#go-btn").click(game)

// game logic


function delayPlay(x, n) {  // x - array index, n - file to play
    setTimeout(function() {
        n.play()
        console.log(n)
        // highlight the key that is playing
        let fileName = (n.src.split('/').splice(2)[4]).slice(0, -4); // split file src url into parts, grab the last one and remove file extension
        let key = document.getElementById(`${fileName}`)
        key.classList.add("highlight")
        // remove highlight after a set time
        removeHighlight(key)
    }

function game() {

    let level = 1;
    // generate random sequence of sounds
    let random = shuffle()

    // truncate random sequence to equal level
    random = random.slice(0, level+3); // added 2 for testing
    
    // play sequence
    let soundSequence = random
    let sequenceCount = 0
    let sequencelenght = soundSequence.length
    console.log('soundsequence length', sequencelenght)
    for (let sound of soundSequence) {
        console.log(soundSequence.indexOf(sound))
        delayPlay(soundSequence.indexOf(sound), sound)
        sequenceCount ++
        console.log('sc', sequenceCount)
    }
    round_started = true
    if (sequenceCount === sequencelenght-1) {
        PlayerTurn()
    }

    // display message box asking player to repeating the sequence

    //check if correct 
   // if (playerSequence === soundSequence) {
        //         correctAnswer();
        
        //     } else {
        //         gameOver()
        //     }
        
    // level++ increase level


function PlayerTurn() {
    console.log('playing')
    round_started = false
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
    });

    // Remove highlight from key function
    let removeHighlight = (key) => {
        setTimeout(function () {
        key.classList.remove("highlight");
    }, 1000);
    }

    // initiate game() function on clicking "Go"
    $("#go-btn").click(game)

    // game logic


    function delayPlay(x, n) {  // x - array index, n - file to play
        setTimeout(function() {
            n.play()
            console.log(n)
            // highlight the key that is playing
            let fileName = (n.src.split('/').splice(2)[4]).slice(0, -4); // split file src url into parts, grab the last one and remove file extension
            let key = document.getElementById(`${fileName}`)
            key.classList.add("highlight")
            // remove highlight
            removeHighlight(key)
        }, 1500 * x);
    }

    function game() {

        let level = 1;
        // generate random sequence of sounds
        let random = shuffle()

        // truncate random sequence to equal level
        random = random.slice(0, level+3); // added 2 for testing
        
        // play sequence

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
            
        // level++ increase level

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

    // const sounds = ["note-A", "note-B", "note-C", "note-D", "note-E", "note-F", "note-G"];

    function nextStep() {
        
        const random = sounds[Math.floor(Math.random() * sounds.length)];
    
        return random;
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

    function nextRound() {
        level += 1;
        shuffle()
        const nextSequence = [...sequence];
        nextSequence.push(nextStep());
    }

    function correctAnswer() {
        score++
        nextRound()
    }

    function gameOver() {

    }


});
