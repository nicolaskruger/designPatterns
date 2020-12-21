import { IRequest } from "./IRequest";
import {Request} from "./Request"

export class Proxy implements IRequest{
    private req:Request;
    constructor(request:Request){
        this.req = request;
    }
    request(): void {
        if(this.checkAccess()){
            this.req.request();
        }
        this.logAccess();
    }
    checkAccess(){
        console.log(`Accessing ...`);
        return true;
    }
    logAccess(){
        console.log(`Access allow`);
    }


}