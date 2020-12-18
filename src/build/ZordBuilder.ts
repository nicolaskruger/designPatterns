import { Zord } from "../model/Zord";

export abstract class ZordBuilder {
    abstract reset():void;
    abstract buildrigthArm():void;
    abstract buildleftArm():void;
    abstract buildrigthLeg():void;
    abstract buildleftLeg():void;
    abstract buildupperBody():void;
    abstract buildhead():void;
    abstract getResult():any
}