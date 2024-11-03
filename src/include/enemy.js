import {nuts,allcol} from "./GetPos.js"
import { enemy } from "./animation.js";
var variable  = 0;
var cangotop = false;
var goline = 0 ;
var realenemyposx = 0;
var realenemyposy = 0;
nuts.enemypos.set(64,0);
var move  = () => {
if (!(nuts.pos.y+8 < nuts.enemypos.y)) { 
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
 }
  else {
    if (goline > realenemyposx) {
      nuts.enemypos.x += 0.5;
    }
    else {
      nuts.enemypos.x -= 0.5;  
    }
    if(goline == realenemyposx)
  {
      nuts.enemypos.y -= 0.5;
    }
  }
};

var idlevsenemy = () => {
  if ((nuts.pos.x + 8 == nuts.enemypos.x && nuts.pos.x - 8 == nuts.enemypos.x || nuts.pos.x  == nuts.enemypos.x)
  &&(nuts.pos.y  == nuts.enemypos.y || nuts.pos.y + 8 > nuts.enemypos.y && nuts.pos.y - 8 <  nuts.enemypos.y)) 
  {
    //gameover
  }
  else {
//    console.log(nuts.pos.x, nuts.enemypos.x,
  //              "y",nuts.pos.y, nuts.enemypos.y)
  }
};

var enemycatchtop = () => {
 realenemyposy = nuts.enemypos.y + 144;
 realenemyposx = nuts.enemypos.x + 112;
//get pos from stairs and idle, if idle go top 
//then enemy go x pos to stairs x and go top 
allcol.forEach((value ) =>{
    value.forEach((element)  => {
       if (element == "Stairs" ) {
      if (value[1][0]+1 > realenemyposy && (value[1][1] - 16 <=  realenemyposx  && value[1][1] + 16 >= realenemyposx) ) {
            cangotop  = true;
            goline = value[1][1];
      }
        else{
        cangotop=false;
        if ( value[1][0]+1 > realenemyposy ) {
        // burda kaldım
          }
         
        }
      }       
  });
 });
};

export {move,idlevsenemy, enemycatchtop,cangotop};
