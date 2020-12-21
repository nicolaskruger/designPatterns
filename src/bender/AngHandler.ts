import { AbstractHandler } from "../model/AbstractHandler";
import { BenderHandler } from "./BenderHandler";

export class AngHandler extends BenderHandler{
    constructor(){
        super(['water','fire','earth','air'],"Ang");
    }
    
}