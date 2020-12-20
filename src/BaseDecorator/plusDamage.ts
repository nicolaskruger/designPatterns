import { Weapon } from "../Component/Weapon";

export abstract class plusDamage implements Weapon{
    protected weapon:Weapon;
    constructor(weapon:Weapon){
        this.weapon = weapon;
    }
    atack(): string {
        return this.weapon.atack();
    }

}