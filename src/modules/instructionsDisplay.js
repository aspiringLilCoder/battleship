let instructionsText_p = document.getElementById('instructionsText');

export default function instructionDisplay(currentShip) {
    const shipOrder = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Patrol Boat'];
    instructionsText_p.textContent = `Place your ${shipOrder[shipOrder.indexOf(currentShip) + 1]}...`;
    instructionsText_p.classList.add('changingDisplay');
    const removeAnimationCLass = () => {
        instructionsText_p.classList.remove('changingDisplay');
    }
    setTimeout(removeAnimationCLass, 3000);
}

// instructionDisplay('Submarine');