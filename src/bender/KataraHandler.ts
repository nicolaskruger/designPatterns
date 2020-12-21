import { AbstractHandler } from "../model/AbstractHandler";
import { BenderHandler } from "./BenderHandler";

export class KataraHandler extends BenderHandler{
    constructor(){
        super(['water','blood'],"Katara");
    }
}