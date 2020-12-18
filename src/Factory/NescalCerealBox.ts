import { Cereal } from "../model/Cereal";
import { Nescal } from "../model/Nescal";
import { CerealBox } from "./CerealBox";

export class NescalCerealBox extends CerealBox{
    protected cereal(): Cereal {
        return new Nescal();
    }
}