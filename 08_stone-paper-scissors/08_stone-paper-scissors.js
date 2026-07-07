let userScore = 0;
let computerScore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");
const restbtn = document.querySelector("#reset-btn")

// sound effect 
const restSound = new Audio('newGame.mp3') 
const gameOver = new Audio('game-over.mp3')
const gameWin = new Audio('game-win.mp3')
const ClickChoice = new Audio('click-mouse.mp3')

choice.forEach( (choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        ClickChoice.play();
    }); 
});

const playGame = (userChoice) => {
    console.log("user choice", userChoice);

    // generate computer choice
    
    const computerChoice = genComputerChoice();
    console.log("computer Choice", computerChoice);

    // compare user Choice and computer choice

    if(userChoice === computerChoice) {
        draw(userChoice,computerChoice);
    }
  else {
        let userWin = true;
      if (userChoice === "stone") {
        // paper scissors
        userWin = computerChoice === "paper" ? false : true;
       }
     else if (userChoice === "paper") {
        // stone scissors
        userWin = computerChoice === "scissors" ? false : true;
}
      else {
        //  stone paper
          userWin = computerChoice === "stone" ? false : true;
       }
       ShowWinner(userWin,userChoice,computerChoice);
    }
};

const ShowWinner = (userWin,userChoice,computerChoice) => {
    setTimeout ( () => {

        if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!")
        msg.innerText = ` 🎉 You win! You ${userChoice} and Computer is ${computerChoice} `;
        msg.style.background = "#925E00";
        gameWin.play();
     }
     else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        console.log("You Lose!");
       msg.innerText =` ❌ You Lose! You ${userChoice} and Computer is ${computerChoice}`;
       msg.style.background = "Green";
       gameOver.play();
     }

    },2000)
    
}

const draw = (userChoice,computerChoice) => {
    console.log("Game is draw!");
   msg.innerText =`Game is draw! You ${userChoice} and Computer is ${computerChoice}`;
   msg.style.background = "black";
};

restbtn.addEventListener("click", function () {
    userScore = 0;
    computerScore = 0;
    userScorePara.innerText = userScore;
    computerScorePara.innerText = computerScore;
    msg.innerText = "Play your move!";
    msg.style.background = "#2563eb";
    restbtn.innerText = "Reset Done ✅";
    restSound.play();

    setTimeout(() => {
        restbtn.innerText = "Reset Game";
    }, 2000);

});

// computer Choice 
const genComputerChoice = () => {
    const choices = [ "stone","paper","scissors"];
    const randmIdx= Math.floor(Math.random() * 3);
    return choices[randmIdx];
};