
function computerPlay() {
    let options = { 1: "rock", 2: "paper", 3: "scissors" };
  
    return options[Math.floor(Math.random() * 3) + 1];
  }
  
  let playerScore = 0;
  let computerScore = 0;
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
      console.log(
        `You chose ${playerSelection} and the computer chose ${computerSelection}. Paper beats rock! Sorry!`
      );
  
      computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      console.log(
        `You chose ${playerSelection} and the computer chose ${computerSelection}. Paper beats rock! Congrats!`
      );
  
      playerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      console.log(
        `You chose ${playerSelection} and the computer chose ${computerSelection}. Rock beats scissors! Congrats!`
      );
      playerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      console.log(
        `You chose ${playerSelection} and the computer chose ${computerSelection}. Rock beats scissors! Sorry!`
      );
      computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      console.log(
        `You chose ${playerSelection} and the computer chose ${computerSelection}. Scissors beats paper! Congrats!`
      );
      playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      console.log(
        `You chose ${playerSelection} and the computer chose ${computerSelection}. Scissors beats paper! Sorry!`
      );
      computerScore++;
    } else if (playerSelection === computerSelection) {
      console.log(
        `You chose ${playerSelection} and the computer chose ${computerSelection}. That's a tie!`
      );
    }
  
    return playerScore;
    return computerScore;
  };
  
  function game() {
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt(
        "Choose rock, paper, or scissors"
      ).toLowerCase();
  
      while (
        playerSelection !== "rock" &&
        playerSelection !== "paper" &&
        playerSelection !== "scissors"
      ) {
        playerSelection = prompt(
          "Choose a valid input: rock, paper, or scissors"
        ).toLowerCase();
      }
      playRound(playerSelection, computerPlay());
    }
  
    if (playerScore > computerScore) {
      console.log(
        `Congrats! You beat the computer ${playerScore} out of 5 rounds!`
      );
    } else if (playerScore === computerScore) {
      console.log("This game ended in a tie.");
    } else {
      console.log(
        `Oh no, the computer beat you ${computerScore} out of 5 rounds`
      );
    }
  
    let newGame = prompt(
      "Would you like to play again? Choose yes or no"
    ).toLowerCase();
  
      while (newGame !== "yes" && newGame !=="no"){
          newGame = prompt(`Oh, that must be a typo, please try to put only "yes" or "no"`).toLowerCase();
      }
  
  
    if (newGame === "yes") {
      playerScore = 0;
      computerScore = 0;
      game();
    } else {
      console.log("Ok, see you next time!");
    }
  }
  game();
  
  
  
  
  
  