import { Context } from "./Context/Context";
import { ConcreteStrategyA } from "./Strategy/ConcreteStrategyA";
import { ConcreteStrategyB } from "./Strategy/ConcreteStrategyB";

let context = new Context(new ConcreteStrategyA());
context.doSomething();
context.setStrategy(new ConcreteStrategyB());
context.doSomething();