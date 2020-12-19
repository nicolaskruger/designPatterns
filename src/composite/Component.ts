export abstract class Component{
    protected parent:Component
    setParente(p:Component){
        this.parent = p;
    }
    getParente(){
        return this.parent;
    }
    add(comp:Component){

    }
    remove(comp:Component){

    }
    isComponet(){
        return false;
    }
    abstract operation():string;
}