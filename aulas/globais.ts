export abstract class Globais{
    private static teste:number=0

    public static set setTeste(num:number){
        this.teste += num
    }

    public static get getTeste(){
        return this.teste
    }
}