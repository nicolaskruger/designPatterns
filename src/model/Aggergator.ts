import {Iterator} from '../Iterator/Iterator'
import { Player } from "./Player";

export interface Aggregator{
    getIterator():Iterator<Player>
}