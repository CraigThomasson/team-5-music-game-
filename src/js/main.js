// variable setup
$(document).ready(function () {

    let playerSequence = [];
    let noteSequence = [];
    // let count;
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
    let noteB = new Audio("src/assets/audio/note-b.mp3") // missing this sound
    let noteCS = new Audio("src/assets/audio/note-cs.mp3") // missing this sound
    // let sounds = [noteC, noteD, noteE, noteF, noteG, noteA, noteB, noteCS]
    let sounds = [noteC, noteD, noteE, noteF, noteG, noteA, noteB]

    // buttons
    // $("#scorebox").html(score);
    // $("#level").html(level);

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
            console.log(soundSequence.length);
            let audio = new Audio('src/assets/audio/' + event.target.id + '.mp3');
            audio.play()
            let response = event.target.id

            playerSequence.push(response);
            console.log(playerSequence.length);

            let key = event.target
            key.classList.add("highlight")
            removeHighlight(key)
            // while (playerSequence < soundSequence) {
            if (playerSequence.length == soundSequence.length) {
                checkCorrect();
            }
        // }
            // } else {
            // check your response button and add event to the button
            // checkCorrect()
            // }      
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
            console.log(n)
            console.log(n.src)
            // highlight the key that is playing
//             let fileName = (n.src.split('/').splice(2)[4]).slice(0, -4); // split file src url into parts, grab the last one and remove file extension
            let fileName = (n.src.split('/').splice(2)[3]).slice(0, -4); // split file src url into parts, grab the last one and remove file extension
            console.log(fileName);
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
        console.log(level)
        roundStarted = true
        // generate random sequence of sounds
        let random = shuffle()

        // truncate random sequence to equal level
        random = random.slice(0, level); // added 2 for testing
        // play sequence
        soundSequence = random
        for (let sound of soundSequence) {
            // console.log(soundSequence.indexOf(sound.src))
            delayPlay(soundSequence.indexOf(sound), sound)
//             let note = sound.src.split('/').splice(2)[4].slice(0, -4)
            let note = sound.src.split('/').splice(2)[3].slice(0, -4)
            console.log(note)
            noteSequence.push(note)
        }
    }

    //Check if given answer is correct -> playerSequence does not seem to update the global list so 
    function checkCorrect(note) {
        console.log(playerSequence)
        console.log(noteSequence)

        // if (playerSequence.length == soundSequence.length) {
        if (JSON.stringify(playerSequence) === JSON.stringify(noteSequence)) {
            console.log("checked player seq:", playerSequence)
            console.log("Correct!")
            score++
            level++
            setTimeout(function () {
                alert('Correct');
            }, 1000);

        } else {
            console.log("wrong this time! try again")
            setTimeout(function () {
                alert("Wrong! Try again!");
            }, 1000);
            level = 1
        }
  
        roundStarted = false;
        console.log(playerSequence)


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
});
