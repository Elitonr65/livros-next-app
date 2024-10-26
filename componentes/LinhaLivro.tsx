import React, { useEffect, useState } from "react";
import { Livro } from "../classes/modelo/Livro";
import { ControleEditora } from "../classes/controle/ControleEditoras";

interface LinhaLivroProps {
    livro: Livro;
    excluir: () => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
    const [nomeEditora, setNomeEditora] = useState<string | null>(null);

    useEffect(() => {
        const controleEditora = new ControleEditora();
        const nome = controleEditora.getNomeEditora(livro.codEditora);
        setNomeEditora(nome || "Editora Desconhecida");

    }, [livro.codEditora]);

    return (
        <tr>
            <td>
                <strong>{livro.titulo}</strong>
                <br/>
                <button onClick={() => {
                    if (window.confirm('Tem certeza que deseja excluir este livro?')) {
                        excluir();
                    }
                }} className="btn btn-danger mt-2 btn-sm">
                    Excluir
                </button>
            </td>
            <td>{livro.resumo}</td>
            <td>{livro.autores.join(',')}</td>
            <td>{nomeEditora}</td>
       </tr >
    );
};