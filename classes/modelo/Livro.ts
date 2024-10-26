export class Livro {
    constructor(
        public codigo: number,
        public titulo: string,
        public codEditora: number,
        public resumo: string,
        public autores: string[]
    ) {}
}