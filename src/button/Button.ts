import { Command } from "../command/Command";

export class Button{
    command:Command;
    constructor(command:Command){
        this.command = command;
    }
    press(){
        return this.command.execute();
    }
}