import Vec2 from "./Vec2.js";
import Trait from "./Trait.js";
import PosOfSprite from "./PosOfSprite.js";
import {map} from "./map.js";
import {sprites} from "./sprite.js"
import {allOfAnimations, idle} from "./animation.js"
var canvas  = document.getElementById('canvas');
var context = canvas.getContext("2d");
class Nuts {
    constructor() {
      this.pos = new Vec2 ();
      this.vel = new Vec2 ();       
      this.x = 0;
      this.y = 0;
      this.width = 16;
      this.heigth = 16;
      this.traits = [];
      this.posOfSprites = [];
}
    addTrait(trait){
      this.traits.push(trait);
      this[trait.NAME] = trait;
    }
    addSprite(posOfSprites){
      this.posOfSprites.push(posOfSprites);
      this[posOfSprites.NAME] = posOfSprites;
    }
    draw(){
      map.forEach((item, y) => {
        item.forEach((value, x) => {
          if (value==12) {
              sprites.draw("sea",context,x*16,y*16)
          }
          if (value==11) {
            sprites.draw("jumping",context,x*16,y*16)
          }
          if (value==10) {
            sprites.draw("apple",context,x*16,y*16);
          }
          if (value==9) {
            sprites.draw("stairs",context,x*16,y*16);
          }
          if (value==8) {
            sprites.draw("wall",context,x*16,y*16)
          }
          if (value==7) {
            sprites.draw("pipe",context,x*16,y*16)
          }
          if (value==6) {
            sprites.draw("home6",context,x*16,y*16)
          }
          if (value==1) {
            sprites.draw("home1",context,x*16,y*16)
          }
          if (value==5) {
            sprites.draw("home5",context,x*16,y*16)
          }
          if (value==4) {
            sprites.draw("home4",context,x*16,y*16)
          }
          if (value==3) {
            sprites.draw("home3",context,x*16,y*16)
          }
          if (value==2) {
            sprites.draw("home2",context,x*16,y*16)
          }
          if (value==13) {
            sprites.draw(allOfAnimations[idle.get()],context,x*16+this.pos.x,y*16+this.pos.y)
          this.x = this.pos.x+(x*16);
          this.y = this.pos.y+(y*16);
        }
        });
      });
    }
    update(deltaTime){
      this.posOfSprites.forEach(posOfSprites =>{
        posOfSprites.update(this,deltaTime);  
      });
      this.traits.forEach(trait =>{
        trait.update(this,deltaTime);  
      });
      
    }
}   

export default Nuts;
