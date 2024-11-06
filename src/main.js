import loadImage from "./include/Load.js";
import {nuts,whereIs,check} from "./include/GetPos.js";
import {input,movementRules} from "./include/keyboard.js";
import {} from "./include/sprite.js";
import {move,idlevsenemy,enemycatchtop,cangotop} from "./include/enemy.js";
loadImage("./include/img/1.png").then(image => {    
  var canvas  = document.getElementById('canvas');
  var context = canvas.getContext("2d");
  var accu  = 0;
  var lastTime = 0;
  var deltatime = 1/60;  
  context.scale(2,2);
  nuts.pos.set(0,0);
  nuts.enemypos.set(64,0);
  input.listenTo(window);
    function update(time = 0) {
      accu = (time- lastTime)/1000;
      while(accu>deltatime){
      context.fillStyle = '#000';
      context.fillRect(0, 0, canvas.width, canvas.height);
      nuts.update(deltatime);
      nuts.draw();
      move();
      accu -= time;
      whereIs(nuts);
      movementRules(check);
      idlevsenemy();
      enemycatchtop();
      console.log(cangotop)
    }
      requestAnimationFrame(update);}
  update();
});
