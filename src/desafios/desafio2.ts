enum Profissao{
    Atriz,
    Padeiro
}

type Trabalhador = {
    nome: string,
    idade: number,
    profissao: Profissao
}

let pessoa1: Trabalhador = {
    nome: 'maria',
    idade: 29,
    profissao: Profissao.Atriz
};

let pessoa2: Trabalhador = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro
};

let pessoa3: Trabalhador = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}