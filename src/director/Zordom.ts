import { ZordBuilder } from "../build/ZordBuilder";

export class Zordom {
    builder:ZordBuilder;
    constructor(builder:ZordBuilder){
        this.changeBuilder(builder);
    }
    changeBuilder(builder:ZordBuilder){
        this.builder = builder;
    }
    makeZord(){
        const valid:(keyof ZordBuilder)[]= ['buildhead','buildleftArm','buildleftLeg','buildrigthArm','buildrigthLeg','buildupperBody'] 
        valid.forEach(k=>{
            this.builder[k]();
        })
    }
}