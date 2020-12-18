import { MegaZordBuilder } from "./build/MegaZordBuilder";
import { SaciZordBuilder } from "./build/SaciZordBuilder";
import { ZordBuilder } from "./build/ZordBuilder";
import { Zordom } from "./director/Zordom";
import { Zord } from "./model/Zord";

let builder:ZordBuilder = new MegaZordBuilder();
let zordom = new Zordom(builder);
zordom.makeZord();
(builder.getResult() as Zord).printAllParts();
console.log();

builder = new SaciZordBuilder();
zordom.changeBuilder(builder);
zordom.makeZord();
(builder.getResult() as Zord).printAllParts();
