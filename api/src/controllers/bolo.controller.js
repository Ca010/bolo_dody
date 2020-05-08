const db = require("../config/database");

// ==> Método responsável por criar um novo 'Product':

exports.createBolo = async(req, res) => {
    const { bolo_name, kilo, price } = req.body;
    const { rows } = await db.query(
        "INSERT INTO bolos (bolo_name, kilo, price) VALUES ($1, $2, $3)", [bolo_name, kilo, price]
    );

    res.status(201).send({
        message: "Bolo adicionado com sucesso!",
        body: {
            product: { bolo_name, kilo, price }
        },
    });
};