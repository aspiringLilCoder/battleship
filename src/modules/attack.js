import {allShips} from "..";
import explodeImg from '../../img/explode.png';
import { listOfSquareClasses } from "./createBoard";

export const Attack = (function () {
    let turn = 'player';

    const changeDisplay = () => {
        const turnText_p = document.querySelector('#turnText');
        if (turn == 'player') {
            turn = 'AI';
            turnText_p.textContent = "Awaiting Opponent's Attack";
        } else {
            turn = 'player';
            turnText_p.textContent = "It's your turn to attack!";
        }
    }

    const playerHover = () => {
        const allAISquares = document.querySelectorAll('#AIBoard .square');

        allAISquares.forEach(el => {
            el.classList.add('hovered');
        })
    }

    // const playerAttack = () => {
    //     allAISquares.forEach(el => {
    //         el.addEventListener('click', e => {
                
    //             const img = document.createElement('img');
    //             img.src = explodeImg;
    //             el.appendChild(img);
    //         })
    //     })
    // }

    // const AIAttack = () => {

    // }


    return { playerHover };
})();