export interface Iterator<T>{
    curretnt():T;
    next():T;
    key():number;
    valid():boolean;
}