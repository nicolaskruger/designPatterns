export class Singleton{
    private static instance:Singleton=null;
    static getInstance(){
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

}