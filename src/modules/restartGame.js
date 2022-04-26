
export function restartGame() {
    document.querySelector('#restartGame').addEventListener('click', () => {
        location.reload();
        return false;
    });
    document.querySelector('#restartGame2').addEventListener('click', () => {
        location.reload();
        return false;
    });
}