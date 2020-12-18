import { car } from "../model/car";
import { moto } from "../model/moto";

export abstract class vehivleFac {
    abstract createMoto():moto;
    abstract createCar():car;
}