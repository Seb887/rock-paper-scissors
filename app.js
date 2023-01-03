'use strict';

const itemsArr = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const randomNumComputer = Math.floor(Math.random() * 3);
  return itemsArr[randomNumComputer];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'rock') {
    console.log('Nobody wins!');
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log('You lose! Paper beats Rock.');
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log('You lose! Paper beats Rock.');
  }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// console.log(getComputerChoice());
