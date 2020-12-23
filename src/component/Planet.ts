import {Invader} from '../visitor/Invader';
export interface Planet{
    accept(invader:Invader):void;
}