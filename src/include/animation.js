var allOfAnimations = ["idle",'idle-1','idle-2','idle-3','idle-4','idle-5','idle-6','idle-7','idle-8','idle-9','idle-10','idle-11','idle-12','idle-13','idle-4','idle-15','idle-16'];



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
export { allOfAnimations,idle }
