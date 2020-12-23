import { Earth } from "../component/Earth";
import { Mars } from "../component/Mars";

export interface Invader {
    visitEarh(earth:Earth):void;
    visitMars(earth:Mars):void;
}