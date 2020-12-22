import { Mediator } from "../mediator/Mediator";
import { BaseComponent } from "./BaseComponent";

export class Semafore extends BaseComponent{
    private static cont=0;
    protected type:number;
    constructor(mediator:Mediator=null){
        super(mediator)
        this.type = Semafore.cont;
        Semafore.cont++;
    }
    open(){
        console.log(`open semafore ${this.type}`);
        this.mediator.notify(this,this.type);
    }
    close(){
        console.log(`close semafore ${this.type}`)
    }
}