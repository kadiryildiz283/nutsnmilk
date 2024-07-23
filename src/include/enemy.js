// enemy pos al ve if döngüsü ile position'ı ile aynı ise console.log bastır şimdilik.
import {nuts, whereIs} from "./GetPos.js"
nuts.enemypos.set(64,0);
var move  = () => {
  console.log(nuts.pos.x,nuts.enemypos.x)
    
  if (nuts.pos.x < nuts.enemypos.x) {
    nuts.enemypos.x-= 0.5;
  }
  else{
    nuts.enemypos.x+=0.5;
  }
};

export {move};
