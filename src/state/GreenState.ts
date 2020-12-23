import { State } from "./State";
import { YellowState } from "./YellowState";

export class GreenState extends State {
    handle(): void {
        console.log(`green to yellow`);
        this.context.transitTo(new YellowState());
    }
    
}