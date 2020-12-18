import { Zord } from "../model/Zord";
import { ZordBuilder } from "./ZordBuilder";

export class SaciZordBuilder extends ZordBuilder{
    getResult() {
        return this.zord;
    }
    protected zord:Zord = new Zord();
    reset(): void {
        this.zord = new Zord();
    }
    buildrigthArm(): void {
        this.zord.rigthArm = 'rigthArm';
    }
    buildleftArm(): void {
        this.zord.leftArm = 'leftArm';
    }
    buildrigthLeg(): void {
        this.zord.rigthLeg = 'rigthLeg';
    }
    buildleftLeg(): void {
        this.zord.leftLeg = 'leftLeg';
    }
    buildupperBody(): void {
        this.zord.upperBody = 'upperBody';
    }
    buildhead(): void {
        this.zord.head = 'head';
    }
    
}