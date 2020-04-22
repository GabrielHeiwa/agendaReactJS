// Neste arquivo faremos a programação do nossas funções que irão fazer a criação, atualização, listagem e deletação em nosso banco de dados.
const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { titulo, data_str, data_end } = req.body;

        try {
            const event = await connection('eventos').insert({
                titulo,
                data_end,
                data_str
            });
            
            event.push(titulo, data_end, data_str)
            res.status(200).json(event);

        } catch (err) {
            res.status(400).json({ msg: "create operation failed, try again" });

        }
    },

    async delete(req, res) {
        const { id } = req.params;

        try {
            await connection('eventos').delete().where('id', id);
            res.status(200).json({ msg: "operation success" })

        } catch (err) {
            res.status(400).json({ msg: "delete operation failed, try again" });

        }
    },

    async update(req, res) {
        const { data_str, data_end, titulo } = req.body;
        const { id } = req.params;

        try {
            await connection('eventos').update({
                titulo: titulo,
                data_str: data_str,
                data_end: data_end
            }).where('id', id);

            res.status(200).json({ msg: "update operation success" });

        } catch (err) {
            res.status(400).json({ msg: "update operation failed, try again" });

        }
    },

    async index(req, res) {
        const list = await connection('eventos').select('*');
        return res.status(200).json(list);
        
    }
}