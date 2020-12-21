import { IRequest } from "./IRequest";

export class Request implements IRequest{
    request(): void {
        console.log(`making request`);
    }

}