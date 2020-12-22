import { HankPlayer } from "../model/HankPlayer";
import { Player } from "../model/Player";
import {Iterator} from './Iterator';
import { PlaySort } from "./PlaySort";

export abstract class HankIterator implements Iterator<Player>, PlaySort{
    protected collections:HankPlayer;
    protected pos:number;
    constructor(hankPlayer:HankPlayer){
        this.collections = hankPlayer;
        this.pos = 0;
    }
    getSorted(): Player[] {
        throw new Error("Method not implemented.");
    }
    curretnt(): Player {
        return this.getSorted()[this.pos];
    }
    next(): Player {
        this.pos++;
        return this.getSorted()[this.pos-1];
    }
    key(): number {
        return this.pos
    }
    valid(): boolean {
        return this.pos>=0&&this.pos<this.collections.getPlayers().length;
    }
    
    
}