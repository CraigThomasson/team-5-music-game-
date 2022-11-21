// variable setup
$(document).ready(function () {

    let playerSequence = [];
    let noteSequence = [];
    let score = 0
    let roundStarted = false;

    let soundSequence;
    let level = 1
    let hard = false

    let noteC = new Audio("src/assets/audio/note-c.mp3")
    let noteD = new Audio("src/assets/audio/note-d.mp3")
    let noteE = new Audio("src/assets/audio/note-e.mp3")
    let noteF = new Audio("src/assets/audio/note-f.mp3")
    let noteG = new Audio("src/assets/audio/note-g.mp3")
    let noteA = new Audio("src/assets/audio/note-a.mp3")
    let noteB = new Audio("src/assets/audio/note-b.mp3")
    let sounds = [noteC, noteD, noteE, noteF, noteG, noteA, noteB]

    // easy/hard toggle
    $("#hard").click(function(event) {
        hard = !hard;
        console.log(hard === true)
        if (hard) {
            $("#hard").html("Hard");
        } else if (!hard) {
            $("#hard").html("Easy");
        }
      });

    // add event listener to the music keys
    $(".key").click(function (event) {
        console.log('round started', roundStarted)
        if (roundStarted !== true) {
            console.log(event.target.id + ' clicked!');
            let key = event.target
            let audio = new Audio('src/assets/audio/' + event.target.id + '.mp3')
            audio.play()

            // highlight keys when clicked
            key.classList.add("highlight")
            // remove highlight after a set time
            removeHighlight(key)

        }

        // check if round started and record player responses
        if (roundStarted == true) {
            let audio = new Audio('src/assets/audio/' + event.target.id + '.mp3');
            audio.play()
            let response = event.target.id
            playerSequence.push(response);

            let key = event.target
            key.classList.add("highlight")
            removeHighlight(key)
            if (playerSequence.length == soundSequence.length) {
                checkCorrect();
            }   
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
    function delayPlay(x, n) { // x - array index, n - file to play
        setTimeout(function () {
            n.play()
            // highlight the key that is playing
            // split file src url into parts, grab the last one and remove file extension
            let fileName = (n.src.split('/').splice(2)[5]).slice(0, -4); 
            let key = document.getElementById(`${fileName}`)

            if (hard===false) {
                key.classList.add("highlight")
                // remove highlight
                removeHighlight(key)
            }
        }, 1500 * x);
    }

    function game() {
        playerSequence = []
        noteSequence = []
        roundStarted = true
        // generate random sequence of sounds
        let random = shuffle()
        // truncate random sequence to equal level
        random = random.slice(0, level); // added 2 for testing
        // play sequence
        soundSequence = random
        for (let sound of soundSequence) {
            delayPlay(soundSequence.indexOf(sound), sound)
            let note = sound.src.split('/').splice(2)[5].slice(0, -4)
            noteSequence.push(note)
        }
    }

    //Check if given answer is correct -> playerSequence does not seem to update the global list so 
    function checkCorrect(note) {

        if (JSON.stringify(playerSequence) === JSON.stringify(noteSequence)) {
            console.log("checked player seq:", playerSequence)
            score++
            level++
            setTimeout(function () {
                alert('Correct');
            }, 1000);

        } else {
            setTimeout(function () {
                alert("Wrong! Try again!");
            }, 1000);
            level = 1
            score = 0
        }
  
        roundStarted = false;

        $("#scorebox").html(score);
        $("#level").html(level);

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
});
