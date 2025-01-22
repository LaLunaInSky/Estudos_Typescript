namespace Veiculos {
    export abstract class Carro_Aula20{
        nome:string
        motor:Motores.Motor_Aula20
    
        constructor(nome:string, cilindros:number, potencia:number){
            this.nome = nome
            console.log(`Este é o ${this.nome}, um carro!`)
            this.motor = new Motores.Motor_Aula20(cilindros, potencia)
        }
    }
}
 
namespace Motores {
    class Turbo_Aula20{
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

        set ligar_Aula20(ligado:boolean){
            this.ligado = ligado
            console.log(`O motor está ${this.ligado? "ligado":"desligado"}`)
        }
    }
}


//const c1_Aula20 = new Veiculos.Carro_Aula20('Jaime', 4, 100)