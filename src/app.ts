import { CarControll } from "./abstraction/CarControll";
import { Controll } from "./abstraction/Controll";
import { MotoControll } from "./abstraction/MotoContro";
import { Car } from "./implementation/car";
import { Moto } from "./implementation/moto";

let controll:Controll = new MotoControll(new Moto())
console.log(controll);
controll.turnOn();
console.log(controll);
controll = new CarControll(new Car());
console.log(controll);