import { TraficLigth } from "./context/TraficLigth";
import { GreenState } from "./state/GreenState";

let  ligth = new GreenState();

let trafic = new TraficLigth(ligth);

[...Array(3).keys()]
    .forEach(()=>{
        trafic.request();
    })