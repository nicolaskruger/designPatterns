import { Strategy } from "./Strategy";

export class ConcreteStrategyB implements Strategy {
    doAlgorithm(list: string[]): string[] {
        return list.reverse();
    }
}