import { Button } from "./button/Button";
import { DashCommand } from "./command/DashCommand";
import { GunCommand } from "./command/GunCommand";
import { JumpCommand } from "./command/JumpCommand";
import { SwordCommand } from "./command/SwordCommand";

let controll:{[id:string]:Button}={
    "A":new Button(new JumpCommand()),
    "B":new Button(new DashCommand()),
    "Y":new Button(new SwordCommand()),
    "X":new Button(new GunCommand()),
}

"AXXXXYYYYYYBAAABBB".split('')
    .forEach(c=>{
        console.log(`${c}: ${controll[c].press()}`)
    })