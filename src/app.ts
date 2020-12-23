import { CyberPunkFan } from "./Observer/CyberPunkFan";
import { CyberPunk } from "./subject/CyberPunk";

let cyberPunk = new CyberPunk();
[...Array(10).keys()]
    .forEach(()=>{
        cyberPunk.attech(new CyberPunkFan());
    })

    cyberPunk.notify();