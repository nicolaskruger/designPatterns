import { Cereal } from "../model/Cereal";
import { Sucrilhos } from "../model/Sucrilhos";
import { CerealBox } from "./CerealBox";

export class SucrilhosCerealBox extends CerealBox {
    protected cereal(): Cereal {
        return new Sucrilhos();
    }
    
}