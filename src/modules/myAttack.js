import { allAIShips} from "..";
import explodeImg from '../../img/explode.png';
import waterImg from '../../img/water.png';
import { gameResult } from "./gameResult";
import { changeTurn, currentTurn } from "./turnDisplay";


export function myAttack() {
    const allAISquares = document.querySelectorAll('#AIBoard .square');
    allAISquares.forEach(el => {
        el.addEventListener('click', e => {
            let element = e.target;
            if (element.tagName == 'IMG' || element.classList.contains('hit') || currentTurn == 'AI') {
    
            } else if(element.classList.contains('selected')) {
                let explosionImg = document.createElement('img');
                explosionImg.src = explodeImg;
                let audio = document.querySelector("#attackAudio");
                audio.currentTime= 0;
                audio.play();

                element.appendChild(explosionImg);
                element.classList.add('hit');

                for (const prop in allAIShips) {
                    const ship = allAIShips[prop];
                    const shipPlacement = ship.shipPlacement;
                    let placesHit = ship.placesHit;
                    let letterNum = element.classList[1];

                    if (shipPlacement.includes(letterNum)) {
                        placesHit[shipPlacement.indexOf(letterNum)] = true;
                    }
                }

                let sunkShips = 0;
                for (const prop in allAIShips) {
                    const ship = allAIShips[prop];
                    const shipPlacement = ship.shipPlacement;
                    let placesHit = ship.placesHit;

                    if (placesHit.every(boo => boo == true)) {
                        shipPlacement.forEach(el => {
                            document.querySelector(`#AIBoard .${el}`).style.backgroundColor = 'red';
                        });
                        sunkShips++;
                    }
                }
                
                if (sunkShips == 5) {
                    gameResult('player');
                } else {
                    changeTurn();
                }
            } else {
                let oceanImg = document.createElement('img');
                oceanImg.src = waterImg;

                let audio = document.querySelector("#splashAudio");
                audio.currentTime= 0;
                audio.play();

                element.appendChild(oceanImg);
                element.classList.add('hit');
                changeTurn();
            }
            
        });
    });
}