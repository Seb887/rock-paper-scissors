'use strict';

const allPlayerButtons = document.querySelectorAll('.playerBtn');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const result = document.querySelector('.message');

const computerButtons = ['rock', 'paper', 'scissors'];

let playerCount = 0;
let computerCount = 0;
let playerChoice;
let computerChoice;
let resultMessage;

//Starts the game with click
allPlayerButtons.forEach((button) =>
  button.addEventListener('click', () => {
    if (button.id === 'playerRock') {
      // console.log('Playerchoice:', 'rock');
      playerChoice = 'rock';
    } else if (button.id === 'playerPaper') {
      // console.log('Playerchoice:', 'paper');
      playerChoice = 'paper';
    } else if (button.id === 'playerScissors') {
      // console.log('Playerchoice:', 'scissors');
      playerChoice = 'scissors';
    }
    getComputerChoice();
    playGame();
  })
);

function getComputerChoice() {
  const randomNumComputer = Math.floor(Math.random() * 3);
  computerChoice = computerButtons[randomNumComputer];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    resultMessage = 'You lose! Paper beats Rock';
    computerCount++;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    resultMessage = 'You win! Rock beats Scissors';
    playerCount++;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    resultMessage = 'You win! Paper beats Rock';
    playerCount++;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    resultMessage = 'You lose! Scissors beats Paper';
    computerCount++;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    resultMessage = 'You lose! Rock beats Scissors';
    computerCount++;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    resultMessage = 'You win! Scissors beats Paper';
    playerCount++;
  } else {
    resultMessage = 'Tie!';
    playerCount++;
    computerCount++;
  }
}

function playGame() {
  playRound(playerChoice, computerChoice);

  playerScore.textContent = playerCount;
  computerScore.textContent = computerCount;
  result.textContent = resultMessage;

  if (playerCount === 5 || computerCount === 5) {
    if (playerCount > computerCount) {
      resultMessage = 'Player wins!';
      result.textContent = resultMessage;
    } else if (playerCount < computerCount) {
      resultMessage = 'Computer wins!';
      result.textContent = resultMessage;
    } else {
      resultMessage = 'Tie! Nobody wins!';
      result.textContent = resultMessage;
    }
    playerCount = 0;
    computerCount = 0;
  }
}
