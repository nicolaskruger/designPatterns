export class Vehicle{
    private enable_:boolean= false;
    get state(){
        return this.enable_;
    }
    enable(){
        this.enable_ = true;
    }
    disable(){
        this.enable_ = false;
    }
}