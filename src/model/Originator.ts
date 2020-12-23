import { ConcreteMemento } from "../memento/ConcreteMemento";
import { Memento } from "../memento/Memento";

export class Originator {
    private state:string;
    constructor(state:string) {
        this.state = state;
    }
    private genRanStr(length=10){
        const word = 'abcdefghijklmnopqrstuvxyzQWERTYUIOPASDFGHJKLÇZXCVBNM'
        return [...Array(length).keys()]
                    .map(()=>word.charAt(Math.floor(Math.random()*word.length)))
                    .join('');
    }
    doSomething():void{
        console.log("changing value");
        this.state = this.genRanStr();
    }
    save(){
        return new ConcreteMemento(this.state);
    }
    resore(memento:Memento){
        this.state = memento.getString();
    }
}