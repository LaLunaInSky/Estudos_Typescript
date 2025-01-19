class Computador_Aula15 {
    private nome_Aula15:string
    private ramQ_Aula15:number 
    private cpu_Aula15:number
    private status_Aula15:boolean
    
    constructor(nome:string, ramQuantidade:number, cpu:number){
        this.nome_Aula15 = nome
        this.ramQ_Aula15 = ramQuantidade
        this.cpu_Aula15 = cpu
        this.status_Aula15 = false
    }

    info_Aula15 = ():void=>{
        console.log(`Nome..: ${this.nome_Aula15}`)
        console.log(`Ram...: ${this.ramQ_Aula15}`)
        console.log(`CPU...: ${this.cpu_Aula15}`)
        console.log(`Ligado? ${this.status_Aula15 ? "Sim": "Não"}\n`)
    }

    ligar_Aula15 = ()=>{
        this.status_Aula15 = true
    }

    desligar_Aula15 = ()=>{
        this.status_Aula15 = false
    }

    setNovoNome_Aula15 = (nome:string)=>{
        this.nome_Aula15 = nome
    }
}

const computador1_Aula15 = new Computador_Aula15('novo', 16, 5)
const computador2_Aula15 = new Computador_Aula15('antigo', 4, 2)

computador1_Aula15.ligar_Aula15()
computador2_Aula15.setNovoNome_Aula15("vaiprolixo")

computador1_Aula15.info_Aula15()
computador2_Aula15.info_Aula15()