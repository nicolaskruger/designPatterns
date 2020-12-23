import { RedState } from "./RedState";
import { State } from "./State";

export class YellowState extends State {
    handle(): void {
        console.log(`yellow to red`)
        this.context.transitTo(new RedState());
    }
    
}