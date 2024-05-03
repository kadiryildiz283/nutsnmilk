import Nuts from "./Nuts.js";
import PosOfSprite from "./PosOfSprite.js";
import { map } from "./map.js";

var allpipe = [
  ["Stairs", 9],
  ["Pipe", 7],
  ["Wall", 8],
  ["Sea", 12],
  ["Jumper", 11],
  ["Apple", 10],
  ["Home", 5]
];
var collission = false;
var nuts = new Nuts();
var instances = [];
var dinamikkutup = [];
var allcol = [];
var SetPos = (allpipe) => {
  return function (allcol) {
    allpipe.forEach((element) => {
      let className = element[0];
      dinamikkutup[className] = class extends PosOfSprite {
        constructor() {
          super(className);
          this.allcol = allcol;
          this.Pos(map);
        }
        update(entity, deltaTime) {}
        Pos(map) {
          for (let index = 0; index < map.length; index++) {
            for (let y = 0; y < map[index].length; y++) {
              if (map[index][y] == element[1]) {
                this.allcol.push([className, [index * 16, y * 16]]);
              }
            }
          }
          allcol = this.allcol;
        }
      };
      let instance = new dinamikkutup[className]();
      instances.push(instance);
    });
  };
};
var getPos = (nuts) => {
  var array = [nuts.x, nuts.y];
  return array;
};
SetPos(allpipe)(allcol);

var checkCollision = (rect1, rect2) => {
  if(rect1.x + rect1.width > rect2.x  &&
     !(rect1.x >= rect2.x + rect2.width) &&
     rect1.y < rect2.y+ rect2.heigth &&
     !(rect1.y + rect1.heigth<= rect2.y) 
  )
  {
    return true;
  }
  return false;
  };
var whereIs = () => {
  let tile = {
    x: 0,
    y: 0,
    name: "",
    width: 16,
    heigth: 16
  };
  let col = false;
  allcol.forEach((element, y) => {
    tile.x = allcol[y][1][1];
    tile.y = allcol[y][1][0];
    tile.name = allcol[y][0];
    checkCollision(nuts, tile);
    if (checkCollision(nuts,tile)){
      col = true;
      return col;
    }  
  });
  if (col) {
    return col;
  }
};
export { allpipe, instances, nuts, allcol, whereIs,collission};

