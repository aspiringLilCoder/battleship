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
            document.querySelector(`#myBoard .${letter}${num+i}`).classList.add('selected');
        } else {
            document.querySelector(`#myBoard .${letters[letters.indexOf(letter)+i]}${num}`).classList.add('selected');
        } 
    }
    mySquare.appendChild(imgEl);
}
