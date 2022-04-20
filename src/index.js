import './style.css';
import githubLogo from './../img/github-logo.png';
import shipFactory from "./modules/shipFactory";
import {createBoard, listOfSquareClasses} from './modules/createBoard';
import {axisChange, axisVar} from './modules/axis';
import { setShips } from './modules/setShips';
import {instructionDisplay, currentShip }from './modules/instructionsDisplay';

(document.getElementById('github-logo')).src = githubLogo;

let carrier = shipFactory('carrier', 5);
let battleship = shipFactory('battleship', 4);
let destroyer = shipFactory('destroyer', 3);
let submarine = shipFactory('submarine', 3);
let patrol_boat = shipFactory('patrol boat', 2);

let allShips = {
    carrier: carrier,
    battleship: battleship,
    destroyer: destroyer,
    submarine: submarine,
    'patrol boat': patrol_boat
}

const Start = (function() {
    createBoard(document.querySelector('#setShipsGameboard'));
    createBoard(document.querySelector('#myBoard'));
    createBoard(document.querySelector('#AIBoard'));
    axisChange();
    instructionDisplay(currentShip);
    setShips.shipsHover(); 
    setShips.shipClick(); 
    setShips.shipReset();
})();


export {allShips};