import loadImage from "./include/Load.js";
import Trait from "./include/Trait.js";
import Vec2 from "./include/Vec2.js";
import PosOfSprite from "./include/PosOfSprite.js";
import {allpipe,instances,nuts,allcol,whereIs} from "./include/GetPos.js";
import {KeyboardState,input,controller,space,keyon} from "./include/keyboard.js";
import {map} from "./include/map.js";
import Nuts from "./include/Nuts.js";
import { } from "./include/sprite.js";
import SpriteSheet from "./include/SpriteSheet.js";
//çarpma kodu gayet iyi çalışıyor ancka newrden çarptığını anlamak için devamına controller ekle ve nnerden çarptığını anla 
//sağında solunda cisim var mı onu kontrol et. 
var keyboardactive = new KeyboardState();
loadImage("./include/img/1.png").then(image => {    
  var canvas  = document.getElementById('canvas');
  var context = canvas.getContext("2d");
  var accu  = 0;
  var lastTime = 0;
  var deltatime = 1/60;  

  context.scale(2,2);

  nuts.pos.set(1,0);

  input.listenTo(window);
    function update(time = 0) {
      accu = (time- lastTime)/1000;
      while(accu>deltatime){
      context.fillStyle = '#000';
      context.fillRect(0, 0, canvas.width, canvas.height);
      nuts.update(deltatime);
      nuts.draw();
      accu -= time;
      whereIs();
      if(keyon.up == 1) {
        nuts.pos.y -= 1
      } 
      if(keyon.down == 1 ){
        nuts.pos.y += 1
      }  
      if(keyon.right == 1 ){
        if (whereIs()) {
          nuts.pos.x-=1
        }
        nuts.pos.x += 1
      } 
      if(keyon.left == 1 ){
        nuts.pos.x -= 1
      }
    }
    requestAnimationFrame(update);}
  update();
});
