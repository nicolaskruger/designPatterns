import { plusDamage } from "../BaseDecorator/plusDamage";

export class Bleed extends plusDamage{
    atack(){
        return " 10 Bleed "+super.atack();
    }
}