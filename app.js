'use strict';

/*
In unserer Benutzeroberfläche sollte der Spieler in der Lage sein, das Spiel zu spielen, indem er auf Schaltflächen klickt, 
anstatt seine Antwort in eine Eingabeaufforderung zu tippen.

    [x]  Entfernen Sie vorerst die Logik, die genau fünf Runden spielt.
    [x]  Erstellen Sie drei Knöpfe, eine für jede Auswahl. Fügen Sie einen Event-Hörer zu den Buttons hinzu, 
        die Sie anrufen playRoundFunktion mit dem richtigen playerSelectionjedes Mal, wenn ein Button angeklickt wird. 
        (Sie können die console.logs für diesen Schritt)
    []  Fügen Sie ein divzum Anzeigen von Ergebnissen und Ändern all Ihrer console.logs in DOM-Methoden.
    []  Zeigen Sie die laufende Punktzahl an und kündigen Sie einen Gewinner des Spiels an, sobald ein Spieler 5 Punkte erreicht hat.
    []  Sie müssen wahrscheinlich Ihren ursprünglichen Code reactor (rework/reriten), damit er dafür funktioniert. Das ist OK! Die Nacharbeit von altem Code ist ein wichtiger Teil des Lebens eines Programmierers.

Sobald Sie alle mit Ihrer Benutzeroberfläche fertig sind und sicherstellen, dass alles zufriedenstellend ist, 
begnügen Sie Ihre Änderungen an der rps-uiFiliale.
Werfen wir nun einen Blick darauf, wie wir die Veränderungen aus unseren rps-uibranch zurück zu uns mainFiliale.

    []  Kassen Sie die Filiale, die wir fusionieren wollen INTO, d.h. mainmit Befehl git checkout main.
    []  Jetzt fusionieren wir rps-uizweig in main, unsere jetzige Branche, mit git merge rps-ui.
    []  Wenn alles gut geht, rps-uiFiliale ist nun erfolgreich mit Main fusioniert! Nutzung git logund 
        Sie werden alle Spenden sehen, die Sie zu Ihrem Feature-Zweig gemacht haben, zusätzlich zu den Engagements, 
        die Sie zum Hauptzweig gemacht haben. Jetzt für unseren letzten Schritt!
    []  Wir schieben unsere mainverzweigen Sie sich in unseren Remote-Repo beim Laufen git push origin main. 
        Gehen Sie zu Ihrem GitHub repo und Sie werden sehen, dass unsere mainbranch wird alle Änderungen und Engagements, 
        die Sie zu rps-uiFiliale. Gratulation! Sie haben Ihr erstes Feature erfolgreich in Ihre Produktionsbranche geschoben!
    []  Jetzt, da wir alle unsere Code im Hauptzweig haben, brauchen wir nicht wirklich unsere rps-uiZweig mehr. 
        Lassen Sie uns etwas Aufräumen, sowohl lokal als auch im Remote-Repo. Löschen Sie die Filiale aus unserem lokalen 
        Repo mit git branch -d rps-uiund auch aus dem Remote-Repo auf GitHub mit git push --delete origin rps-ui. 
        Herzlichen Glückwunsch, wir sind alle fertig mit unserer Säuberung!


*/

// Player Buttons
const allPlayerButtons = document.querySelectorAll('.playerBtn');
const playerRock = document.querySelector('#playerRock');
const playerPaper = document.querySelector('#playerPaper');
const playerScissors = document.querySelector('#playerScissors');

/*
// Computer Buttons
const allComputerButtons = document.querySelectorAll('.computerBtn');
const computerRock = document.querySelector('#computerRock');
const computerPaper = document.querySelector('#computerPaper');
const computerScissors = document.querySelector('#computerScissors');
*/

const computerButtons = ['rock', 'paper', 'scissors'];

let playerCount = 0;
let computerCount = 0;

function getPlayerChoice() {
  allPlayerButtons.forEach((button) =>
    button.addEventListener('click', () => {
      if (button.value === 'playerRock') {
        console.log('Playerchoice:', button.value);
        return 'rock';
      } else if (button.value === 'playerPaper') {
        console.log('Playerchoice:', button.value);
        return 'paper';
      } else if (button.value === 'playerScissors') {
        console.log('Playerchoice:', button.value);
        return 'scissors';
      }
    })
  );
}

function getComputerChoice() {
  const randomNumComputer = Math.floor(Math.random() * 3);
  // console.log('computerSelection: ', itemsArr[randomNumComputer]);
  return computerButtons[randomNumComputer];
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

  if (playerCount > computerCount) {
    alert('Player wins!');
  } else {
    alert('Computer wins!');
  }
}

// playRound(getPlayerChoice(), getComputerChoice());

// function game() {
//   for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt('Wähle zwischen ROCK - PAPER - SCISSORS:');
//     playRound(playerSelection, getComputerChoice());
//   }

//   if (playerCount > computerCount) {
//     alert('Player wins!');
//   } else {
//     alert('Computer wins!');
//   }
// }
