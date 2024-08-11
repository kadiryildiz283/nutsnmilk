var allOfAnimations = ["idle",'idle-1','idle-2','idle-3','idle-4','idle-5','idle-6','idle-7','idle-8','idle-9','idle-10','idle-11','idle-12','idle-13','idle-14','idle-15','idle-16'];
var allOfAnimations2 =["enemy-1","enemy-2","enemy-3","enemy-4","enemy-5","enemy-6","enemy-7","enemy-8","enemy-9","enemy-10","enemy-11","enemy-12","enemy-13","enemy-14","enemy-15","enemy-16"]

class Idle{
  constructor(){
    this.idle = 0;
  }
  get(){
  return Math.floor(this.idle);
  };
  set(value){
  this.idle = value;
  };
};
var idle = new Idle();
class EnemyAnim{
  constructor(){
    this.idle = 0;
  }
  get(){
  return Math.floor(this.idle);
  };
  set(value){
  this.idle = value;
  };
};
var idle = new Idle();
var enemy = new EnemyAnim();
export {allOfAnimations2,allOfAnimations,idle,enemy}
