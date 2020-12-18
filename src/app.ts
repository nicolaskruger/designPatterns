import { popularVFac } from "./Factory/popularVFac";
import { sportiveVFac } from "./Factory/sportiveVFac";
import { vehivleFac } from "./Factory/vehicleFac";
import { car } from "./model/car";
import { popularMoto } from "./model/popularMoto";
import { sportiveMoto } from "./model/sportiveMoto";

let myCar:car;
let Fac:vehivleFac = new popularVFac();
myCar = Fac.createCar();
console.log(myCar.constructor.name);
Fac = new sportiveVFac();
myCar = Fac.createCar();
console.log(myCar.constructor.name);