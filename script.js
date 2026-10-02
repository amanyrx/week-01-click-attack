let score = 0;

const scoreDisplay = document.getElementById("score");
const title = document.getElementById("title");
const attackButton = document.getElementById("attackButton");
const resetButton = document.getElementById("resetButton");

const playerNameInput = document.getElementById("playerName");
const attackValueInput = document.getElementById("attackValue");
const message = document.getElementById("message");

console.log(attackValueInput.value);
console.log(typeof attackValueInput.value + 1);//i predict it will concatenate as it is read as type string
console.log(getAttackValue()+ 5);

attackButton.addEventListener("click", addPoint);

// TODO: create addPoint()
function addPoint() {
    score++;
    updateDisplay();
}
// TODO: create resetGame()
function resetGame() {
    score = 0;
    title.innerText = "Click Attack";
    updateDisplay();
}

function getAttackValue() {
  const rawValue = attackValueInput.value.trim();

  if(rawValue === "") {
    message.innerText = "Please enter a valid number";
    return null;
  }
  const attackValue = Number(rawValue);
  if(Number.isNaN(attackValue)) {
    message.innerText = "Please enter a valid number.";
    return null;
  }
  if(attackValue < 1 || attackValue > 10) {
    message.innerText = "Choose an attack value from 1 to 10.";
    return null;
  }

  return attackValue;
}
console.log(attackValueInput.value);
function updateDisplay() {
    scoreDisplay.innerText = score;

    if (score >= 20) {
        title.innerText = "YOU WIN!";
    }
}

const powerButton = document.createElement("button");
powerButton.innerText = "Power Attack (+5) ";
document.body.appendChild(powerButton);

function powerAttack() {
    score +=5;
    updateDisplay();
}

const powerButton10 = document.createElement("button");
powerButton10.innerText = "Power Attack (+10) ";
document.body.appendChild(powerButton10);

function powerAttack10() {
    score +=10;
    updateDisplay();
}

// TODO: connect both functions to buttons
attackButton.addEventListener("click", addPoint); //bug hunt- addPoint() when parenthesis calls immediately
powerButton.addEventListener("click", powerAttack);
powerButton10.addEventListener("click", powerAttack10);
resetButton.addEventListener("click", resetGame);

// const playerName = "Mary";
// console.log(typeof playerName); //shows what the variable is being inferred as
//
// const damage = 5;
// console.log(typeof damage);
//
// const hasWon = false;
// console.log(typeof hasWon);
//
// //const value = attackValueInput.value;
// //console.log(value+1);
// //const value = 50;
// //const attackValue = Number(value);
// //console.log(attackValue + 1);
//
// const attackValue = "10";
// console.log(typeof attackValue);
//
// if(Number.isNaN(attackValue)){
//     message.innerText = "Please enter a valid number.";
// }
//strict equality === same value, type etc
