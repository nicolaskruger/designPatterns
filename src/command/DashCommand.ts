import { Command } from "./Command";

export class DashCommand implements Command{
    execute(): string {
        return `dash`;
    }
    
}