import { Zord } from "../model/Zord";
import { ZordBuilder } from "./ZordBuilder";

export class MegaZordBuilder extends ZordBuilder{
    getResult() {
        return this.zord;
    }
    protected zord:Zord = new Zord();
    
    reset(): void {
        this.zord = new Zord();
    }
    buildrigthArm(): void {
        this.zord.rigthArm = 'mammoth';
    }
    buildleftArm(): void {
        this.zord.leftArm = 'mammoth';
    }
    buildrigthLeg(): void {
        this.zord.rigthLeg = 'triceratops';
    }
    buildleftLeg(): void {
        this.zord.leftLeg = 'saber tooth tiger';
    }
    buildupperBody(): void {
        this.zord.upperBody = 't rex';
    }
    buildhead(): void {
        this.zord.head = 't rex';
    }
    

}