import { startGame } from "./startGame";

const instructionsText_p = document.getElementById('instructionsText');
const instructionsDisplay_div = document.getElementById('instructionsDisplay');

export let currentShip = 'start';

export function instructionDisplay(ship) {
    if (ship == 'Patrol Boat') {
        instructionsText_p.textContent = 'PRESS TO START';
        instructionsDisplay_div.classList.add('start');
        currentShip = 'finish';
        startGame();
        return;
    }
    const shipOrder = ['start', 'Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Patrol Boat'];
    instructionsText_p.textContent = `Place your ${shipOrder[shipOrder.indexOf(ship) + 1]}...`;
    instructionsText_p.classList.add('changingDisplay');
    currentShip = shipOrder[shipOrder.indexOf(ship) + 1];
    const removeAnimationCLass = () => {
        instructionsText_p.classList.remove('changingDisplay');
    }
    setTimeout(removeAnimationCLass, 3000);
}

// instructionDisplay('Submarine');