import { Command } from "./Command";

export class SwordCommand implements Command{
    execute(): string {
        return `sword atack`
    }

}