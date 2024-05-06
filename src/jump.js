import Trait from "./include/Trait.js";
import {nuts} from "./include/GetPos.js"
class Jump extends Trait {
    constructor(){
      super("jump");
  }
    update(entity,deltaTime){
    if(nuts.pos.y < -50)
    {
      return 1
    }
    else { nuts.pos.y--}
     }
    log(){
  }
}
var jumper = new Jump();
nuts.addTrait(jumper);
export {jumper}; 
