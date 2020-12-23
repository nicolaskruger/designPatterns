import { Memento } from "../memento/Memento";
import { Originator } from "./Originator";

export class Caretaker {
    private mementos: Memento[]=[];
    private originator: Originator;
    constructor(originator:Originator){
        this.originator = originator;
    }
    backup():void{
        this.mementos.push(this.originator.save());
    }
    undo():void{
        if(this.mementos.length==0)
            return;
        this.originator.resore(this.mementos.pop());
    }
    showHistory(){
        this.mementos.forEach(m=>{
            console.log(m.getName());
        })
    }
}
