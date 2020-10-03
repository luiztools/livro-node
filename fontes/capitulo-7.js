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
const {MongoClient} = require("mongodb");
async function connect(){
  if(global.db) return global.db;
  const conn = await MongoClient.connect("mongodb://localhost:27017/", { useUnifiedTopology: true });
  if(!conn) return new Error("Can't connect");
  global.db = await conn.db("workshop");
  return global.db;
}

//7.10
router.get('/clientes', async function(req, res, next) {
    try{
      const db = await connect();
      res.json(await db.collection("customers").find().toArray());
    }
    catch(ex){
      console.log(ex);
      res.status(400).json({erro: `${ex}`});
    }
})

//7.11
const {MongoClient, ObjectId} = require("mongodb");

//7.12
router.get('/clientes/:id?', async function(req, res, next) {
    try{
      const db = await connect();
      if(req.params.id)
        res.json(await db.collection("customers").findOne({_id: new ObjectId(req.params.id)}));
      else
        res.json(await db.collection("customers").find().toArray());
    }
    catch(ex){
      console.log(ex);
      res.status(400).json({erro: `${ex}`});
    }
})

//7.13
router.post('/clientes', async function(req, res, next){
    try{
      const customer = req.body;
      const db = await connect();
      res.json(await db.collection("customers").insert(customer));
    }
    catch(ex){
      console.log(ex);
      res.status(400).json({erro: `${ex}`});
    }
})

//7.14
curl -X POST -d "{'nome':'Curl', 'idade': 11, 'uf': 'RJ'}" http://localhost:3000/clientes

//7.15
router.put('/clientes/:id', async function(req, res, next){
    try{
      const customer = req.body;
      const db = await connect();
      res.json(await db.collection("customers").update({_id: new ObjectId(req.params.id)}, customer));
    }
    catch(ex){
      console.log(ex);
      res.status(400).json({erro: `${ex}`});
    }
})

//7.16
curl -X PUT -d "{'nome':'Postman', 'idade': 20, 'uf': 'SP'}" http://localhost:3000/clientes/sfdsfsdfdsf9

//7.17
router.patch('/clientes/:id', async function(req, res, next){
    try{
      const customer = req.body;
      const db = await connect();
      const id = {_id: new ObjectId(req.params.id)};
      res.json(await db.collection("customers").updateOne(id, {$set: customer}));
    }
    catch(ex){
      console.log(ex);
      res.status(400).json({erro: `${ex}`});
    }
})

//7.18
curl -X PATCH -d "{'idade':53}" http://localhost:3000/clientes/sfsdfdsfsdfdsf9

//7.19
router.delete('/clientes/:id', async function(req, res, next){
    try{
      const db = await connect();
      res.json(await db.collection("customers").deleteOne({_id: new ObjectId(req.params.id)}));
    }
    catch(ex){
      console.log(ex);
      res.status(400).json({erro: `${ex}`});
    }
})

//7.20
curl -X DELETE http://localhost:3000/clientes/9sdsfddsgs