import { Earth } from "../component/Earth";
import { Mars } from "../component/Mars";
import { Invader } from "./Invader";

export class Tak implements Invader {
    visitEarh(earth: Earth): void {
        console.log("Tak conquer Earth");
    }
    visitMars(earth: Mars): void {
        console.log("Tak conquer Mars");
    }
}