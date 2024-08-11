import {nuts} from "./GetPos.js"
import { enemy } from "./animation.js";
var variable  = 0;
nuts.enemypos.set(64,0);
var move  = () => {
  if (nuts.pos.x < nuts.enemypos.x) {
    nuts.enemypos.x-= 0.5;
    variable += 0.2;
    if (variable > 16) 
       {variable = 0}
    enemy.set(variable);
  }
  else{
    nuts.enemypos.x+=0.5;
  }
};
var idlevsenemy = () => {
  if ((nuts.pos.x + 8 == nuts.enemypos.x && nuts.pos.x - 8 == nuts.enemypos.x || nuts.pos.x  == nuts.enemypos.x)
  &&(nuts.pos.y  == nuts.enemypos.y || nuts.pos.y + 8 > nuts.enemypos.y && nuts.pos.y - 8 <  nuts.enemypos.y)) 
  {
    console.log("gameover")
  }
  else {
    console.log(nuts.pos.x, nuts.enemypos.x,
                "y",nuts.pos.y, nuts.enemypos.y)
  }
};
export {move,idlevsenemy};
