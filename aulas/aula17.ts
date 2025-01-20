interface curso_Aula17{
    titulo_Aula17:string
    descrição_Aula17:string
    inicarCurso_Aula17?(teste:string):void
}

interface cursoDeProgramação_Aula17 extends  curso_Aula17{
    quantidadeDeAulas_Aula17:number
    quantidadeMáximaDeAlunos_Aula17?:number
}

const curso1_Aula17:cursoDeProgramação_Aula17 = {
    titulo_Aula17:'Typescript',
    descrição_Aula17: "Curso de Typescript",
    quantidadeDeAulas_Aula17: 100,
    quantidadeMáximaDeAlunos_Aula17: 50 
}

const curso2_Aula17:cursoDeProgramação_Aula17 = {
    titulo_Aula17:'Javascript',
    descrição_Aula17: "Curso de Javascript",
    quantidadeDeAulas_Aula17: 200,
    quantidadeMáximaDeAlunos_Aula17: 80 
}

const curso3_Aula17:cursoDeProgramação_Aula17 = {
    titulo_Aula17:'C++',
    descrição_Aula17: "Curso de C++",
    quantidadeDeAulas_Aula17: 200
}

console.log(curso1_Aula17)
console.log(curso2_Aula17)
console.log(curso3_Aula17)