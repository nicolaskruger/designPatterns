import { Weapon } from "../Component/Weapon";

export class Sword implements Weapon{
    atack(): string {
        return "10 slash";
    }

}