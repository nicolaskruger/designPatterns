import { Goku } from "../subSystem/Goku"
import { Vegeta } from "../subSystem/Vegeta";

export class Fusion{
    goku:Goku;
    vegeta:Vegeta;
    constructor(goku:Goku=null,vegeta:Vegeta=null){
        this.goku = goku || new Goku();
        this.vegeta = vegeta || new Vegeta();
    }
    fusion():string{
        return this.vegeta.fusion()+this.goku.fusion();
    }
}