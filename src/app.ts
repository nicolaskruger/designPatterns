import { Caretaker } from "./model/Caretaker";
import { Originator } from "./model/Originator";

let originator = new Originator("inicio");
let care = new Caretaker(originator);

care.backup();
[...Array(3).keys()]
    .forEach(()=>{
        care.backup();
        originator.doSomething();
    })
care.showHistory();
care.undo();
care.undo();
console.log();
