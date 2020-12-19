import { Vehicle } from "../implementation/vehicle";

export class Controll{
    protected vehicle:Vehicle;
    constructor(vehicle:Vehicle){
        this.vehicle = vehicle;
    }
    turnOn(){
        if(!this.vehicle.state)
            this.vehicle.enable();
    }
    turnOf(){
        if(this.vehicle.state)
            this.vehicle.disable();
    }
}