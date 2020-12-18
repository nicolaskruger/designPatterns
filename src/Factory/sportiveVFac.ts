import { car } from "../model/car";
import { moto } from "../model/moto";
import { sportiveCar } from "../model/sportiveCar";
import { sportiveMoto } from "../model/sportiveMoto";
import { vehivleFac } from "./vehicleFac";

export class sportiveVFac extends vehivleFac{
    createMoto(): moto {
        return new sportiveMoto();
    }
    createCar(): car {
        return new sportiveCar();
    }

}