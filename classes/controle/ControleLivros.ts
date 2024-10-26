import { Livro } from "../modelo/Livro";

const livros: Array<Livro> = [
    {
        codigo: 1,
        codEditora: 1,
        titulo: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        resumo: 'Este livro ensina os princípios de design limpo e como escrever código de qualidade que seja fácil de manter e entender.',
        autores: ['Robert C. Martin']
    },
    {
        codigo: 2,
        codEditora: 2, 
        titulo: 'The Pragmatic Programmer: Your Journey to Mastery',
        resumo: 'Um guia prático para desenvolvedores que querem melhorar suas habilidades e se tornar programadores pragmáticos e produtivos.',
        autores: ['Andrew Hunt', 'David Thomas']
    },
    {
        codigo: 3,
        codEditora: 3,
        titulo: 'Design Patterns: Elements of Reusable Object-Oriented Software',
        resumo: 'Este livro apresenta os padrões de design mais importantes na programação orientada a objetos, ajudando os desenvolvedores a resolver problemas recorrentes de software.',
        autores: ['Erich Gamma', 'Richard Helm', 'Ralph Johnson', 'John Vlissides']
    },
    {
        codigo: 4,
        codEditora: 4,
        titulo: 'Refactoring: Improving the Design of Existing Code',
        resumo: 'Um guia prático sobre como melhorar o design do código existente sem alterar seu comportamento funcional.',
        autores: ['Martin Fowler']
    },
    {
        codigo: 5,
        codEditora: 5,
        titulo: 'JS: The Good Parts',
        resumo: 'Este livro explora os recursos mais poderosos e elegantes do JavaScript, ajudando os programadores a escrever código melhor.',
        autores: ['Douglas Crockford']
    }

];

export class ControleLivros {
    obterLivros(): Array<Livro> {
        return livros;
    }

    incluir(novoLivro: Livro): void {
        const novoCodigo = livros.length > 0 ? Math.max(...livros.map(livro => livro.codigo)) + 1 : 1;
        novoLivro.codigo = novoCodigo;
        livros.push(novoLivro);
    }

    excluir(codigo: number): void {
        const index = livros.findIndex(l => l.codigo === codigo);
        if (index !== -1) {
            livros.splice(index, 1);
        }
    }
};

export const controleLivros = new ControleLivros();
