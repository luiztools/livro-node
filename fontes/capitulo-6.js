//6.1
mongod --dbpath C:\mongo\data

//6.2
mongosh

//6.3
show databases

//6.4
use workshop

//6.5
show collections

//6.6
db.customers.find()

//6.7
db.customers.insertOne({ nome: "Luiz", idade: 34 })

//6.8
custArray = [{ nome : "Monica", idade : 34 }, { nome : "Teste", "uf" : "RS" }]
db.customers.insertMany(custArray)

//6.9
db.customers.find().pretty()

//6.10
db.customers.find({uf: "RS"})

//6.11
db.customers.find({nome: { $regex: /a/ }})

//6.12
db.customers.find({nome: /a/})

//6.13
db.customers.find({idade: {$gte: 18}})

//6.14
db.customers.find({nome: "Luiz", idade: {$gte: 18}})

//6.15
db.customers.find({nome: /a/, idade: {$gte: 18}})

//6.16
db.customers.find().skip(1).limit(10)

//6.17
db.customers.find().sort({idade: 1})

//6.18
db.customers.replaceOne({nome: "Luiz"}, {nome: "Luiz", idade: 34, uf: "RS"})

//6.19
db.customers.updateOne({_id: ObjectId("5ed3b02075696ebb44fba8f8")}, {$set: {idade: 28}})

//6.20
db.customers.replaceOne({nome: "LuizTools"}, {nome: "LuizTools", uf: "RS"}, {upsert: true})

//6.21
db.customers.deleteOne({nome: "Luiz"})

//6.22
npm install mongodb

//6.23
const {MongoClient} = require("mongodb");
async function connect(){
  if(global.db) return global.db;
  const client = new MongoClient("mongodb://127.0.0.1:27017/");
  await client.connect();
  global.db = client.db("workshop");
  return global.db;
}

module.exports = { }

//6.24
global.db = client.db("workshop");
return global.db;

//6.25
global.db = require('../db')

//6.26
async function findAll(){  
    const db = await connect();
    return db.collection("customers").find().toArray();
}

//6.27
module.exports = { findAll }

//6.28
const db = require('../db');
/* GET home page. */
router.get('/', async function(req, res) {
  res.render('index', {docs: await db.findAll()});
})

//6.29
<% if(!docs || docs.length == 0) { %>
    <tr>
      <td colspan="4">Nenhum cliente cadastrado.</td>
    </tr>

//6.30
<% } else { 
    docs.forEach(function(customer){ %>
      <tr>
        <td style="width:50%"><%= customer.nome %></td>
        <td style="width:15%"><%= customer.idade %></td>
        <td style="width:15%"><%= customer.uf %></td>
        <td><!-- em breve --></td>
      </tr>
    <% }) 
}%>

//6.31
npm start

//6.32
async function insert(customer){
    const db = await connect();
    return db.collection("customers").insertOne(customer);
}

//6.33
module.exports = { findAll, insert }

//6.34
router.post('/new', async function(req, res) {
    const nome = req.body.nome;
    const idade = parseInt(req.body.idade);
    const uf = req.body.uf;
    await db.insert({nome, idade, uf});
    res.redirect('/?new=true');
})

//6.35
<td><a href="/edit/<%= customer._id %>">Editar</a></td>

//6.36
const {MongoClient, ObjectId} = require("mongodb");
//...
async function findOne(id){ 
    const db = await connect(); 
    const objId = new ObjectId(id);
    return db.collection("customers").findOne(objId);
}

//6.37
module.exports = { findAll, insert, findOne }

//6.38
router.get('/edit/:id', async function(req, res, next) {
    const id = req.params.id;
    const doc = await db.findOne(id);
    res.render('new', { title: 'Edição de Cliente', doc, action: '/edit/' + doc._id })
})

//6.39
/* GET new page. */
router.get('/new', function(req, res, next) {
    res.render('new', { title: 'Cadastro de Cliente', doc: {} });
  })

//6.40
<form action="<%= action %>" method="POST">
    <p>
        <label>Nome: <input type="text" name="nome" value="<%= doc.nome %>" /></label>
    </p>
    <p>
        <label>Idade: <input type="number" name="idade" value="<%= doc.idade %>" /></label>
    </p>
    <p>
        <label>UF: <select name="uf">
                <% const s = "selected" %>
                <option <% if(doc.uf === "RS") { %><%= s %><% } %>>RS</option>
                <option <% if(doc.uf === "SC") { %><%= s %><% } %>>SC</option>
                <option <% if(doc.uf === "PR") { %><%= s %><% } %>>PR</option>
                <!-- coloque os estados que quiser -->
            </select></label>
    </p>
    <p>
        <a href="/">Cancelar</a> | <input type="submit" value="Salvar" />
    </p>
</form>

//6.41
async function update(id, customer){
    const filter = {_id: new ObjectId(id)};
    const db = await connect();
    return db.collection("customers").updateOne(filter, {$set: customer});
}

module.exports = { findAll, insert, findOne, update }

//6.42
router.post('/edit/:id', async function(req, res) {
  const id = req.params.id;
  const nome = req.body.nome;
  const idade = parseInt(req.body.idade);
  const uf = req.body.uf;
  await db.update(id, {nome, idade, uf});
  res.redirect('/?edit=true');
})})
})

//6.43
<td>
   <a href="/edit/<%= customer._id %>">Editar</a>
   <a href="/delete/<%= customer._id %>" onclick="return confirm('Tem certeza?');">Excluir</a>
</td>

//6.44
async function deleteOne(id){
    const db = await connect(); 
    const filter = {_id: new ObjectId(id)};
    return db.collection("customers").deleteOne(filter);
}

module.exports = { findAll, insert, findOne, update, deleteOne }

//6.45
router.get('/delete/:id', async function(req, res) {
  const id = req.params.id;
  await db.deleteOne(id);
  res.redirect('/?delete=true');
})

//6.46
/* GET home page. */
router.get('/', async function(req, res) {
  try{
    res.render('index', {docs: await db.findAll()});
  }catch(ex){
    res.redirect(`/erro=${ex}`);
  }
})

//6.47
<script>
  if(location.href.indexOf('delete=true') != -1){
      alert('Cliente excluído com sucesso!');
  }
  else if(location.href.indexOf('edit=true') != -1){
      alert('Cliente editado com sucesso!');
  }
  else if(location.href.indexOf('new=true') != -1){
      alert('Cliente cadastrado com sucesso!');
  }
  else if(location.href.indexOf('erro') != -1){
      alert('Ocorreu um erro!');
  }
</script>
