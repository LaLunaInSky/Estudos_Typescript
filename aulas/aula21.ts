const obj_Aula21={
    cor1:"Verde",
    cor2:"Amarelo",
    cor3:"Azul", 
    cor4:"Branco"
}
let {cor1, cor2, cor3, cor4} = obj_Aula21
console.log(cor1+"\n"+cor2+"\n"+cor3+"\n"+cor4+"\n")


let [n1_Aula21=0, n2_Aula21=0, ...n3_Aula21] = [10,20,30,40,50,60,70,80,90]
console.log(n1_Aula21+"\n"+n2_Aula21+"\n"+n3_Aula21+"\n")


const cores_Aula21 = ()=>{
    return ['Verde', 'Amarelo', 'Azul', 'Branco']
}
let [c1_Aula21,c2_Aula21,c3_Aula21,c4_Aula21] = cores_Aula21()
console.log(c1_Aula21+"\n"+c2_Aula21+"\n"+c3_Aula21+"\n"+c4_Aula21+"\n")

let texto_Aula21 = "Curso de Typescript"
let [...t_Aula21] = texto_Aula21.split(" ")
let [palavra1_Aula21,palavra2_Aula21,palavra3_Aula21] = texto_Aula21.split(" ")

console.log(t_Aula21)
console.log(palavra1_Aula21+"\n"+palavra2_Aula21+"\n"+palavra3_Aula21+"\n")