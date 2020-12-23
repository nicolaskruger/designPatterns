import { Strategy } from "./Strategy";

export class ConcreteStrategyA implements Strategy {
    doAlgorithm(list: string[]): string[] {
        return list.sort();
    }
    
}