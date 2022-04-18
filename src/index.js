import './style.css';
import githubLogo from './../img/github-logo.png';
import shipFactory from "./modules/shipFactory";
import createBoard from './modules/createBoard';
import axisChange from './modules/axis';
import setShips from './modules/setShips';
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
    patrol_boat: patrol_boat
}

let axisVar = 'horizontal';


const Start = (function() {
    
    createBoard(document.querySelector('#setShipsGameboard'));
    axisChange(axisVar);
    instructionDisplay();
    setShips(); 
})();


export {axisVar, allShips};