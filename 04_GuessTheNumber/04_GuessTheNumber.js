 let randomNumber = parseInt(Math.random()*100 + 1) 

 const submit = document.querySelector('#subt')
 const userInput = document.querySelector('#guessField')
 const guessSolt = document.querySelector('.guesses')
 const remaining= document.querySelector('.lastResult')
 const lowOrhi= document.querySelector('.lowOrhi')
 const startOver = document.querySelector('.resultParas')


//   sound effect of  
   const sound = new Audio("click-error.mp3") 
   const gameOver = new Audio("game-over.mp3")
   const gameWin = new Audio('game-win.mp3')
   const newGameClick = new Audio('click-mouse.mp3')

 const p  = document.createElement('p')


 let prevGuess = []
 let numGuess = 1 

 let playGame = true


 if(playGame) {
    submit.addEventListener("click",function (e) {
        e.preventDefault() 
        const guess = parseInt(userInput.value)
        // console.log(guess)
        validateGuess(guess);
        
    })
 }

 function validateGuess (guess) {
    if(isNaN(guess)) {
        sound.play();
        alert('please enter a valid number')
    }else if (guess < 1) {
        sound.play();
        alert('please enter a number is more than 1')
    }else if (guess > 100) {
        sound.play();
        alert('please enter a number is less than 100')
    }else {
        prevGuess.push(guess)
        // console.log(prevGuess)
        if(numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game is Over. Random number Was ${randomNumber}`);
            endGame();
            gameOver.currentTime = 0;
            gameOver.play();
        } 
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
 }

 function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`you guessed it right`)
        endGame()
        gameWin.play();
    }
    else if (guess < randomNumber) {
        displayMessage(`Number is Tooo Low`)
    }
    else if(guess > randomNumber) {
        displayMessage(`Number is Very high`)
    }
 }

 function displayGuess(guess) {
    userInput.value ='';
    guessSolt.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
    
 }

 function displayMessage(message) {
    lowOrhi.innerHTML = `<h3>${message}</h3>` 
 }

 function endGame () {
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = '<h3 id="newGame">Start New Game</h3>'
    p.style.pointerEvents = PointerEvent
    startOver.appendChild(p)
    playGame = false;
    newGame();
 }

 function newGame () {
    const button = document.querySelector('#newGame')
    button.addEventListener('click',function(e) {
        randomNumber =  parseInt(Math.random()*100 + 1)
        prevGuess = []
        numGuess = 1
        guessSolt.innerHTML=''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled','')
        startOver.removeChild(p)
        playGame = true
        lowOrhi.innerHTML = ''
        newGameClick.play();
    })

 }
 

