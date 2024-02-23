import loadImage from "./Load.js";
import Trait from "./Trait.js";
import Vec2 from "./Vec2.js";
import PosOfSprite from "./PosOfSprite.js";
import {allpipe,instances,nuts,allcol} from "./GetPos.js";
import {KeyboardState,input,controller,space,keyon} from "./keyboard.js";
import {map} from "./map.js";
import Nuts from "./Nuts.js";
import { } from "./sprite.js";
import SpriteSheet from "./SpriteSheet.js";
import {Collission,retur} from "./Colission.js";


loadImage("1.png").then(image => {        
  var canvas  = document.getElementById('canvas');
  var context = canvas.getContext("2d");
  var accu  = 0;
  var lastTime = 0;
  var deltatime = 1/60;  

  context.scale(2,2);

  nuts.pos.set(1,0);
  nuts.vel.set(70,-70); 

  input.listenTo(window);
    function update(time = 0) {
      accu = (time- lastTime)/1000;
      while(accu>deltatime){
      context.fillStyle = '#000';
      context.fillRect(0, 0, canvas.width, canvas.height);
      nuts.update(deltatime);
      nuts.draw();
      accu -= time;
    }
    requestAnimationFrame(update);
  }
  update();
});
