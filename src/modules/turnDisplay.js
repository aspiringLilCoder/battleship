import { autoAttack } from "./autoAttack";

export let currentTurn = 'player'; //AI

export function changeTurn() {
    const turnText = document.querySelector('#turnText');
    if (currentTurn == 'player') {
        turnText.textContent = "Awaiting Opponent's Attack..";
        currentTurn = 'AI';
        turnText.classList.add('changingDisplay');
        const removeAnimationCLass = () => {
        turnText.classList.remove('changingDisplay');
        }
        setTimeout(removeAnimationCLass, 3000);
        autoAttack();
    } else {
        turnText.textContent = "It's your turn to attack!";
        currentTurn = 'player';
        turnText.classList.add('changingDisplay');
        const removeAnimationCLass = () => {
        turnText.classList.remove('changingDisplay');
        }
        setTimeout(removeAnimationCLass, 3000);
    }
}