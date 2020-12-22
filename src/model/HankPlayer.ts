import { Iterator } from "../Iterator/Iterator";
import { NameIterator } from "../Iterator/NameIterator";
import { PoitsIterrator } from "../Iterator/PointsIterator";
import { Aggregator } from "./Aggergator";
import { Player } from "./Player";

export class HankPlayer implements Aggregator{
    private players :Player[];
    getPlayers(){return this.players;}
    getCount(){return this.players.length;}
    addPlayer(player:Player){this.players.push(player);}
    getIterator(): Iterator<Player> {
        throw new Error("Method not implemented.");
    }
    getIname(): Iterator<Player>{
        return new NameIterator(this);
    }
    getIpoints(): Iterator<Player>{
        return new PoitsIterrator(this);
    }
    constructor(...players:Player[]){
        this.players = players;
    }

}