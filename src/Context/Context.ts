import { Strategy } from "../Strategy/Strategy";

export class Context {
    private strategy:Strategy;
    constructor(strategy:Strategy) {
        this.setStrategy(strategy);
    }   
    setStrategy(strategy:Strategy){
        this.strategy = strategy;
    }
    doSomething(){
        console.log(this.strategy.doAlgorithm([...'qwertyuiop'.split('')]).join(''));
    }
}