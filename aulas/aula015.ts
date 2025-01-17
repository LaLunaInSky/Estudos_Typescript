class Computador_Aula15 {
    nome_Aula15:string
    ramQ_Aula15:number 
    cpu_Aula15:number
    ligado_Aula15:boolean
    
    constructor(nome:string, ramQuantidade:number, cpu:number, ligado:boolean){
        this.nome_Aula15 = nome
        this.ramQ_Aula15 = ramQuantidade
        this.cpu_Aula15 = cpu
        this.ligado_Aula15 = ligado
    }

    apresentarComputador_Aula15 = ():void=>{
        console.log(this.nome_Aula15)
        console.log(this.ramQ_Aula15)
        console.log(this.cpu_Aula15)
        console.log(this.ligado_Aula15)
    }
}

const computador1_Aula15 = new Computador_Aula15('novoPC', 4, 5, true)
const computador2_Aula15 = new Computador_Aula15('antigoPC', 2, 2, false)

computador1_Aula15.apresentarComputador_Aula15()
computador2_Aula15.apresentarComputador_Aula15()