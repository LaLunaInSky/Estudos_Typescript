const soma_Aula14 = (...n:number[]):number=>{
    let res_Aula14:number = 0
    n.map((elementoDeN:number)=>{
        res_Aula14 += elementoDeN
    }) 
    return res_Aula14
}

console.log(soma_Aula14(5,10,30, 5,55))