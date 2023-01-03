'use strict';

const itemsArr = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const randomNumComputer = Math.floor(Math.random() * 3);
  // console.log('computerSelection: ', itemsArr[randomNumComputer]);
  return itemsArr[randomNumComputer];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'You lose! Paper beats Rock.';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You win! Rock beats Scissors.';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You win! Paper beats Rock.';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'You lose! Rock beats Scissors.';
  } else {
    return 'Nobody wins!';
  }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// console.log(getComputerChoice());
