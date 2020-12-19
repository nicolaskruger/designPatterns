import { Adaptee } from "./adaptee";
import { Target } from "./target";

export class Adapter extends Target{
    private adptee:Adaptee;
    constructor(adaptee:Adaptee){
        super();
        this.adptee = adaptee;
    }
    request(){
        return this.adptee.speccifyRequest();
    }
}