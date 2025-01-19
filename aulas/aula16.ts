class Conta_Aula16 {
    private número_Aula16:number
    private titular_Aula16:string
    protected tipoDeConta_Aula16:string
    private saldoConta_Aula16:number
    
    constructor(titular:string){
        this.número_Aula16 = this.gerarNúmeroDaConta_Aula16()
        this.titular_Aula16 = titular
        this.tipoDeConta_Aula16 = 'Não Definido'
        this.saldoConta_Aula16 = 0
    }

    private gerarNúmeroDaConta_Aula16 = ():number=>{
        let númeroDaConta_Aula16:number
        númeroDaConta_Aula16 = Math.floor(Math.random()*10000) + 1
        return númeroDaConta_Aula16
    }

    protected infoConta_Aula16 = ():void=>{
        console.log(`Tipo de Conta: ${this.tipoDeConta_Aula16}\nConta de número: ${this.número_Aula16}\nTitular desta conta: ${this.titular_Aula16}`)
    }

    public visualizarSaldoDaConta_Aula16 = ():void=>{
        console.log(`O saldo da conta ${this.número_Aula16} é de R$${this.saldoConta_Aula16}\n`)
    }

    protected depositarSaldoNaConta_Aula16 = (quantidade:number):void=>{
        this.saldoConta_Aula16 += quantidade
        console.log(`Deposito de R$${quantidade} realizado na conta ${this.número_Aula16}`)
        this.visualizarSaldoDaConta_Aula16()
    }

    protected sacarSaldoNaConta_Aula16 = (quantidade:number):void=>{
        if (this.saldoConta_Aula16 >= quantidade) {
            this.saldoConta_Aula16 -= quantidade
            console.log(`Saque de R$${quantidade} realizado na conta ${this.número_Aula16}`)
        } else {
            console.log(`Saldo insuficiente, saque de R$${quantidade} NEGADO!`)
        }
        this.visualizarSaldoDaConta_Aula16()
    }
}

class ContaPF_Aula16 extends Conta_Aula16 {
    private cpf_Aula16:number

    constructor(cpf:number, titular:string){
        super(titular)

        this.tipoDeConta_Aula16 = "PF"
        this.cpf_Aula16 = cpf
        this.infoContaPF_Aula16()
    }

    private infoContaPF_Aula16 = ():void=>{
        this.infoConta_Aula16()
        console.log(`CPF do Titular: ${this.cpf_Aula16}\n`)
    }

    public depositarSaldoNaContaPF_Aula16 = (quantidade:number):void=>{
        const limite_Aula16 = 1000
        
        if (quantidade <= limite_Aula16 && quantidade >= 1) {
            this.depositarSaldoNaConta_Aula16(quantidade) 
        } else {
            console.log(`Deposito de R$${quantidade} é superior ao limite de R$${limite_Aula16} para conta PF, deposito NEGADO!`)
            this.visualizarSaldoDaConta_Aula16()
        }
    }
}

class ContaPJ_Aula16 extends Conta_Aula16 {
    private cnpj_Aula16:number

    constructor(cnpj:number ,titular:string){
        super(titular)

        this.tipoDeConta_Aula16 = "PJ"
        this.cnpj_Aula16 = cnpj
        this.infoContaPJ_Aula16()
    }

    private infoContaPJ_Aula16 = ():void=>{
        this.infoConta_Aula16()
        console.log(`CNPJ do Titular: ${this.cnpj_Aula16}\n`)

    }

    public depositarSaldoNaContaPJ_Aula16 = (quantidade:number):void=>{
        const limite_Aula16:number = 15000
        
        if (quantidade <= limite_Aula16 && quantidade >= 1) {
            this.depositarSaldoNaConta_Aula16(quantidade) 
        } else {
            console.log(`Deposito de R$${quantidade} é superior ao limite de R$${limite_Aula16} para conta PJ, deposito NEGADO!`)
            this.visualizarSaldoDaConta_Aula16()
        }
    }
}

const conta1_Aula16 = new ContaPF_Aula16(478152, 'Juliana')
const conta2_Aula16 = new ContaPJ_Aula16(65874112, 'Juju Doces')

conta1_Aula16.visualizarSaldoDaConta_Aula16()
conta2_Aula16.visualizarSaldoDaConta_Aula16()

conta1_Aula16.depositarSaldoNaContaPF_Aula16(500)
conta2_Aula16.depositarSaldoNaContaPJ_Aula16(5000)