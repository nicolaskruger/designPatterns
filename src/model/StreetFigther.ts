export abstract class StreetFigther {
    punch(){
        console.log("punch")
    }
    kick(){
        console.log("kick");
    }
    abstract specialMove():void;
    combo(){
        this.punch();
        this.kick();
        this.specialMove();
    }
}