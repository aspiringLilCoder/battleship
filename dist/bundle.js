(()=>{"use strict";function t(t,e){let n=[];for(let t=0;t<e;t++)n.push(!1);return{name:t,length:e,placesHit:n,hit:(t,e)=>{let n=e.placesHit;null==n[t]?console.log("Hit is undefined"):n[t]=!0},isSunk:t=>t.every((t=>1==t))}}t("carrier",5),t("battleship",4),t("destroyer",3),t("submarine",3),t("patrol boat",2),function(){!function(t){let e="ABCDEFGHIJ";for(let n=0;n<e.length;n++)for(let l=0;l<10;l++){let o=document.createElement("div");o.classList.add("square"),o.classList.add(`${e[n]}${l+1}`),t.appendChild(o)}}(document.querySelector("#setShipsGameboard"));let t=document.getElementById("axis"),e="horizontal";t.addEventListener("click",(()=>{console.log("clicked"),"Horizontal"==t.textContent?(t.textContent="Vertical",e="vertical"):(t.textContent="Horizontal",e="horizontal")}))}()})();