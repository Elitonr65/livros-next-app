import { NextApiRequest, NextApiResponse } from "next";
import { ControleEditora } from "../../../classes/controle/ControleEditoras";

const controleEditora = new ControleEditora();

const handler =  (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const editoras = controleEditora.getEditoras();
            res.status(200).json(editoras);
        } else {
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        res.status(500).json({message: "Erro no servidor", error})
    }
};

export default handler;
