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
    // const allAISquares = document.querySelectorAll('#AIBoard .square');

    // const playerHover = () => {
    //     const resetHover = () => {
    //         listOfSquareClasses.forEach(el => {
    //             document.querySelector(`#AIBoard .${el}`).classList.remove('hovered');
    //         })
    //     }

    //     allAISquares.forEach(el => {
    //         el.addEventListener('mouseover', e => {
    //             resetHover();
    //             el.classList.add('hovered');
    //         })
    //         el.addEventListener('mouseout', e => {
    //             resetHover();
    //         })
    //     })
    // }

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


    return { };
})();