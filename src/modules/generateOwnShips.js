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
    function makeImg() {
        let imgEl = document.createElement('img');
        imgEl.src = img;
        if (ship == 'patrol boat') {
            imgEl.classList.add('patrol');
        }
        allShips[ship].axis == 'vertical' ? imgEl.classList.add("vertical"): false;
        return imgEl;
    }
    
    let squareName = allShips[ship].shipPlacement[0];
    let setSquare = document.querySelector(`#setShipsGameboard .${squareName}`);
    let mySquare = document.querySelector(`#myBoard .${squareName}`);

    let num = parseInt(squareName.slice(1, 3), 10);
    
    for (let i = 0; i < allShips[ship].length; i++) {
        document.querySelector(`#myBoard .${squareName[0]}${num+i}`).classList.add('selected');
    }

    setSquare.appendChild(makeImg());
    mySquare.appendChild(makeImg());
}
