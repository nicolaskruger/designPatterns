import { Invader } from "../visitor/Invader";
import { Planet } from "./Planet";

export class Mars implements Planet{
    accept(invader: Invader): void {
        invader.visitMars(this);
    }
    
}