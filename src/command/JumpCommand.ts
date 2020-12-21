import { Command } from "./Command";

export class JumpCommand implements Command{
    execute(): string {
        return `jump`
    }

}