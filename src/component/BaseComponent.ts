import { Mediator } from "../mediator/Mediator";

export class BaseComponent {
    protected mediator:Mediator;
    constructor(mediator:Mediator= null){
        this.mediator = mediator;
    }
    setMEdiator(mediator:Mediator){
        this.mediator = mediator;
    }
}