import { NextApiRequest, NextApiResponse } from "next";
import { controleLivros } from "../../../classes/controle/ControleLivros";

const getLivros = (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const livros = controleLivros.obterLivros();
            res.status(200).json(livros);
        } else if (req.method === 'POST') {
            const livro = req.body;
            controleLivros.incluir(livro);
            res.status(201).json({ message: 'Livro incluído com sucesso' });
        } else {
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Método ${req.method} não permitido`);
        }
    } catch (error) {
        res.status(500).json({ message: "Erro no servidor", error });
    }
};

export default getLivros;
