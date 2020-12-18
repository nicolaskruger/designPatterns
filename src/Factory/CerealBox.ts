import { Cereal } from "../model/Cereal";

export abstract class CerealBox {
    protected abstract cereal():Cereal;
    giveCereal(){
        const cereal = this.cereal();

        return `enjoy ${cereal.cereal()}`;
    }
}