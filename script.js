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
        computerSelection == choice[2]? score.computer++ : score.player++;
        return (computerSelection == choice[0]? "You Lose! rock beats scissors!" : "You Win! scissors beats paper!");
    }
}
function game(){
    let rounds = 5;
    let playerSelection,computerSelection;
    console.log("YOU VS COMPUTER! BEST OF 5 ROUNDS! GO!");
    while(rounds > 0){
        playerSelection = prompt("Rock, paper or Scissors?").toLowerCase();
        computerSelection = getComputerChoice();
        console.log(`ROUND ${rounds}!`);
        console.log(playRound(playerSelection,computerSelection));
        rounds--;
    }
    if(score.player == score.computer){
        console.log("FUE UN EMPATE! Habrá que jugar otra vez!");
    }
    console.log(score.player>score.computer? "FELICIDADES! LE GANASTE A LA COMPUTADORA! ERES GENIAL! :D": "PERDISTE! LA COMPUTADORA TE GANÓ :(");
}

game();