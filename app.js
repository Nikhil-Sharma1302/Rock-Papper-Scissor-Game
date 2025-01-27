let userNum = 0;
let compNum = 0;
let drawGame = ()=>{
    console.log("draw");
    userMsg.innerText = `Game Draws. Play Again.`
    userMsg.style.backgroundColor="black" ;
}
let winGame = (userWin, userChoice, compChoice) => {
    if (userWin){
        userNum++;
        userScore.innerText = userNum;
        console.log(`you win`);
        userMsg.innerText = `You Win the Game. Your ${userChoice} beats ${compChoice}` ;
        userMsg.style.backgroundColor="green" ;
    }
    else {
        console.log(`you lose`);
        compNum++;
        compScore.innerText = compNum;
        userMsg.innerText = `You lose the Game.${compChoice} beats your ${userChoice}` ;
        userMsg.style.backgroundColor="red" ;
    }
}
const choices = document.querySelectorAll(".choice") ;
const userMsg = document.querySelector(".msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#Computer-score");
 const genCompChoice = () =>
 {
    let option =["rock", "paper", "scissor"]
    let indexvlaue = Math.floor(Math.random() * 3);
    return option[indexvlaue];
 }
const playGame = (userChoice)=> {
    console.log ("user choice =", userChoice)
    const compChoice = genCompChoice();
    console.log ("computer choice =",genCompChoice());
    if (userChoice === compChoice) {
        drawGame(); } 
        else {
      let  userWin = true;
       if (userChoice === "rock"){
    userWin = compChoice === "paper" ? false : true ;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        winGame(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=> {
choice.addEventListener("click",()=>
 {   const userChoice = choice.getAttribute("id");
    playGame(userChoice);} )
});