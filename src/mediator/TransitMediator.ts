import { Semafore } from "../component/Semafore";
import { Mediator } from "./Mediator";

export class TransitMediator implements Mediator {
    private semafore:Semafore[]
    constructor(...semafore:Semafore[]){
        this.semafore = semafore;
        this.semafore.forEach(s=>s.setMEdiator(this));
    }
    notify(obj: object, event: number): void {
        this.semafore.filter(s=>s!=obj)
            .forEach(s=>s.close());
    }
}