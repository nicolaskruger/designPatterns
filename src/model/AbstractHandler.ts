import { Handler } from "./Handler";

export class AbstractHandler implements Handler{
    private nextHandler:Handler;
    setNext(handle:Handler): Handler {
        this.nextHandler = handle;
        return handle;
    }
    handle(element:string): string {
        if(this.nextHandler)
            return this.nextHandler.handle(element);
        return '';
    }

}