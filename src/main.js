import loadImage from "./include/Load.js";
import {idle, allOfAnimations} from "./include/animation.js";
import Trait from "./include/Trait.js";
import Vec2 from "./include/Vec2.js";
import PosOfSprite from "./include/PosOfSprite.js";
import {allpipe,instances,nuts,allcol,whereIs,check} from "./include/GetPos.js";
import {KeyboardState,input,controller,space,keyon,movementRules} from "./include/keyboard.js";
import {map} from "./include/map.js";
import Nuts from "./include/Nuts.js";
import { } from "./include/sprite.js";
import SpriteSheet from "./include/SpriteSheet.js";
import {jumper} from "./include/jump.js"
var keyboardactive = new KeyboardState();
loadImage("./include/img/1.png").then(image => {    
  var canvas  = document.getElementById('canvas');
  var context = canvas.getContext("2d");
  var accu  = 0;
  var lastTime = 0;
  var deltatime = 1/60;  

  context.scale(2,2);
  nuts.pos.set(0,0);

  input.listenTo(window);
    function update(time = 0) {
      accu = (time- lastTime)/1000;
      while(accu>deltatime){
      context.fillStyle = '#000';
      context.fillRect(0, 0, canvas.width, canvas.height);
      nuts.update(deltatime);
      nuts.draw();
      accu -= time;
      whereIs()
      movementRules(check);
    }
    requestAnimationFrame(update);}
  update();
});
