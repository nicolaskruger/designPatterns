import { TraficLigth } from "../context/TraficLigth";

export abstract class State{
    protected context:TraficLigth;
    setContext(context:TraficLigth){
        this.context=context;
    }
    abstract handle():void;
}