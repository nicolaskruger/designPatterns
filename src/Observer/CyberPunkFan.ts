import { Subject } from "../subject/Subject";
import { Observer } from "./Observer";

export class CyberPunkFan implements Observer{
    update(subject: Subject): void {
        console.log("Um tapa na gostosa, Thank you");
    }
    
}