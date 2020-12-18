export class Zord {
    rigthArm: string='';
    leftArm:string='';
    rigthLeg:string='';
    leftLeg:string='';
    upperBody:string='';
    head:string='';
    printAllParts(){
        let valid = Object.keys(this);
        for(let key in this){
            if(valid.indexOf(key)!=-1){
                console.log(`${key}: ${this[key]}`)
            }
        }
    }
}