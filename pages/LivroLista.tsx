import React, { useEffect, useState } from "react";
import { LinhaLivro } from "../componentes/LinhaLivro";
import { Livro } from "../classes/modelo/Livro";
import Menu from "../componentes/Menu";

const baseUrl = process.env.NEXT_PUBLIC_API_URL 
  ? process.env.NEXT_PUBLIC_API_URL 
  : 'http://localhost:3000/api/livros';

const LivroLista: React.FC = () => {
    const [livros, setLivros] = useState<Livro[]>([]);
    const [carregado, setCarregado] = useState(false);

    const obterLivros = async () => {
        const res = await fetch(baseUrl);
        const data: Livro[] = await res.json();
        setLivros(data);
        setCarregado(true);
    };

    const excluirLivro = async (codigo: number) => {
        const res = await fetch(`/api/livros/${codigo}`, { method: 'DELETE' });
        if (res.ok) {
            setLivros(livros.filter(livro => livro.codigo !== codigo));
        } else {
            console.error('Erro ao excluir o livro:', await res.text());
        }
    };
    useEffect(() => {
        if (!carregado) obterLivros();
    }, [carregado]);

    return (
        <>
            <Menu />
            <div className="container-fluid mt-4">

                <h1 className="my-4">Catálogo de Livros</h1>

                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>Titulo</th>
                            <th>Resumo</th>
                            <th>Autores</th>
                            <th>Editora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro) => (
                            <LinhaLivro
                                key={livro.codigo}
                                livro={livro}
                                excluir={() => excluirLivro(livro.codigo)}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );

};

export default LivroLista;