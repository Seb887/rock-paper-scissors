'use strict';

const itemsArr = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const randomNumComputer = Math.floor(Math.random() * 3);
  return itemsArr[randomNumComputer];
}

getComputerChoice();

// new line
console.log('Hello');
