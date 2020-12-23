import { Earth } from "../component/Earth";
import { Mars } from "../component/Mars";
import { Invader } from "./Invader";

export class Zim implements Invader {
    visitEarh(earth: Earth): void {
        console.log("Zim conquer Earth");
    }
    visitMars(earth: Mars): void {
        console.log("Zim conquer Mars");
    }
}