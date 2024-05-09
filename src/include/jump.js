import Trait from "./Trait.js";
import {nuts,check} from "./GetPos.js"
import {jumpLimitY,onGround} from "./keyboard.js"
class Jump extends Trait {
  constructor(){
      super("jump");
      this.logger = nuts.pos.y; 
  }
  update(entity,deltaTime){    
  if (nuts.pos.y > this.logger) {
      nuts.pos.y-= 1;
  }
  else {
      this.logger  = 1000
    }
  if(check.top ==1) { 
      nuts.pos.y+= 0.5;
      this.logger = nuts.pos.y;
      this.logger = this.logger+ 0.5;
    }
  
  if (check.bot == 0 ){
      nuts.pos.y +=0.5;
    }
  if(check.bot == 1) {
      nuts.pos.y-=1;
    }
  }

  log(){
    this.logger = nuts.pos.y - 30;
  }
}
var jumper = new Jump();
nuts.addTrait(jumper);
export {jumper}; 
