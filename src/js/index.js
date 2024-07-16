// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// Localizar elementos
// Crear datos del programa
// Detectar donde hacemos click
// Guardar la opcion selecionada
// Generar una jugada aleatoria del PC
// Comparar jugadas
// Mostrar resultado
// Asignar puntos

// script.js

const userScoreElement = document.getElementById('user-score');
const computerScoreElement = document.getElementById('computer-score');
const resultElement = document.getElementById('result');

let userScore = 0;
let computerScore = 0;

// Function to reset the game scores
const resetGame = () => {
  userScore = 0;
  computerScore = 0;
  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;
  resultElement.textContent = 'Make your move';
};

// Function to generate a random computer choice
const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

// Function to determine the winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
};

// Function to update scores and display result
const updateScoreAndResult = result => {
  if (result === 'You win!') {
    userScore++;
    userScoreElement.textContent = userScore;
  } else if (result === 'You lose!') {
    computerScore++;
    computerScoreElement.textContent = computerScore;
  }
  resultElement.textContent = result;
};

// Event listeners for each choice
document.getElementById('rock').addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const result = determineWinner('rock', computerChoice);
  updateScoreAndResult(result);
});

document.getElementById('paper').addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const result = determineWinner('paper', computerChoice);
  updateScoreAndResult(result);
});

document.getElementById('scissors').addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const result = determineWinner('scissors', computerChoice);
  updateScoreAndResult(result);
});

// Event listener for the reset button
document.getElementById('reset').addEventListener('click', resetGame);

// Initialize the game
resetGame();
