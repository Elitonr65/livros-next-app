import { Editora } from "../modelo/Editora";

const editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Salão Prentice' },
    { codEditora: 2, nome: 'O\' Reilly Mídia' },
    { codEditora: 3, nome: 'Addison-Wesley' },
    { codEditora: 4, nome: 'Moleiro' },
    { codEditora: 5, nome: 'Packt Publicação'}

];


export class ControleEditora {
    getEditoras(): Array<Editora> {
        return editoras;
    }

    getNomeEditora(codEditora: number): string {
        const editora = editoras.filter(e => e.codEditora === codEditora)[0];
        return editora ? editora.nome : '';
    }
};

export const controleEditora = new ControleEditora();
