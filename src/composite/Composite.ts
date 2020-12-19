import {Component} from './Component'
export class Composite extends Component{
    protected childrean:Component[]=[];
    operation(): string {
        return `Component[${this.childrean.map(ch=>ch.operation()).join('+')}]`;
    }
    add(comp:Component){
        this.childrean.push(comp);
    }
    remove(comp:Component){
        const pos = this.childrean.indexOf(comp);
        this.childrean = this.childrean.splice(pos,1);
    }
    isComponet(){
        return true;
    }
}