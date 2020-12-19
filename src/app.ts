import { Composite } from "./composite/Composite";
import { Leaf } from "./composite/Leaf";

let tree = new Composite();
let brach01 = new Composite();
let brach02 = new Composite();
brach01.add(new Leaf());
brach01.add(new Leaf());
brach02.add(new Leaf());
tree.add(brach01);
tree.add(brach02);
tree.add(new Leaf());

console.log(tree.operation());