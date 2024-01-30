let choice= ["rock","paper", "scissors"];
let score ={
    player : 0,
    computer : 0
}
function getComputerChoice(){
    return choice[Math.floor(Math.random()*choice.length)];
}
function playRound(playerSelection,computerSelection,){
    if(playerSelection == computerSelection){
        return "it's a TIE! Play Again! :)";
    }
    if (playerSelection == choice[0]){
        computerSelection == choice[2]? score.player++ : score.computer++;
        return (computerSelection == choice[2]? "You Win! rock beats scissors! :)": "You lose! paper beats rock! :(");
    }else if(playerSelection == choice[1]){
        computerSelection == choice[0]? score.player++ : score.computer++;
        return(computerSelection == choice[0]? "You win! paper beats rock! :)" :"You lose! scissors beats paper! :(");
    }else {
        computerSelection == choice[0]? score.computer++ : score.player++;
        return (computerSelection == choice[0]? "You Lose! rock beats scissors!" : "You Win! scissors beats paper!");
    }
}
function getPlayerChoice(playerChoice){
    h3.textContent = playRound(playerChoice, getComputerChoice());
    document.getElementById("p-score").textContent= score.player;
    document.getElementById("c-score").textContent= score.computer;
    rounds--;
    if(rounds < 1){
        for(let i=0;i<choice.length;i++){
            document.getElementsByClassName("btn")[i].setAttribute('disabled','true');
        }
        if(score.player == score.computer){
            h3.textContent = 'IT WAS A TIE! F5 to Play again! :)';
         }else{
            h3.textContent = score.player>score.computer? "CONGRATS! I BEAT THE COMPUTER! YOU'RE AWESOME!" : "YOU LOSE! TRY HARDER NEXT TIME :(";
         }
    }
}

let rounds= 5;
const h3= document.createElement('h3');
document.getElementsByClassName('presentacion')[0].appendChild(h3);

document.getElementById('rock').addEventListener("click", () => getPlayerChoice("rock"));
document.getElementById('paper').addEventListener("click", () => getPlayerChoice("paper"));
document.getElementById('scissors').addEventListener("click", () => getPlayerChoice("scissors"));
 
