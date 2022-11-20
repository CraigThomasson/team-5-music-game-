// variable setup
$(document).ready(function() {

    let playerSequence = [];
    let noteSequence = [];
    // let count;
    let score = 0
    let roundStarted = false;
    
    let soundSequence;
    let level = 1
    
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
    // $("#scorebox").html(score);
    // $("#level").html(level);

    // add event listener to the music keys
    $(".key").click(function (event) {
        if  (roundStarted !== true) {
            console.log(event.target.id + ' clicked!');
            let key = event.target
            let audio = new Audio('src/assets/audio/' +  event.target.id + '.wav')
            audio.play()
        
            // highlight keys when clicked
            key.classList.add("highlight")
            // remove highlight after a set time
            removeHighlight(key)
        }

        // check if round started and record player responses
        if (roundStarted === true) {
            // let response = new Audio('src/assets/audio/' +  event.target.id + '.wav');
            console.log(soundSequence.length);
                // if (playerSequence.length < soundSequence.length) {
                    let audio = new Audio('src/assets/audio/' +  event.target.id + '.wav');
                    audio.play()
                    let response = event.target.id
                    
                    playerSequence.push(response);
                    console.log(playerSequence.length);
                    if (playerSequence.length == soundSequence.length) {
                        checkCorrect(); 
                    }
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
        playerSequence = []
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
            let note = sound.src.split('/').splice(2)[4].slice(0, -4)
            noteSequence.push(note)    
        }
        // display message box asking player to repeating the sequence
    
        //check if correct 
       // if (playerSequence === soundSequence) {
            //         correctAnswer();
            
            //     } else {
            //         gameOver()
            //     }

         // increase level
    }
    
    //Check if given answer is correct -> playerSequence does not seem to update the global list so 
    function checkCorrect(note) {
        console.log(playerSequence)
        console.log(noteSequence)

        // if (playerSequence.length == soundSequence.length) {
        if (JSON.stringify(playerSequence) === JSON.stringify(noteSequence)) {
                console.log("checked player seq:", playerSequence)
                console.log("Correct!") 
                score ++
                level ++
                alert('Correct!')       
        } else {
            console.log("wrong this time! try again")
            alert("Wrong! Try again!")
            level = 1
        }
        // playerSequence = []
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