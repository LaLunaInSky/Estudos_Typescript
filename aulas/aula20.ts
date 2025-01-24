namespace Veiculos_Aula20 {
    enum Cores_Aula20{
        "Preto", "Branco", "Vermelho", "Amarelo", "Azul", "Prata"
    }

    abstract class Carro_Aula20{
        private nome:string
        private motor:Motores_Aula20.Motor_Aula20
        private cor:string

        constructor(nome:string, cor:Cores_Aula20, motor:Motores_Aula20.Motor_Aula20){
            this.nome = nome
            this.cor = Cores_Aula20[cor]
            console.log(`Este é o ${this.nome}, um carro ${this.cor}!\n`)
            this.motor = motor
        }

        public ligarMotor_Aula20(){
            this.motor.ligarOuDesligarMotor_Aula20 = true
            console.log(`O motor do carro ${this.nome} está ${this.motor.infoLigadoMotor_Aula20? "ligado":"desligado"}`)
        }

        public desligarMotor_Aula20(){
            this.motor.ligarOuDesligarMotor_Aula20 = false
            console.log(`O motor do carro ${this.nome} está ${this.motor.infoLigadoMotor_Aula20? "ligado":"desligado"}`)
        }
    }

    export class CarroEsportivo_Aula20 extends Carro_Aula20{
        constructor(nome:string, cor:Cores_Aula20){
            super(nome, cor, new Motores_Aula20.Motor_Aula20(6, 300, new Motores_Aula20.Turbo_Aula20(100)))
        }
    }

    export class CarroPopular_Aula20 extends Carro_Aula20{
        constructor(nome:string, cor:Cores_Aula20){
            super(nome, cor, new Motores_Aula20.Motor_Aula20(3, 100))
        }
    }
}
 
namespace Motores_Aula20 {
    export class Turbo_Aula20{
        private potencia:number

        constructor(potencia:number){
            this.potencia = potencia
        }

        get potencia_Aula20(){
            return this.potencia
        }
    }

    export class Motor_Aula20{
        private ligado:boolean
        private cilindros:number
        private potencia:number
    
        constructor(cilindros:number, potencia:number, turbo?:Turbo_Aula20){
            this.ligado = false
            this.cilindros = cilindros
            this.potencia = potencia + (turbo? turbo.potencia_Aula20 : 0)

            console.log(`Este carro tem a potência de ${this.potencia} cavalos, tem ${this.cilindros} cilindros, e está ${this.ligado? "ligado":"desligado"}`)
        }

        set ligarOuDesligarMotor_Aula20(ligado:boolean){
            this.ligado = ligado
        }

        get infoLigadoMotor_Aula20(){
            return this.ligado
        }
    }
}

const carro01_Aula20 = new Veiculos_Aula20.CarroEsportivo_Aula20("vrumvrum", 5)
const carro02_Aula20 = new Veiculos_Aula20.CarroPopular_Aula20("jaime", 3)

carro02_Aula20.ligarMotor_Aula20()
carro01_Aula20.ligarMotor_Aula20()