const fTeste_Aula18 = <T,U>(valor:T|U):T|U=>{
    console.log(valor)
    return valor
}

console.log(typeof(fTeste_Aula18<string,number>("20")))

class CTeste_Aula18<T>{
    private valor_Aula18:T
    constructor(valor:T){
        this.valor_Aula18 = valor
        console.log(this.valor_Aula18)
        console.log(typeof(this.valor_Aula18))
    }
}

const cTeste_Aula18 = new CTeste_Aula18<string>("40")