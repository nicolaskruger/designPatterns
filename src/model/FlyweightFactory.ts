import { Flyweight } from "./Flyweight";

export class FlyweightFactory{
    private flyweights: {[key:string]:Flyweight} = <any>{};

    constructor(initialFlyweight:string[][]){
        for(const state of initialFlyweight){
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }
    private getKey(state:string[]):string{
        return state.join('_');
    }

    getFlyweight(sharedState:string[]):Flyweight{
        const key = this.getKey(sharedState);

        if(!(key in this.flyweights)){
            console.log('can\'t find');
            this.flyweights[key] = new Flyweight(sharedState);
        }

        return this.flyweights[key]
    }
    listFlyweights():void{
        const count = Object.keys(this.flyweights).length;

        for (const key in this.flyweights){
            console.log(key);
        }
    }
}