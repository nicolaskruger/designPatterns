import { plusDamage } from "../BaseDecorator/plusDamage";

export class Fire extends plusDamage{
    atack(){
        return " 10 Fire "+this.weapon.atack();
    }
}