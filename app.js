'use strict';

const itemsArr = ['rock', 'paper', 'scissors'];
let playerCount = 0;
let computerCount = 0;

function getComputerChoice() {
  const randomNumComputer = Math.floor(Math.random() * 3);
  // console.log('computerSelection: ', itemsArr[randomNumComputer]);
  return itemsArr[randomNumComputer];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerCount++;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerCount++;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerCount++;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerCount++;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerCount++;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerCount++;
  } else {
    playerCount++;
    computerCount++;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Wähle zwischen ROCK - PAPER - SCISSORS:');
    playRound(playerSelection, getComputerChoice());
  }

  if (playerCount > computerCount) {
    alert('Player wins!');
  } else {
    alert('Computer wins!');
  }
}

game();
