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

// index.js

document.addEventListener('DOMContentLoaded', () => {
  const gameItemsElement = document.getElementById('game-items');
  const gameItemsAdvanceElement = document.getElementById('game-items-advance');
  const userPickedElement = document.getElementById('user-picked');
  const pcPickedElement = document.getElementById('pc-picked');
  const resultElement = document.getElementById('result');
  const pointsUserElement = document.getElementById('points-user');
  const pointsPcElement = document.getElementById('points-pc');
  const buttonRules = document.getElementById('button-rules');
  const imgRules = document.getElementById('img-rules');

  // Variables to store user and PC selections, and points
  let userSelection = null;
  let pcSelection = null;
  let userPoints = 0;
  let pcPoints = 0;

  // Function to update the score display
  const updateScore = () => {
    pointsUserElement.textContent = userPoints;
    pointsPcElement.textContent = pcPoints;
  };

  // Function to print the user and PC selections
  const printResults = () => {
    userPickedElement.textContent = userSelection.toUpperCase();
    pcPickedElement.textContent = pcSelection.toUpperCase();
  };

  // Function to check for a tie or determine winner
  const checkTie = () => {
    if (userSelection === pcSelection) {
      resultElement.textContent = 'TIE';
      return;
    }

    if (gameRules[userSelection][pcSelection]) {
      resultElement.textContent = 'You Win';
      userPoints++;
    } else {
      resultElement.textContent = 'You Lose';
      pcPoints++;
    }

    updateScore();
  };

  // Function to generate a random selection for PC
  const generateRandomPc = gameOptions => {
    const randomPc = Math.floor(Math.random() * gameOptions.length);
    return gameOptions[randomPc];
  };

  // Function to set user selection and start the game for Simple mode
  const setUserSelectionSimple = item => {
    userSelection = item;
    pcSelection = generateRandomPc(gameOptionsSimple);
    printResults();
    checkTie();
  };

  // Event listener for game items in Simple mode
  gameItemsElement.addEventListener('click', event => {
    if (!event.target.classList.contains('game-item')) return;
    setUserSelectionSimple(event.target.dataset.item);
  });

  // Function to set user selection and start the game for Advanced mode
  const setUserSelectionAdvance = item => {
    userSelection = item;
    pcSelection = generateRandomPc(gameOptionsAdvanced);
    printResults();
    checkTie();
  };

  // Event listener for game items in Advanced mode
  gameItemsAdvanceElement.addEventListener('click', event => {
    if (!event.target.classList.contains('game-item')) return;
    setUserSelectionAdvance(event.target.dataset.item);
  });

  // Event listener for rules button to toggle display of rules image
  buttonRules.addEventListener('click', () => {
    imgRules.style.display = imgRules.style.display === 'none' ? 'block' : 'none';
  });

  // Set initial game mode based on the URL or default to simple mode
  const url = window.location.href;
  const isAdvancedMode = url.includes('rock-paper-scissors-advance.html');

  // Set game rules and options based on the mode
  let gameRules, gameOptions;
  if (isAdvancedMode) {
    gameRules = gameRulesAdvanced;
    gameOptions = gameOptionsAdvanced;
    gameItemsAdvanceElement.parentElement.style.display = 'block';
    gameItemsElement.parentElement.style.display = 'none';
  } else {
    gameRules = gameRulesSimple;
    gameOptions = gameOptionsSimple;
    gameItemsElement.parentElement.style.display = 'block';
    gameItemsAdvanceElement.parentElement.style.display = 'none';
  }

  // Initialize score display
  updateScore();
});
