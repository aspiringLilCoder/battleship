import { allShips} from "..";
import explodeImg from '../../img/explode.png';
import waterImg from '../../img/water.png';
import { listOfSquareClasses } from "./createBoard";
import { gameResult } from "./gameResult";
import { changeTurn, currentTurn } from "./turnDisplay";


export function autoAttack() {
    function getRandomCoord() {
        return listOfSquareClasses[Math.floor(Math.random() * (99 - 0 + 1)) + 0];
    }

    function shoot() {
        let coord = getRandomCoord();
        console.log(coord);
        let element = document.querySelector(`#myBoard .${coord}`);
        let valid = true;

        if (element.classList.contains('hit') || currentTurn == 'player') {
            valid = false;
        } else if(element.classList.contains('selected')) {
            // element.style.backgroundColor = 'pink !important';
            let explosionImg = document.createElement('img');
            explosionImg.src = explodeImg;
            explosionImg.classList.add('exploded');
            element.appendChild(explosionImg);
            

            element.classList.add('hit');
            element.classList.add('selectedHit');

            let audio = document.querySelector("#attackAudio");
            audio.currentTime= 0;
            audio.play();

            for (const prop in allShips) {
                const ship = allShips[prop];
                const shipPlacement = ship.shipPlacement;
                let placesHit = ship.placesHit;
                let letterNum = element.classList[1];

                if (shipPlacement.includes(letterNum)) {
                    placesHit[shipPlacement.indexOf(letterNum)] = true;
                }
            }

            let sunkShips = 0;
            for (const prop in allShips) {
                const ship = allShips[prop];
                const shipPlacement = ship.shipPlacement;
                let placesHit = ship.placesHit;

                if (placesHit.every(boo => boo == true)) {
                    shipPlacement.forEach(el => {
                        document.querySelector(`#myBoard .${el}`).classList.add('sunk');
                    });
                    sunkShips++;
                }
            }

            if (sunkShips == 5) {
                gameResult('AI');
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

        if (valid == false) {
            shoot();
        }
    }

    setTimeout(() => {
        shoot();
    }, 2000);

}