import { State } from "../state/State";

export class TraficLigth {
    private state:State;
    constructor(state:State){
        this.transitTo(state);
    }
    transitTo(state:State){
        this.state = state;
        this.state.setContext(this);
    }
    request(){
        this.state.handle();
    }
}