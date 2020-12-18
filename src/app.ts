import { CerealBox } from "./Factory/CerealBox";
import { NescalCerealBox } from "./Factory/NescalCerealBox";
import { SucrilhosCerealBox } from "./Factory/SucrilhosCerealBox";
import { Sucrilhos } from "./model/Sucrilhos";

let cerealBox:CerealBox = new NescalCerealBox();

console.log(cerealBox.giveCereal());

cerealBox = new SucrilhosCerealBox();

console.log(cerealBox.giveCereal());