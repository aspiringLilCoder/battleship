
export let currentTurn = 'player'; //AI

export function changeTurn() {
    const turnText = document.querySelector('#turnText');
    if (currentTurn == 'player') {
        turnText.textContent = "Awaiting Opponent's Attack..";
        currentTurn = 'AI';
    } else {
        turnText.textContent = "It's your turn to attack!";
        currentTurn = 'player';
    }
}