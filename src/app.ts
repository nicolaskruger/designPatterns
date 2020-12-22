import {Iterator} from './Iterator/Iterator';
import { HankPlayer } from "./model/HankPlayer";
import { Player } from "./model/Player";
function show<T>(params:Iterator<T>) {
    while(params.valid()){
        console.log(params.next());
    }
}
function showP(params:Iterator<Player>) {
    show<Player>(params);
}

let players = new HankPlayer(
    new Player("Seki",10),
    new Player("Sashi",10),
    new Player("Punpun",8),
    new Player("Aiko",8),
)

console.log(`name:`);
showP(players.getIname());
console.log(`\npoints:`);
showP(players.getIpoints());
