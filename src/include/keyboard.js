import {nuts} from "./GetPos.js";
import {jumper} from "./jump.js"
import {idle} from "./animation.js"
// enemy'i hallet canım kadirimmmmm...
var variab = 0;
var onGround = false;
var controller =1
const space = 32;
var keyon={ 
  right: 0,
  left:0,
  space:0
};
var jumpLimitY = 0;
class KeyboardState{
    constructor(){
      this.KeyStates = new Map();
      this.KeyMap = new Map();
    }
    addMapping(keyCode,callback){
      this.KeyMap.set(keyCode,callback);
    }
    handleEvent(event){
      const {keyCode} = event ;
      if (!this.KeyMap.has(keyCode)) {
        return false;
      }
    const KeyState = event.type ==='keydown' ? 1 : 0; 

    if (this.KeyStates.get(keyCode)===KeyState) {
      return;
    }
    this.KeyStates.set(keyCode, KeyState);
    this.KeyMap.get(keyCode)(KeyState);
    }
  listenTo(window){
    ['keydown','keyup'].forEach(eventName =>{
      window.addEventListener(eventName, event =>{
      this.handleEvent(event); 
      })
    })
  }
  }    
     if (keyon.up==1) {
      nuts.pos.y-=5
    } 
  const input = new KeyboardState;
  input.addMapping(space, KeyState => {
    if(KeyState){
    keyon.space = 1;
    jumper.log();
    jumpLimitY = jumper.logger; 
  }
    if(!KeyState){keyon.space = 0;}
}); 
   input.addMapping(38, KeyState => {
    if(KeyState){keyon.up = 1;}
    if(!KeyState){keyon.up = 0;}
}); 
   input.addMapping(40, KeyState => {
   if(KeyState){keyon.down = 1;}
    if(!KeyState){keyon.down = 0;}
});
  input.addMapping(37, KeyState => {
    if(KeyState){keyon.left = 1;}
    if(!KeyState){keyon.left = 0;}
  });
  input.addMapping(39, KeyState => {
    if(KeyState){keyon.right = 1;}
    if(!KeyState){keyon.right = 0;}
  });
var movementRules = (check) => {if(keyon.up == 1) {
       	if (check.top == 1) {
	 if(variab >= 8){
		variab = 5;
	 }
          variab+= 0.1;
          idle.set(variab)

          nuts.pos.y +=1
        }
        nuts.pos.y -= 1
      } 
      if(keyon.down == 1 ){
        nuts.enemyposy += 1;
         if(variab  >= 4){
     		 variab = 1;
          }
         	variab+= 0.1;
       	  idle.set(variab)
	if(check.bot ==1) { 
        nuts.pos.y -=1
        } 
        nuts.pos.y += 1
      }
      if(keyon.right == 1 ){
	   if(variab < 9 ){
	   	variab = 9
	   }
          if(variab  >= 12){
     		 variab = 9;
          }
         	variab+= 0.2;
       	  idle.set(variab)
  
        if (check.right==1) {
          nuts.pos.x-=1
        }
        nuts.pos.x += 1
        nuts.enemypos.x -=1
      } 
      if(keyon.left == 1 ){
	  if(variab < 13 ){
	   	variab = 13
	   }
          if(variab  >= 16){
     		 variab = 13;
          }
         	variab+=0.2;
       	  idle.set(variab)
	 if (check.left ==1) {
          nuts.pos.x +=1
        }
        nuts.pos.x -= 1
      }
}
export {KeyboardState,input,controller,space,keyon,movementRules,onGround,jumpLimitY}
