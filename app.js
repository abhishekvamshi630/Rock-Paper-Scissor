let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    // console.log(" Game was Draw!");
    msg.innerText = " Game was Draw!";
    msg.style.backgroundColor = "#182831";
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("Congratulations You Win!");
        msg.innerText = `Congratulations You win!. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You lose! Better Luck Next Time...")
        msg.innerText = `You lose!.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("User choice :", userChoice);
    const compChoice = genCompChoice();
     console.log("Computer choice :", compChoice);

    if(userChoice === compChoice){
        // draw Game 
        drawGame();
    }else{
        let userWin = true;

        if(userChoice === "rock"){
            //paper, scissor
            userWin = compChoice === "paper"?false : true;
        }else if(userChoice === "paper"){
            // rock, scissor
            userWin = compChoice === "rock"?true : false;
        }else{
            // rock, paper
            userWin = compChoice === "paper"? true : false;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach( (choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was Clicked", userChoice);
        playGame(userChoice)
        
    });
});