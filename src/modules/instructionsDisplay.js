const instructionsText_p = document.getElementById('instructionsText');
const instructionsDisplay_div = document.getElementById('instructionsDisplay');

export let currentShip = 'start';

export function instructionDisplay() {
    if (currentShip == 'Patrol Boat') {
        instructionsText_p.textContent = 'PRESS TO START';
        instructionsDisplay_div.classList.add('start');
        return;
    }
    const shipOrder = ['start', 'Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Patrol Boat'];
    instructionsText_p.textContent = `Place your ${shipOrder[shipOrder.indexOf(currentShip) + 1]}...`;
    instructionsText_p.classList.add('changingDisplay');
    currentShip = shipOrder[shipOrder.indexOf(currentShip) + 1];
    const removeAnimationCLass = () => {
        instructionsText_p.classList.remove('changingDisplay');
    }
    setTimeout(removeAnimationCLass, 3000);
}

// instructionDisplay('Submarine');