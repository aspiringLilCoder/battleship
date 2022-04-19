import {allShips} from "..";
import { axisVar } from "./axis";
import { listOfSquareClasses } from "./createBoard";
import { currentShip, instructionDisplay } from "./instructionsDisplay";

const letters = 'ABCDEFGHIJ';

export let setShips = (function() {
    let valid = true;

    let shipsHover = () => {
        const squares_div = document.querySelectorAll('#setShipsGameboard .square');

        squares_div.forEach(el => {
            let resetColor = () => {
                listOfSquareClasses.forEach(el => {
                    document.querySelector(`#setShipsGameboard .${el}`).style.backgroundColor = '#f0f8ff';

                })
            };

            el.addEventListener('mouseover', (e) => {
                let currentShipObj = allShips[currentShip.toLowerCase()];

                resetColor();

                let letter = e.target.classList[1][0];
                let num = parseInt(e.target.classList[1].slice(1, 3), 10);

                for (let i = 0; i < currentShipObj.length; i++) {
                    if(axisVar == 'horizontal') {
                        if (document.querySelector(`#setShipsGameboard .${letter}${num+i}`) == null) {
                            for (let j = 0; j < currentShipObj.length; j++) {
                                document.querySelector(`#setShipsGameboard .${letter}${num+j}`).style.backgroundColor = '#ff8080';
                                valid = false;
                            }
                        } else {
                            document.querySelector(`#setShipsGameboard .${letter}${num+i}`).style.backgroundColor = '#8b8b8b';
                            valid = true;
                        }
                    } else {
                        if (document.querySelector(`#setShipsGameboard .${letters[letters.indexOf(letter)+i]}${num}`) == null) {
                            for (let j = 0; j < currentShipObj.length; j++) {
                                valid = false;
                                document.querySelector(`#setShipsGameboard .${letters[letters.indexOf(letter)+j]}${num}`).style.backgroundColor = '#ff8080';
                            }
                        } else {
                            valid = true;
                            document.querySelector(`#setShipsGameboard .${letters[letters.indexOf(letter)+i]}${num}`).style.backgroundColor = '#8b8b8b';
                        }
                    }
                }
            });

            el.addEventListener('mouseout', () => {
                resetColor();
            });
        });
    }


    let shipClick = function() {
        const squares_div = document.querySelectorAll('#setShipsGameboard .square');

        squares_div.forEach(el => {
            el.addEventListener('click', (e) => {
                let currentShipObj = allShips[currentShip.toLowerCase()];
                if (valid == false) {

                } else {
                    let letter = e.target.classList[1][0];
                    let num = parseInt(e.target.classList[1].slice(1, 3), 10);

                    for (let i = 0; i < currentShipObj.length; i++) {
                        if(axisVar == 'horizontal') {
                            (currentShipObj.shipPlacement).push(`${letter}${num+i}`);
                            document.querySelector(`#setShipsGameboard .${letter}${num+i}`).classList.add('selected');
                        } else {
                            (currentShipObj.shipPlacement).push(`${letters[letters.indexOf(letter)+i]}${num}`);
                            document.querySelector(`#setShipsGameboard .${letters[letters.indexOf(letter)+i]}${num}`).classList.add('selected');
                        }
                    }
                }
                instructionDisplay(currentShip);
                console.log(currentShip);
            })
        })
    };

    return {
        shipsHover,
        shipClick
    }
})();
