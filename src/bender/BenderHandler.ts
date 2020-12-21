import { AbstractHandler } from "../model/AbstractHandler";

export class BenderHandler extends AbstractHandler{
    private elements:string[];
    private name:string;
    constructor(elements:string[],name:string){
        super()
        this.elements = elements;
        this.name = name;
    }
    handle(element:string){
        if(this.elements.indexOf(element)!=-1)
            return  this.name+" "+super.handle(element);
        return super.handle(element);
    }
}