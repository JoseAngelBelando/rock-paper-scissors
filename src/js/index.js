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

const gameItemsElement = document.getElementById('game-items');
const userPickedElement = document.getElementById('user-picked');
const pcPickedElement = document.getElementById('pc-picked');
const resulElement = document.getElementById('result');
const pointsUserElement = document.getElementById('points-user');
const pointsPcElement = document.getElementById('points-pc');
// Creamos un objeto con las reglas del juego
const gameRules = {
  paper: {
    rock: true,
    scissors: false
  },
  scissors: {
    paper: true,
    rock: false
  },
  rock: {
    scissors: true,
    paper: false
  }
};

// jugadas del ordenador
const gameOptions = ['rock', 'paper', 'scissors'];
// variables para guardar la opción selecionada por el jugador y por el pc
let userSelection = null;
let pcSelection = null;
// variables para guardar los puntos
let userPoints = 0;
let pcPoints = 0;
let showResults = false;
// funcion para cambiar el textcontent del marcador de puntos
const updateScore = event => {
  pointsUserElement.textContent = userPoints;
  pointsPcElement.textContent = pcPoints;
};
// Para sacar los resultados por pantalla
const printResults = event => {
  userPickedElement.textContent = userSelection.toUpperCase();
  pcPickedElement.textContent = pcSelection.toUpperCase();
};
// Para el empate
const checkTie = event => {
  if (userSelection === pcSelection) {
    resulElement.textContent = 'TIE';
    return;
  }
  // Comprobamos que ha salido entre las opciones del objeto
  if (gameRules[userSelection][pcSelection]) {
    resulElement.textContent = 'You Win';
    userPoints++;
  } else {
    resulElement.textContent = 'You Lose';
    pcPoints++;
  }
  updateScore();
};

// funcion que genere una jugada aleatoria para el pc
const generateRandomPc = event => {
  const randomPc = Math.floor(Math.random() * gameOptions.length);
  const pcPlay = gameOptions[randomPc];
  pcSelection = pcPlay;
  printResults();
  checkTie();
};

// Creamos una función para guardar los datos del jugador en userSelection
const setUserSelection = item => {
  userSelection = item;
  generateRandomPc();
};
// si el elemento donde hemos hecho click no es el game-item
gameItemsElement.addEventListener('click', event => {
  if (!event.target.classList.contains('game-item')) return;
  setUserSelection(event.target.dataset.item);
});
// Para pasar informacion desde html a js vamos a utilñizar los atributos data

// Boton para las reglas
document.getElementById('button-rules').addEventListener('click', event => {
  let img = document.getElementById('img-rules');
  if (img.style.display === 'none') {
    img.style.display = 'block'; // Mostrar la imagen
  } else {
    img.style.display = 'none'; // Alternar para ocultar la imagen si ya está visible
  }
});
