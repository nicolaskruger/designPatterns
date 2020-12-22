import { HankPlayer } from "../model/HankPlayer";
import { HankIterator } from "./HankIterator";

export class NameIterator extends HankIterator {
    getSorted(){
        return this.collections.getPlayers().sort((a,b)=>a.name<b.name?-1:1);
    }
    
}