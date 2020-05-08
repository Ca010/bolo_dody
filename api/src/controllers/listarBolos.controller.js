const db = require("../config/database");

// ==> Método responsável por listar todos os 'Products':
exports.listAllBolos = async(req, res) => {
    const response = await db.query('SELECT * FROM bolos ORDER BY bolo_name ASC');
    res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Product' pelo 'Id':
exports.findBoloById = async(req, res) => {
    const boloId = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM bolos WHERE boloid = $1', [boloId]);
    res.status(200).send(response.rows);
}

// ==> Método responsável por atualizar um 'Product' pelo 'Id':
exports.updateBoloById = async(req, res) => {
    const boloId = parseInt(req.params.id);
    const { bolo_name, kilo, price } = req.body;

    const response = await db.query(
        "UPDATE bolos SET bolo_name = $1, kilo = $2, price = $3 WHERE boloId = $4", [bolo_name, kilo, price, boloId]
    );

    res.status(200).send({ message: "Bolo atualizado com sucesso!" });
};

// ==> Método responsável por excluir um 'Product' pelo 'Id':
exports.deleteBoloById = async(req, res) => {
    const boloId = parseInt(req.params.id);
    await db.query('DELETE FROM bolos WHERE boloId = $1', [boloId]);

    res.status(200).send({ message: 'Bolo deletado com sucesso!', boloId });
};