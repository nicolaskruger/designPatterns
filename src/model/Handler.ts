export interface Handler{
    setNext(handle:Handler):Handler;
    handle(element:string):string;
}