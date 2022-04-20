import { createBoard } from "./createBoard";
import { placeImg } from "./generateOwnShips";

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
    })
}