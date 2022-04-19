import { createBoard } from "./createBoard";

export function startGame() {
    const startBtn = document.querySelector('.start');
    const homeDiv = document.querySelector('#home');
    const gameDiv = document.querySelector('#game');
    startBtn.addEventListener('click', () => {
        homeDiv.style.display = 'none';
        gameDiv.style.display = 'flex';
        createBoard(document.querySelector('#myBoard'));
        createBoard(document.querySelector('#AIBoard'));
    })
}