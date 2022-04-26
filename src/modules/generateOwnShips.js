import {allShips} from '..';
import carrierImg from './../../img/carrier.png';
import battleshipImg from './../../img/battleship.png';
import destroyerImg from './../../img/destroyer.png';
import submarineImg from './../../img/submarine.png';
import patrolboatImg from './../../img/patrol_boat.png';

export function placeImg(ship) {
    let img = '';
    ship == 'carrier' ? img = carrierImg:false;
    ship == 'battleship' ? img = battleshipImg:false;
    ship == 'destroyer' ? img = destroyerImg:false;
    ship == 'patrol boat' ? img = patrolboatImg:false;
    ship == 'submarine' ? img = submarineImg:false;

    let imgEl = document.createElement('img');
    imgEl.src = img;
    if (ship == 'patrol boat') {
        imgEl.classList.add('patrol');
    }
    
    let squareName = allShips[ship].shipPlacement[0];
    let mySquare = document.querySelector(`#myBoard .${squareName}`);
    const letters = 'ABCDEFGHIJ';
    let num = parseInt(squareName.slice(1, 3), 10);
    let letter = squareName[0];
    allShips[ship].axis == 'vertical' ? document.querySelector(`#myBoard .${letter}${num}`).classList.add("vertical"): false;
    
    for (let i = 0; i < allShips[ship].length; i++) {
        if(allShips[ship].axis == 'horizontal') {
            let selectedSquare = document.querySelector(`#myBoard .${letter}${num+i}`);
            selectedSquare.classList.add('selected');
            allShips[ship].name == 'carrier' ? selectedSquare.classList.add('carrier')
                                                        : (allShips[ship].name == 'battleship' ? selectedSquare.classList.add('battleship')
                                                        : (allShips[ship].name == 'destroyer' ? selectedSquare.classList.add('destroyer')
                                                        : (allShips[ship].name == 'submarine' ? selectedSquare.classList.add('submarine')
                                                        : (allShips[ship].name == 'patrol boat' ? selectedSquare.classList.add('patrol-boat')
                                                        : false))))
        } else {
            let selectedSquare = document.querySelector(`#myBoard .${letters[letters.indexOf(letter)+i]}${num}`);
            selectedSquare.classList.add('selected');
            allShips[ship].name == 'carrier' ? selectedSquare.classList.add('carrier')
                                                        : (allShips[ship].name == 'battleship' ? selectedSquare.classList.add('battleship')
                                                        : (allShips[ship].name == 'destroyer' ? selectedSquare.classList.add('destroyer')
                                                        : (allShips[ship].name == 'submarine' ? selectedSquare.classList.add('submarine')
                                                        : (allShips[ship].name == 'patrol boat' ? selectedSquare.classList.add('patrol-boat')
                                                        : false))))
        } 
    }
    mySquare.appendChild(imgEl);
}
