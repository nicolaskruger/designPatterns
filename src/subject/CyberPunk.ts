import { Observer } from "../Observer/Observer";
import { Subject } from "./Subject";

export class CyberPunk implements Subject{
    private observers = new Set<Observer>();
    attech(observer: Observer): void {
        this.observers.add(observer);
    }
    detach(observer: Observer): void {
        this.observers.delete(observer);
    }
    notify(): void {
        this.observers.forEach(o=>o.update(this));
    }
    
}