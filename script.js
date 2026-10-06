let score = 0;

const scoreDisplay = document.getElementById("score");
const title = document.getElementById("title");
const attackButton = document.getElementById("attackButton");
const resetButton = document.getElementById("resetButton");

const playerNameInput = document.getElementById("playerName");
const attackValueInput = document.getElementById("attackValue");
const message = document.getElementById("message");

const attacks = [];
const historyList = document.getElementById("history");

const attackCountDisplay = document.getElementById("attackCount");

// console.log(attackValueInput.value);
// console.log(typeof attackValueInput.value + 1);//i predict it will concatenate as it is read as type string
// console.log(getAttackValue()+ 5);
const powerButton = document.createElement("button");
//attackButton.addEventListener("click", performAttack);

function resetGame() {
    score = 0;
    attacks.length = 0;
    playerNameInput.value = "";
    attackValueInput.value = "1";
    title.innerText = "Click Attack";
    message.innerText = "Enter your name and choose an attack value.";
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
// console.log(attackValueInput.value);
function updateDisplay() {
    scoreDisplay.innerText = score;
    attackCountDisplay.innerText = attacks.length;
    updateHistory();

    if (score >= 20) {
        title.innerText = "YOU WIN!";
        attackButton.disabled = true;
    } else {
        title.innerText = "Click Attack";
        attackButton.disabled = false;
    }
}


powerButton.innerText = "Power Attack (+5) ";
document.body.appendChild(powerButton);

function powerAttack() {
    score +=5;
    attacks.push(5);
    updateDisplay();
}

function calculateDamage(baseDamage, isCritical) {
  if(isCritical) {
    return baseDamage * 2;
  }
  return baseDamage;
}

function performAttack() {
    const playerName = playerNameInput.value.trim();
    const attackValue = getAttackValue();
    if (playerName === "") {
        message.innerText = "Please enter your name.";
        return;
    }
    if (attackValue === null) {
        return;
    }
    const isCritical = attackValue === 10;
    const damage = calculateDamage(attackValue, isCritical);
    score += damage;
    attacks.push(damage);
    message.innerText = `${playerName} caused ${damage} damage.`;
    updateDisplay();
}
console.log(attacks);
// console.log(calculateDamage(5, false));
// console.log(calculateDamage(calculateDamage(10, true)));

function updateHistory() {
    historyList.innerHTML = "";

    for (let index = 0; index < attacks.length; index++) {
        const listItem = document.createElement("li");
        listItem.innerText =
            `Attack ${index + 1}: ${attacks[index]} damage`;
        historyList.appendChild(listItem);
    }
}

const powerButton10 = document.createElement("button");
powerButton10.innerText = "Power Attack (+10) ";
document.body.appendChild(powerButton10);

function powerAttack10() {
    score +=10;
    attacks.push(10);
    updateDisplay();
}

// TODO: connect both functions to buttons
attackButton.addEventListener("click", performAttack); //bug hunt- addPoint() when parenthesis calls immediately
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
