
const roll = document.getElementById("roll");
const score = document.getElementById("score");
const image = document.getElementById("image");
let player1 = 0;

roll.addEventListener ("click", () => {
    roll.textContent = "roll";
    let currentRoll = Math.ceil (Math.random() * 6);
    image.src = `./Images/${currentRoll}.png`
    player1 += currentRoll;
    score.textContent = player1;
    if (player1 > 20) {
    score.textContent = `You've won with a score of ${player1}`;
    player1 = 0;
    roll.textContent = `Play again?`
     } else {
     
    if (currentRoll == 1) {
    score.textContent = `You lost`;
    player1 = 0;
    roll.textContent = `Play again?`
     }
    }
});