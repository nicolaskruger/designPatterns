import { car } from "../model/car";
import { moto } from "../model/moto";
import { popularCar } from "../model/popularCar";
import { popularMoto } from "../model/popularMoto";
import { vehivleFac } from "./vehicleFac";

export class popularVFac extends vehivleFac{
    createMoto(): moto {
        return new popularMoto();
    }
    createCar(): car {
        return new popularCar();
    }

}