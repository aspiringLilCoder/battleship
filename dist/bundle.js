(()=>{"use strict";function e(e,t,l){let i=[];for(let e=0;e<t;e++)i.push(!1);return{name:e,length:t,placesHit:i,hit:e=>{let t=l.placesHit;null==t[e]?console.log("Hit is undefined"):t[e]=!0},isSunk:e=>e.every((e=>1==e))}}let t=e("carrier",5,t),l=e("battleship",4,l),i=e("destroyer",3,i),r=e("submarine",3,r),n=e("patrol boat",2,n)})();