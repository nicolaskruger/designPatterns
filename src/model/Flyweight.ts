export class Flyweight{
    private sharedState: any;

    constructor(shareState:any){
        this.sharedState = shareState;
    }
    public operator(uniqState):void{
        const s =JSON.stringify(this.sharedState);
        const u = JSON.stringify(uniqState);
        console.log(`Flyweight: Display shared (${s}) and unique (${u}) state`);
    }
}