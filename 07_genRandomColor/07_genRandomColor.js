const boxs = document.querySelectorAll('.box')
const starting = document.querySelector('#start-game')
const newGame = document.querySelector('#new-game')
const attemptsElement  = document.querySelector('.attempts') 
const winner_loss = document.querySelector('.winner-loss');
const comPoint = document.querySelector('.computer')
const userPoint = document.querySelector('.user') 
const restbtn = document.querySelector('#rest-game')

//    Random Color ne genrater  //
 
function randmColor () {
    const hex = "0123456789ABCDEF"
    color = '#'
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

//  random number genrater

function randomNumber () {
    return Math.floor(Math.random() * 50) + 1 
}

//  click for start game

 let gameOver = false
 let attempts = 10
 let userPoints = 0;
 let comPoints = 0;

 // sound effect
  const ClickSound = new Audio("click.mp3")
  const GameOverSound = new Audio("game-over.mp3")
  const GameWinSound = new Audio("game-win.mp3")
  const newGameSound = new Audio('newGame.mp3') 


//   click startin game 

starting.addEventListener('click',function () {
  
    if(gameOver) return;
    let newBoxColor;
    attempts--;
    attemptsElement.innerHTML = ` Total is Attempts : 0${attempts}`
   
    boxs.forEach( (boxs) => {
        ClickSound.currentTime = 0;
        ClickSound.play();
        const color = randmColor()
        const num = randomNumber()

        boxs.style.backgroundColor = color;
        boxs.innerHTML = num
    
        if (num == 25) {
            newBoxColor = color
        }

    });

    //  winner condition 

    if (newBoxColor) {
        boxs.forEach ( (boxs) => {
            boxs.style.backgroundColor = color
        });
          userPoints++;
          userPoint.innerHTML = ` User point : ${userPoints}`
          winner_loss.innerHTML = `🎉 User Win! `
          gameOver = true;
          starting.disabled = true;
          GameWinSound.currentTime = 0;
          GameWinSound.play(); 
          
         return;
    }

    // Loss condition
    
     if (attempts === 0 ){
        comPoints++;
        comPoint.innerHTML = ` Computer point : ${comPoints}`
        winner_loss.innerHTML = `❌ Game Over! and Computer Win`
        gameOver = true;
        starting.disabled = true
        GameOverSound.currentTime = 0;
        GameOverSound.play();
     }


});

// click for new game start 

newGame.addEventListener('click',function () {

    boxs.forEach( (boxs) => {
        newGameSound.currentTime = 0;
        newGameSound.play();
       boxs.style.backgroundColor = ''
       boxs.innerHTML = ''
       winner_loss.innerHTML = ''

    })
        attempts = 10;
        attemptsElement.innerHTML = ` Total is Attempts : ${attempts}`  
        gameOver = false;
        starting.disabled = false;

})


// click for Rest button 

 restbtn.addEventListener('click',function () {

     
     boxs.forEach( (boxs) => {
        ClickSound.currentTime = 0;
        ClickSound.play(); 
        boxs.style.backgroundColor = ''
        boxs.innerHTML = ''
        winner_loss.innerHTML = ''
     })

        attempts = 10;
        attemptsElement.innerHTML = ` Total is Attempts : ${attempts}`  
        gameOver = false;
        starting.disabled = false;
        userPoint.innerHTML = ` User point : 0`
        comPoint.innerHTML = ` Computer point : 0`

     
 })


