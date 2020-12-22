import { HankIterator } from "./HankIterator";
import { NameIterator } from "./NameIterator";

export class PoitsIterrator extends HankIterator {
    getSorted(){
        return this.collections.getPlayers().sort((a,b)=>b.points-a.points);
    }
    
}