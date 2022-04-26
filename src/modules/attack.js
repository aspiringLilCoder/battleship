import { allShips, allAIShips} from "..";
import explodeImg from '../../img/explode.png';
import waterImg from '../../img/water.png';
import { listOfSquareClasses } from "./createBoard";

export const Attack = (function () {
    let turn = 'player';

    const changeTurn = () => {
        const turnText_p = document.querySelector('#turnText');
        if (turn == 'player') {
            resetHover();
            turn = 'AI';
            turnText_p.textContent = "Awaiting Opponent's Attack";
            AIAttack();
        } else {
            playerHover();
            turn = 'player';
            turnText_p.textContent = "It's your turn to attack!";
            playerAttack();
        }
    }

    const resetHover = () => {
        const allAISquares = document.querySelectorAll('#AIBoard .square');

        allAISquares.forEach(el => {
            el.classList.remove('hovered');
        })
    }

    const playerHover = () => {
        listOfSquareClasses.forEach(el => {
            document.querySelector(`#AIBoard .${el}`).classList.add('hovered');
        })
    }

    const playerAttack = () => {
        const allAISquares = document.querySelectorAll('#AIBoard .square');

        allAISquares.forEach(el => {
            el.addEventListener('click', e => {
                if (e.target.childElementCount != 0 || e.target.tagName == 'IMG' || turn == 'AI') {
                    console.log('hey');
                } else {
                    const classes = e.target.classList;
                    if (classes.contains('carrier') || classes.contains('battleship') || classes.contains('destroyer') || classes.contains('submarine') || classes.contains('patrol-boat')) {
                        let ship = classes[3];
                        if (classes[3] == 'patrol-boat') {
                            ship = 'patrol boat';
                        }
                        const hitIndex = allAIShips[ship].shipPlacement.indexOf(allAIShips[classes[2]]);
                        allAIShips[ship].placesHit[hitIndex] = true;
                        let audio = document.querySelector("#attackAudio");
                        const img = document.createElement('img');
                        img.src = explodeImg;
                        el.appendChild(img);
                        el.classList.add('hit');
                        audio.currentTime= 0;
                        audio.play();

                        if (allAIShips[ship].placesHit.every(boo => boo == true)) {
                            let audio = document.querySelector("#attackAudio");
                            audio.currentTime = 0;
                            audio.play();

                            allAIShips[ship].shipPlacement.forEach(el => {
                                document.querySelector(`#AIBoard .${el}`).style.backgroundColor = 'red';
                            });

                            let sunkShips = 0;
                            for (const prop in allAIShips) {
                                if (allAIShips[prop].placesHit.every(boo => boo == true)) {
                                    sunkShips++;
                                }
                            }
                            if (sunkShips == 5) {
                                // win();
                            }
                        }
                    } else {
                        let audio = document.querySelector("#splashAudio");
                        const img = document.createElement('img');
                        img.src = waterImg;
                        el.appendChild(img);
                        el.classList.add('drop');
                        audio.currentTime= 0;
                        audio.play();
                    }
                    changeTurn();
                }
            }, false)
        })
    }

    const AIAttack = () => {
        function getRandomCoord() {
            let coord = listOfSquareClasses[Math.floor(Math.random() * (49 - 0 + 1)) + 0];
            AI();
            return coord;
        }

        function AI() {
            let coord = getRandomCoord();
            setTimeout(() => {
                if (document.querySelector(`#myBoard .${coord}`).classList.contains('hit') || document.querySelector(`#AIBoard .${coord}`).classList.contains('drop')) {
                    coord = getRandomCoord();
                } else {
                    const classes = document.querySelector(`#myBoard .${coord}`).classList;
                    if (classes.contains('selected')) {
                        let ship = classes[3];
    
                        if (classes[3] == 'patrol-boat') {
                            ship = 'patrol boat';
                        }
                        const hitIndex = allShips[ship].shipPlacement.indexOf(allShips[classes[2]]);
                        allShips[ship].placesHit[hitIndex] = true;
                        document.querySelector(`#myBoard .${coord}`).style.backgroundColor = 'pink';
                        let audio = document.querySelector("#attackAudio");
                        audio.currentTime= 0;
                        audio.play();
    
                        if (allShips[ship].placesHit.every(boo => boo == true)) {
                            let audio = document.querySelector("#attackAudio");
                            audio.currentTime= 0;
                            audio.play();
    
                            allShips[ship].shipPlacement.forEach(el => {
                                document.querySelector(`#myBoard .${el}`).style.backgroundColor = 'red';
                            });
    
                            let sunkShips = 0;
                            for (const prop in allShips) {
                                if (allShips[prop].placesHit.every(boo => boo == true)) {
                                    sunkShips++;
                                }
                            }
                            if (sunkShips == 5) {
                                // lose();
                            }
                        }
                    } else {
                        let audio = document.querySelector("#splashAudio");
                        const img = document.createElement('img');
                        img.src = waterImg;
                        el.appendChild(img);
                        audio.currentTime= 0;
                        audio.play();
                    }
                    changeTurn();
                }
            }, 2000);
        }

    }


    return { playerHover};
})();