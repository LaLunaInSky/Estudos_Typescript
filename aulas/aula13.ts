const soma_Aula13 = (n:number[]):number=>{
    let resultado_Aula13:number = 0
    n.map((elemento_Aula13)=>{
        resultado_Aula13 += elemento_Aula13
    })
    return resultado_Aula13
}

console.log(soma_Aula13([5, 4, 1, 2, 78]))
console.log("funfou")