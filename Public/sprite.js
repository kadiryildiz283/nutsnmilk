import SpriteSheet from "./SpriteSheet.js"; 
import loadImage from "./Load.js";

// sprites değişkenini dışarıda tanımla
var sprites = new SpriteSheet(null,16,16);

loadImage("1.png").then(image => {
  // sprites değişkeninin image özelliğini ayarla
  sprites.image = image;
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