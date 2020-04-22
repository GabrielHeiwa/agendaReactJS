// Neste arquivo faremos a programação do nossas funções que irão fazer a criação, atualização, listagem e deletação em nosso banco de dados.
const connection = require('../database/connection');

module.exports = {
    //Função que cria nosso evento dentro do banco de dados
    async create(req, res) {
        //Aqui eu foi feito a descontrução do req.body que é um JSON
        //Inves de fazer req.body.titulo, tiramos o titulo do req.body e tornamos direto em uma varíavel.
        const { titulo, data_str, data_end } = req.body;

        try {
            //Conexão com o banco de dados e inserção dele no banco.
            const event = await connection('eventos').insert({
                titulo,
                data_end,
                data_str
            });
            //Trazemos os dados do req.body para dentro de event e retornamos como resposta em JSON.
            event.push(titulo, data_end, data_str)
            res.status(200).json(event);

        } catch (err) {
            //Tratamente de erro em caso de falha.
            res.status(400).json({ msg: "create operation failed, try again" });

        }
    },
    //Função de delete.
    async delete(req, res) {
        //Aqui novamente fazemos a desconstrução só que inves de vir no corpo do texto vem como paramêtro da URL, o req.params.
        const { id } = req.params;

        try {
            //Conexão e delete do dado.
            await connection('eventos').delete().where('id', id);
            res.status(200).json({ msg: "operation success" })

        } catch (err) {
            //Novamente um tratamento de errro caso falha.
            res.status(400).json({ msg: "delete operation failed, try again" });

        }
    },
    //Função de update.
    async update(req, res) {
        //Novamente a desconstrução tanto do corpo da requisição quando dos parametros.
        const { data_str, data_end, titulo } = req.body;
        const { id } = req.params;

        try {
            //Conexão e atualização do dado.
            await connection('eventos').update({
                titulo: titulo,
                data_str: data_str,
                data_end: data_end
            }).where('id', id);

            res.status(200).json({ msg: "update operation success" });

        } catch (err) {
            //Tratamento de erro caso falha.
            res.status(400).json({ msg: "update operation failed, try again" });

        }
    },
    //Função de listagem de eventos.
    async index(req, res) {
        //Conexão e seleção dos dados, com o retorno de um JSON.
        const list = await connection('eventos').select('*');
        return res.status(200).json(list);
        
    }
}