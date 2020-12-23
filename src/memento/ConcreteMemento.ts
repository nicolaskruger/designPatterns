import { Memento } from "./Memento";

export class ConcreteMemento implements Memento {
    private state:string;
    private date:string;
    constructor(state:string){
        this.state = state;
        this.date = new Date().toISOString().substr(0,10);
    }
    getString(): string {
        return this.state;
    }
    getName(): string {
        return `date: ${this.date} state: ${this.state.substr(0,9)}...`
    }
    getDate(): string {
        return this.date;
    }
    
}