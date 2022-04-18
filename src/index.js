import shipFactory from "./modules/shipFactory";
import createBoard from './modules/createBoard';

let carrier = shipFactory('carrier', 5);
let battleship = shipFactory('battleship', 4);
let destroyer = shipFactory('destroyer', 3);
let submarine = shipFactory('submarine', 3);
let patrol_boat = shipFactory('patrol boat', 2);

const Start = (function() {
    createBoard(document.querySelector('#setShipsGameboard'));
    let axis_button = document.getElementById('axis');
    let axis = 'horizontal';

    axis_button.addEventListener('click', () => {
        console.log('clicked');
        if (axis_button.textContent == 'Horizontal') {
            axis_button.textContent = 'Vertical';
            axis = 'vertical';
        } else {
            axis_button.textContent = 'Horizontal';
            axis = 'horizontal';
        }
    });

    return {
        axis: axis
    }
})();
