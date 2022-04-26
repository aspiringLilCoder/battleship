// import { Attack } from "./attack";
import { placeImg } from "./generateOwnShips";
import { myAttack } from "./myAttack";
import { placeAIShips } from "./placeAIships";

export function startGame() {
    const startBtn = document.querySelector('.start');
    const homeDiv = document.querySelector('#home');
    const gameDiv = document.querySelector('#game');
    startBtn.addEventListener('click', () => {
        homeDiv.style.display = 'none';
        gameDiv.style.display = 'flex';
        placeImg('carrier');
        placeImg('battleship');
        placeImg('destroyer');
        placeImg('submarine');
        placeImg('patrol boat');
        myAttack();
    })
}