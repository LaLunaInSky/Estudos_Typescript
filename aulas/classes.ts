const coisa_Classes = ["corda", "pilha", "lâmpada", "chave"]

class Pessoa_Classes{
    private nome:string
    private altura:number

    constructor(nome:string, altura:number){
        this.nome = nome
        this.altura = altura
        this.info_Pessoa()
    }

    private info_Pessoa = ()=>{
        console.log(`Oie eu sou ${this.nome} e tenho ${this.altura}m de altura.\n`)
    }
}

class Objeto_Classes{
    private nome:string

    constructor(nome:string){
        this.nome = nome
        this.info_Objeto()
    }

    private info_Objeto = ()=>{
        console.log(`Eu sou um objeto ${this.nome}.\n`)
    }
}

export default Pessoa_Classes
export {coisa_Classes, Objeto_Classes}