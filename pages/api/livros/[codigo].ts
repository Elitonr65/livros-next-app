import { NextApiRequest, NextApiResponse } from "next";
import { controleLivros } from "../../../classes/controle/ControleLivros";

const getLivro = (req: NextApiRequest, res: NextApiResponse) => {
    const { codigo } = req.query;

    try {
        if (req.method === 'GET') {
            const livro = controleLivros.obterLivros().find(l => l.codigo === Number(codigo));
            if (livro) {
                res.status(200).json(livro);
            } else {
                res.status(404).json({ message: "Livro não encontrado" });
            }
        } else if (req.method === 'DELETE') {
            controleLivros.excluir(Number(codigo));
            res.status(200).json({ message: 'Livro deletado com sucesso' });
        } else {
            res.setHeader("Allow", ["GET", "DELETE"]);
            res.status(405).end(`Método ${req.method} não permitido`);
        }
    } catch (error) {
        res.status(500).json({ message: "Erro no servidor", error });
    }
};

export default getLivro;
