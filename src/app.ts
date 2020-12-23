import { Earth } from "./component/Earth";
import { Mars } from "./component/Mars";
import { Planet } from "./component/Planet";
import { Invader } from "./visitor/Invader";
import { Tak } from "./visitor/Tak";
import { Zim } from "./visitor/Zim";

function visit(planet:Planet[],invader:Invader) {
    planet.forEach(p=>p.accept(invader));
}

let planet = [new Earth(),new Mars()]
let zim = new Zim();
let tak = new Tak();
let invaders = [zim,tak];
invaders.forEach(i=>visit(planet,i));