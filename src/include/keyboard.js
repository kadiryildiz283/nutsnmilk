import {nuts} from "./GetPos.js";
var controller =1;
const space = 32;
var keyon={ 
  right: 0,
  left:0,
  space:0
};

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
    if(KeyState){keyon.space = 1;}
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
export {KeyboardState,input,controller,space,keyon}
