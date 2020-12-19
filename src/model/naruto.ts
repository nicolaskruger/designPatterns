import { Shinob } from "./Shinob";

export class Naruto implements Shinob{
    private name = 'Naruto Uzumaki';
    private patent = 'Genin'
    clone(): Shinob {
        let clone = Object.create(this);
        const obj = Object.keys(this);

        for(let val in this){
            if(obj.indexOf(val)!=-1){
                clone[val] = this[val];
            }
        }

        return clone;
    }

}