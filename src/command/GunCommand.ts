import { Command } from "./Command";

export class GunCommand implements Command{
    execute(): string {
        return `shot`
    }

}