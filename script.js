let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userscorepara=document.querySelector("#yourscore");
let compscorepara=document.querySelector("#compscore");
let logo=document.querySelector("#logo");
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const radIdx=Math.floor(Math.random() * 3);
    return options[radIdx];
}
const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="game was draw! play again";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userscorepara.innerText=userScore;
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compscorepara.innerText=compScore;
        msg.innerText=`You Lost! your ${compChoice} beats ${userChoice} `;
        msg.style.backgroundColor="red";
    }
};
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice === compChoice){
     drawGame()
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
