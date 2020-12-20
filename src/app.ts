import { Sword } from "./ConcreteComponent/Sword";
import { Bleed } from "./ConcreteDecorator/Bleed";
import { Fire } from "./ConcreteDecorator/Fire";
import { Poison } from "./ConcreteDecorator/Poison";

let masterSword = new Sword();
masterSword = new Fire(
    new Poison(
        new Bleed(
            masterSword
        )
    )
);

console.log(masterSword.atack());