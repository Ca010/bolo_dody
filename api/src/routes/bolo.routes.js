const router = require('express-promise-router')();
const boloController = require('../controllers/bolo.controller');
const listarBolos = require('../controllers/listarBolos.controller');

// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
router.post('/bolos', boloController.createBolo);

// ==> Rota responsável por listar todos os 'Products': (GET): localhost:3000/api/products
router.get('/bolos', listarBolos.listAllBolos);

// ==> Rota responsável por selecionar 'Product' pelo 'Id': (GET): localhost:3000/api/products/:id
router.get('/bolos/:id', listarBolos.findBoloById);

// ==> Rota responsável por atualizar 'Product' pelo 'Id': (PUT): localhost: 3000/api/products/:id
router.put('/bolos/:id', listarBolos.updateBoloById);

// ==> Rota responsável por excluir 'Product' pelo 'Id': (DELETE): localhost:3000/api/products/:id
router.delete('/bolos/:id', listarBolos.deleteBoloById);

module.exports = router;