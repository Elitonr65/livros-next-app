import { NextApiResponse, NextApiRequest } from 'next';
import { controleEditora } from '../../../classes/controle/ControleEditoras';

const getEditora = (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const codEditora = Number(req.query.codEditora);

        if (req.method === 'GET') {
            const nomeEditora = controleEditora.getNomeEditora(codEditora);
            res.status(200).json({nome: nomeEditora});
        } else {
            res.setHeader("Allow", [ "GET"]);
            res.status(405).end(`Metod ${req.method} Not Allowed`);
        }
    } catch (error) {
        res.status(500).json({message: "Erro no servidor", error})       
    }
};

export default getEditora;