import { plusDamage } from "../BaseDecorator/plusDamage";

export class Poison extends plusDamage{
    atack(){
        return " 10 Poison " + super.atack();
    }
}