import './style.css';
import githubLogo from './../img/github-logo.png';
import shipFactory from "./modules/shipFactory";
import createBoard from './modules/createBoard';
import axisChange from './modules/axis';

(document.getElementById('github-logo')).src = githubLogo;

let carrier = shipFactory('carrier', 5);
let battleship = shipFactory('battleship', 4);
let destroyer = shipFactory('destroyer', 3);
let submarine = shipFactory('submarine', 3);
let patrol_boat = shipFactory('patrol boat', 2);

const Start = (function() {
    createBoard(document.querySelector('#setShipsGameboard'));
    let axisVar = 'horizontal';
    axisChange(axisVar);

    return {
        axisVar: axisVar
    }
})();

