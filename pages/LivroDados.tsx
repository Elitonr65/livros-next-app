import React, { useState } from "react";
import Menu from "../componentes/Menu";

const baseUrl = 'http://localhost:3000/api/livros';

const LivrosDados: React.FC = () => {
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(0);

    const incluirLivro = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!titulo || !resumo || !autores || codEditora <= 0) {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        const livro = {
            titulo,
            resumo,
            autores: autores.split('\n'),
            codEditora
        };

        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(livro),
            });

            if (!response.ok) {
                throw new Error('Erro ao incluir livro');
            }

            setTitulo('');
            setResumo('');
            setAutores('');
            setCodEditora(0);
            alert('Livro incluído com sucesso!');
        } catch (error) {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao incluir o livro. Tente novamente.');
        }
    };

    return (
        <>
            <Menu />
            <main className="container">
                <h1 className="my-4">Dados do Livro</h1>
                <form onSubmit={incluirLivro}>
                    <div className="mb-3">
                        <label htmlFor="titulo" className="form-label">Titulo</label>
                        <input type="text" className="form-control" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="resumo" className="form-label">Resumo</label>
                        <textarea className="form-control" id="Resumo" value={resumo} onChange={(e) => setResumo(e.target.value)} required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="autores" className="form-label">Autores</label>
                        <textarea className="form-control" id="Autores" value={autores} onChange={(e) => setAutores(e.target.value)} required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="editoras" className="form-label">Editora</label>


                        <input
                            className="form-control"
                            type="number"
                            id="editoras"
                            value={codEditora > 0 ? codEditora : ''}
                            onChange={(e) => setCodEditora(Number(e.target.value))}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary m-1">Salvar Dados</button>
                </form>
            </main>
            
        </>

    )
};

export default LivrosDados;