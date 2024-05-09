import SpriteSheet from "./SpriteSheet.js"; 
import loadImage from "./Load.js";

// sprites değişkenini dışarıda tanımla
var sprites = new SpriteSheet(null,16,16);

loadImage("./include/img/1.png").then(image => {
  // sprites değişkeninin image özelliğini ayarla
  sprites.image = image;
  sprites.defineTile('idle-1', 0, 0);
  sprites.defineTile('idle-2', 1, 0);
  sprites.defineTile('idle-3', 2, 0);
  sprites.defineTile('idle-4',3,0)
  sprites.defineTile('idle-5', 4, 0);
  sprites.defineTile('idle-6', 5, 0);
  sprites.defineTile('idle-7', 6, 0);
  sprites.defineTile('idle-8',7,0)
  sprites.defineTile('idle-9', 0, 1);
  sprites.defineTile('idle-10', 1, 1);
  sprites.defineTile('idle-11', 2, 1);
  sprites.defineTile('idle-12',3,1)
  sprites.defineTile('idle-13', 4, 1);
  sprites.defineTile('idle-14', 5, 1);
  sprites.defineTile('idle-15', 6, 1);
  sprites.defineTile('idle-16',7,1)



  sprites.defineTile('sea', 3, 7);
  sprites.defineTile('wall', 2, 6);
  sprites.defineTile('stairs', 0, 7);
  sprites.defineTile('pipe', 5, 6);
  sprites.defineTile('jumping', 1, 7);
  sprites.defineTile('apple', 0,5);
  sprites.defineTile('home6', 8,7);
  sprites.defineTile('home5', 7,7);
  sprites.defineTile('home4', 6,7);
  sprites.defineTile('home2', 7,6);
  sprites.defineTile('home1', 6,6);
  sprites.defineTile('home3', 8,6);
  sprites.defineTile('idle', 0,0);
  sprites.defineTile('rrun-1', 0,1);
  sprites.defineTile('rrun-2', 1,1);
  sprites.defineTile('rrun-3', 2,1);
});
export {sprites}
