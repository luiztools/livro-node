//7.1
npm init

//7.2
npm i express mongodb body-parser

//7.3
const mongoClient = require("mongodb").MongoClient
mongoClient.connect("mongodb://localhost:27017/workshop", { useUnifiedTopology: true })
            .then(conn => global.conn = conn.db("workshop"))
            .catch(err => console.log(err))

module.exports = { }

//7.4
global.db = require('./db')
const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão

//7.5
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//7.6
//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);

//7.7
//inicia o servidor
app.listen(port);
console.log('API funcionando!');

//7.8
node app

//7.9
function findCustomers(callback){
	global.conn.collection('customers').find().toArray(callback)
}

module.exports = {findCustomers}

//7.10
// GET /clientes
router.get('/clientes', (req, res) => global.db.findCustomers((err, docs) => {
    if(err) res.status(500).json(err)
    else res.json(docs)
}))

//7.11
const ObjectId = require("mongodb").ObjectId
function findCustomer(id, callback){
	global.conn.collection('customers').findOne(new ObjectId(id), callback)
}

module.exports = {findCustomers, findCustomer}

//7.12
// GET /clientes/{id}
router.get('/clientes/:id', (req, res) => global.db.findCustomer(req.params.id, (err, doc) => {
    if(err) res.status(500).json(err)
    else res.json(doc)
}))

//7.13
function insertCustomer(customer, callback){
	global.conn.collection('customers').insertOne(customer, callback)
}

module.exports = {findCustomers, findCustomer, insertCustomer}

//7.14
// POST /clientes
router.post('/clientes', (req, res) => {
    const customer = req.body
    global.db.insertCustomer(customer, (err, result) => {
        if(err) res.status(500).json(err)
        else res.json({ message: 'Cliente cadastrado com sucesso!'})
    })
})

//7.15
curl -X POST -d "{'nome':'Curl', 'idade': 11, 'uf': 'RJ'}" http://localhost:3000/clientes

//7.16
function updateCustomer(id, customer, callback){
	global.conn.collection('customers').updateOne({_id: new ObjectId(id)}, customer, callback)
}

module.exports = {findCustomers, findCustomer, insertCustomer, updateCustomer}

//7.17
// PUT /clientes/{id}
router.put('/clientes/:id', (req, res) => {
    const id = req.params.id
    const customer = req.body
    global.db.updateCustomer(id, customer, (err, result) => {
        if(err) res.status(500).json(err)
        else res.json({ message: 'Cliente atualizado com sucesso!'})
    })
})

//7.18
curl -X PUT -d "{'nome':'Postman', 'idade': 20, 'uf': 'SP'}" http://localhost:3000/clientes/sfdsfsdfdsf9

//7.19
function patchCustomer(id, updates, callback){
	global.conn.collection('customers').updateOne({_id: new ObjectId(id)}, { $set: updates }, callback)
}

module.exports = {findCustomers, findCustomer, insertCustomer, updateCustomer, patchCustomer}

//7.20
// PATCH /clientes/{id}
router.patch('/clientes/:id', (req, res) => {
    const id = req.params.id
    const updates = req.body
    global.db.patchCustomer(id, updates, (err, result) => {
        if(err) res.status(500).json(err)
        else res.json({ message: 'Cliente atualizado com sucesso!'})
    })
})

//7.21
curl -X PATCH -d "{'idade':53}" http://localhost:3000/clientes/sfsdfdsfsdfdsf9

//7.22
function deleteCustomer(id, callback){
	global.conn.collection('customers').deleteOne({_id: new ObjectId(id)}, callback)
}

module.exports = {findCustomers, findCustomer, insertCustomer, updateCustomer, patchCustomer, deleteCustomer}

//7.23
// DELETE /clientes/{id}
router.delete('/clientes/:id', (req, res) => {
    const id = req.params.id;
    global.db.deleteCliente(id, (err) => {
        if(err) res.status(500).json(err);
        else res.json({ message: 'Cliente excluído com sucesso!'})
    })
})

//7.24
curl -X DELETE http://localhost:3000/clientes/9sdsfddsgs