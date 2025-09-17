class Curso {
    private canal: string;
    private curso: string;

    constructor(
        canal: string,
        curso: string
    ) {
        this.canal = canal;
        this.curso = curso;
    }

    public get_canal(): string {
        return this.canal;
    }

    public get_curso(): string {
        return this.curso;
    }
}

const curso_01 = new Curso(
    "CBFCursos",
    "Typescript"
);

console.log(
    curso_01.get_canal()
);

console.log(
    curso_01.get_curso()
);