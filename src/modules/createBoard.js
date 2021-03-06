export let listOfSquareClasses = [];

let letters = 'ABCDEFGHIJ';

for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < 10; j++) {
        listOfSquareClasses.push(`${letters[i]}${j+1}`);
    }
}

export function createBoard(containerElement) {
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < 10; j++) {
            let div = document.createElement('div');
            div.classList.add('square');
            div.classList.add(`${letters[i]}${j+1}`);
            containerElement.appendChild(div);
        }
    }
}

// createBoard(document.querySelector('#setShipsGameboard'));