import { Semafore } from "./component/Semafore";
import { TransitMediator } from "./mediator/TransitMediator";

let semafores = [...Array(4).keys()].map(s=>new Semafore());
let tensit = new TransitMediator(
    ...semafores
);

semafores[2].open();