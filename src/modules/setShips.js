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
                if (valid == false || currentShip == 'finish') {

                } else {
                    console.log(e.target);
                    console.log('valid is true');

                    let letter = e.target.classList[1][0];
                    let num = parseInt(e.target.classList[1].slice(1, 3), 10);
                    console.log(letter, num);
                    for (let i = 0; i < currentShipObj.length; i++) {
                        console.log(i);
                        if(axisVar == 'horizontal' && document.querySelector(`#setShipsGameboard .${letter}${num+i}`).classList.contains('selected')) {
                            console.log('horizontal');
                            console.log(`${letter}${num+i}`);
                            valid = false;
                            console.log('valid is false');
                        } else if(axisVar == 'vertical' && document.querySelector(`#setShipsGameboard .${letters[letters.indexOf(letter)+i]}${num}`).classList.contains('selected')) {
                            console.log('vertical');
                            console.log(`${letters[letters.indexOf(letter)+i]}${num}`);
                            valid = false;
                            console.log('valid is false');
                        } 
                    }

                    for (let i = 0; i < currentShipObj.length; i++) {
                        if(valid == true) {
                            if(axisVar == 'horizontal') {
                                (currentShipObj.shipPlacement).push(`${letter}${num+i}`);
                                let selectedSquare = document.querySelector(`#setShipsGameboard .${letter}${num+i}`);
                                selectedSquare.classList.add('selected');
                                 currentShipObj.name == 'carrier' ? selectedSquare.classList.add('carrier')
                                                                : (currentShipObj.name == 'battleship' ? selectedSquare.classList.add('battleship')
                                                                : (currentShipObj.name == 'destroyer' ? selectedSquare.classList.add('destroyer')
                                                                : (currentShipObj.name == 'submarine' ? selectedSquare.classList.add('submarine')
                                                                : (currentShipObj.name == 'patrol boat' ? selectedSquare.classList.add('patrol-boat')
                                                                : false))))
                            } else {
                                (currentShipObj.shipPlacement).push(`${letters[letters.indexOf(letter)+i]}${num}`);
                                let selectedSquare = document.querySelector(`#setShipsGameboard .${letters[letters.indexOf(letter)+i]}${num}`);
                                selectedSquare.classList.add('selected');
                                currentShipObj.name == 'carrier' ? selectedSquare.classList.add('carrier')
                                                                : (currentShipObj.name == 'battleship' ? selectedSquare.classList.add('battleship')
                                                                : (currentShipObj.name == 'destroyer' ? selectedSquare.classList.add('destroyer')
                                                                : (currentShipObj.name == 'submarine' ? selectedSquare.classList.add('submarine')
                                                                : (currentShipObj.name == 'patrol boat' ? selectedSquare.classList.add('patrol-boat')
                                                                : false))))
                            } 
                            
                        }
                    }
                    console.log(currentShipObj.shipPlacement);
                    if (valid == true) {
                        instructionDisplay(currentShip);
                    }

                }
            })
        })
    };

    let shipReset = () => {
        document.querySelector('#resetBoard').addEventListener('click', () => {
            listOfSquareClasses.forEach(el => {
                document.querySelector(`#setShipsGameboard .${el}`).style.backgroundColor = '#f0f8ff';
                document.querySelector(`#setShipsGameboard .${el}`).classList.remove('carrier');
                document.querySelector(`#setShipsGameboard .${el}`).classList.remove('battleship');
                document.querySelector(`#setShipsGameboard .${el}`).classList.remove('destroyer');
                document.querySelector(`#setShipsGameboard .${el}`).classList.remove('submarine');
                document.querySelector(`#setShipsGameboard .${el}`).classList.remove('patrol-boat');
                document.querySelector(`#setShipsGameboard .${el}`).classList.remove('selected');
                for (const prop in allShips) {
                    allShips[prop].shipPlacement = [];
                }
            })
            instructionDisplay('start');
        })
    }

    return {
        shipsHover,
        shipClick,
        shipReset
    }
})();
