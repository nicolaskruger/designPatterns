import { Observer } from "../Observer/Observer";

export interface Subject{
    attech(observer:Observer):void;
    detach(observer:Observer):void;
    notify():void;
}