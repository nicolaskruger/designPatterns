import { GreenState } from "./GreenState";
import { State } from "./State";

export class RedState extends State {
    handle(): void {
        console.log(`red to green`);
        this.context.transitTo(new GreenState());
    }
    
}