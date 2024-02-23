import Nuts from "./Nuts.js"
import PosOfSprite from "./PosOfSprite.js";
import {map} from "./map.js";

var allpipe = [
    ["Stairs", 9],
    ["Pipe", 7],
    ["Wall", 8],
    ["Sea", 12],
    ["Jumper", 11],
    ["Apple", 10],
    ["Home", 5]
  ];
  
var nuts = new Nuts();
var instances = []; 
var dinamikkutup = [];
var allcol = [];

// değiştirdim belki hata çıkabilir.

var SetPos = (allpipe) => {
 return function(allcol){
  allpipe.forEach((element) => {
    // Get the class name
  let className = element[0];
    // Dynamically define the subclass
  dinamikkutup["element"] = class extends PosOfSprite{constructor(){
  super(className);
  this.allcol = allcol;
  this.Pos(map);  
}
  update(entity,deltaTime){
  }
  Pos(map){
    for (let index = 0; index < map.length ; index++) {
      for (let y = 0; y < map[index].length; y++) {
        if (map[index][y] == element[1] ) {
          this.allcol.push([className,[index*16,y*16]])
        }
      }
    }
    allcol = this.allcol;
  }
  };
    let instance = new dinamikkutup["element"](element[0]);   
    instances.push(instance);
  });
 }
}
SetPos(allpipe)(allcol);
 
export {allpipe,instances,nuts,allcol}