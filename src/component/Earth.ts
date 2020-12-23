import { Invader } from "../visitor/Invader";
import { Planet } from "./Planet";

export class Earth implements Planet{
    accept(invader: Invader): void {
        invader.visitEarh(this);
    }
}