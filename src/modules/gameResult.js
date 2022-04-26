
export function gameResult(whoWon) {
    const resultText = document.querySelector('#resultText');
    const gameResultDisplay = document.querySelector('#gameResult');
    gameResultDisplay.style.display = 'flex';
    if (whoWon == 'player') {
        
    } else {
        resultText.textContent = 'You have Lost..';
    }
}