import { AngHandler } from "./bender/AngHandler";
import { KataraHandler } from "./bender/KataraHandler";
import { TophHandler } from "./bender/TophHandler";
import { ZukoHandler } from "./bender/ZukoHandler";

let elements = ['fire','air','earth','water','blood','eletric','metal'];

let bender = new AngHandler();
                bender
                    .setNext(new ZukoHandler())
                    .setNext(new KataraHandler())
                    .setNext(new TophHandler())
elements.forEach(element=>{
    console.log(element+":");
    console.log(bender.handle(element));
    console.log();
})
