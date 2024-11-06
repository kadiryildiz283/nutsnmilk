import Nuts from "./Nuts.js";
import PosOfSprite from "./PosOfSprite.js";
import { map } from "./map.js";
var nuts = new Nuts();
nuts.pos.set(0,0);
var allpipe = [
  ["Stairs", 9],
  ["Pipe", 7],
  ["Wall", 8],
  ["Sea", 12],
  ["Jumper", 11],
  ["Apple", 10],
  ["Home", 5],
  ["enemy-1",14]
];

var collission = false;
var instances = [];
var dinamikkutup = [];
var allcol = [];
var check = {
    top:0,
    bot:0,
    right:0,
    left:0
}
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
SetPos(allpipe)(allcol);
var checkRight = (rect1, rect2) => {
  if(rect1.x+1 + rect1.width > rect2.x  &&
     !(rect1.x >= rect2.x) &&
      (rect1.y <= rect2.y +8) && (rect1.y >= rect2.y -8)
  )
  {
  return true;
  }
  return false;
  };
var checkLeft = (rect1, rect2) => {
  if(rect1.x -1 < rect2.x + rect2.width  &&
     !(rect1.x <= rect2.x) &&
      (rect1.y <= rect2.y+8) && (rect1.y  >= rect2.y -8)
  )
  {
    return true;
  }
  return false;
};
var checkBottom = (rect1, rect2) => {
  if(rect1.x + rect1.width -8 > rect2.x  &&
     !(rect1.x +8   >= rect2.x + rect2.width) &&
     rect1.y+1 + rect1.width > rect2.y&&
      !(rect1.y >= rect2.y)
  )
  {
  return true; 
  }
  return false;
  };
var checkTop = (rect1, rect2) => {
  if(rect1.x + rect1.width -8 > rect2.x  &&
     !(rect1.x +8 > rect2.x + rect2.width) &&
     rect1.y -1 < rect2.y +  rect2.heigth &&
     !(rect1.y<=  rect2.y) 
  )
  {
    return true;
  }
    return false;
  };
var whereIs = (char) => {
  let tile = {
    x: 0,
    y: 0,
    name: "",
    width: 16,
    heigth: 16
  };
  check.right = 0;
  check.bot = 0;
  check.left = 0;
  check.top = 0;
  allcol.forEach((element, y) => {
    tile.x = allcol[y][1][1];
    tile.y = allcol[y][1][0];
    tile.name = allcol[y][0];
    if(tile.name == "Stairs"){
    tile.x = allcol[y][1][1]-8;
    tile.y = allcol[y][1][0]-8;
    }
    if(tile.name == "enemy-1"){
    tile.x = allcol[y][1][1]+23538;
    tile.y = allcol[y][1][0]-122138;
    }
    if (checkRight(char,tile)) {
      check.right =1;
      if ( tile.name =="Stairs") {
      check.right = 0;
      check.bot = 3;
      }
    }
    if (checkLeft(char,tile)) {
      check.left = 1
    if (tile.name =="Stairs") {
      check.left = 0;
      check.bot = 3;
      }
    }
    if (checkBottom(char,tile)) {
      check.bot = 1
    if (tile.name =="Stairs") {
        check.bot = 3;
      }
    }
    if (checkTop(char,tile)) {
      check.top = 1
    if (tile.name =="Stairs") {
      check.top = 0;
      check.bot = 3;
      }
    }
  }
  );
  return check;
};
export { allpipe, instances, nuts, allcol, whereIs,collission,check};
