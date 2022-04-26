import './style.css';
import githubLogo from './../img/github-logo.png';
import shipFactory from "./modules/shipFactory";
import {createBoard, listOfSquareClasses} from './modules/createBoard';
import {axisChange, axisVar} from './modules/axis';
import { setShips } from './modules/setShips';
import {instructionDisplay, currentShip }from './modules/instructionsDisplay';
import { restartGame } from './modules/restartGame';
import { placeAIShips } from './modules/placeAIships';
import { Attack } from './modules/attack';

(document.getElementById('github-logo')).src = githubLogo;

let carrier = shipFactory('carrier', 5);
let battleship = shipFactory('battleship', 4);
let destroyer = shipFactory('destroyer', 3);
let submarine = shipFactory('submarine', 3);
let patrol_boat = shipFactory('patrol boat', 2);

let AIcarrier = shipFactory('carrier', 5);
let AIbattleship = shipFactory('battleship', 4);
let AIdestroyer = shipFactory('destroyer', 3);
let AIsubmarine = shipFactory('submarine', 3);
let AIpatrol_boat = shipFactory('patrol boat', 2);

let allShips = {
    carrier: carrier,
    battleship: battleship,
    destroyer: destroyer,
    submarine: submarine,
    'patrol boat': patrol_boat
}

export let allAIShips = {
    AIcarrier: AIcarrier,
    AIbattleship: AIbattleship,
    AIdestroyer: AIdestroyer,
    AIsubmarine: AIsubmarine,
    'AI patrol boat': AIpatrol_boat
}

const Start = (function() {
    createBoard(document.querySelector('#setShipsGameboard'));
    createBoard(document.querySelector('#myBoard'));
    createBoard(document.querySelector('#AIBoard'));
    axisChange();
    instructionDisplay(currentShip);
    setShips.shipsHover(); 
    setShips.shipClick(); 
    setShips.shipResetListener();
    restartGame();
})();


export {allShips};