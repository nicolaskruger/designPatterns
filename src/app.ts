import { Adaptee } from "./model/adaptee";
import { Adapter } from "./model/adapter";

let adapter = new Adapter(new Adaptee());

console.log(adapter.request());