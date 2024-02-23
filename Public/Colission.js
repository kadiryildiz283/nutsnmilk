import { allcol, allpipe } from "./GetPos.js";
class Collission{
    constructor(){
        this.allcol = allcol;
        this.allpipe = allpipe;
        this.dizi = [];
    }
    returnPos(name){
        console.log(this.allcol,allcol.length-1);
        for (let index = 0; index < allcol.length; index++) {
            if (name == allcol[index][0]) {
            this.dizi.push([allcol[index][1][0],allcol[index][1][1]])
            }
            if(index == allcol.length-1){
                if (this.dizi.length == 0) {
                    return "böyle bir dizi yok"
                }
            }
        }
        return this.dizi;
    }
    CollissionAlarm(idle){
        for (let i = 0; i < this.dizi.length; i++) {
            if (idle.x+32 >= this.dizi[i][0]-32 && idle.y-32 <= this.dizi[i][1]+32&&
                idle.x-32 <= this.dizi[i][0]+32 && idle.y+32  >= this.dizi[i][1]+32
                ) {
                console.log("çarptı");
            }
        }
    }
}

var retur =  new Collission();
export {Collission,retur};