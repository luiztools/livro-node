//6.1
mongod --dbpath C:\mongo\data

//6.2
mongo

//6.3
show databases

//6.4
use workshop

//6.5
show collections

//6.6
db.customers.find()

//6.7
db.customers.insert({ nome: "Luiz", idade: 29 })

//6.8
custArray = [{ nome : "Monica", idade : 31 }, { nome : "Teste", "uf" : "RS" }]
db.customers.insert(custArray)

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
db.customers.update({nome: "Luiz"}, {nome: "Luiz", idade: 32, uf: "RS"})

//6.19
db.customers.updateOne({_id: ObjectId("5ed3b02075696ebb44fba8f8")}, {$set: {idade: 28}})

//6.20
db.customers.update({nome: "LuizTools"}, {nome: "LuizTools", uf: "RS"}, {upsert: true})

//6.21
db.customers.deleteOne({nome: "Luiz"})

//6.22
npm install mongodb

//6.23
const mongoClient = require("mongodb").MongoClient
mongoClient.connect("mongodb://localhost:27017/workshop", { useUnifiedTopology: true })
            .then(conn => global.conn = conn.db("workshop"))
            .catch(err => console.log(err))

module.exports = { }

//6.24
conn => global.conn = conn.db("workshop")

//6.25
global.db = require('../db')

//6.26
function findAll(callback){  
    global.conn.collection("customers").find({}).toArray(callback);
}

//6.27
module.exports = { findAll }

//6.28
/* GET home page. */
router.get('/', function(req, res) {
    global.db.findAll((e, docs) => {
        if(e) { return console.log(e); }
        res.render('index', { docs });
    })
  })

//6.29
<% if(!docs || docs.length == 0) { %>
    <tr>
      <td colspan="4">Nenhum cliente cadastrado.</td>
    </tr>
<% } %>

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
function insert(customer, callback){
    global.conn.collection("customers").insertOne(customer, callback);
}

//6.33
module.exports = { findAll, insert }

//6.34
/* POST new page. */
router.post('/new', function(req, res, next) {
    const nome = req.body.nome
    const idade = parseInt(req.body.idade);
    const uf = req.body.uf
    global.db.insert({nome, idade, uf}, (err, result) => {
            if(err) { return console.log(err) }
            res.redirect('/?new=true')
        })
  })

//6.35
<td><a href="/edit/<%= customer._id %>">Editar</a></td>

//6.36
const ObjectId = require("mongodb").ObjectId;
function findOne(id, callback){  
    global.conn.collection("customers").findOne(new ObjectId(id), callback);
}

//6.37
module.exports = { findAll, insert, findOne }

//6.38
/* GET edit page. */
router.get('/edit/:id', function(req, res, next) {
    var id = req.params.id
    global.db.findOne(id, (e, doc) => {
        if(e) { return console.log(e) }
        console.log(doc.nome)
        res.render('new', { title: 'Edição de Cliente', doc: doc, action: '/edit/' + doc._id })
      })
  })

//6.39
/* GET new page. */
router.get('/new', function(req, res, next) {
    res.render('new', { title: 'Cadastro de Cliente', doc: {} })
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
function update(id, customer, callback){
    global.conn.collection("customers").updateOne({_id: new ObjectId(id)}, customer, callback);
}

module.exports = { findAll, insert, findOne, update }

//6.42
/* POST edit page. */
router.post('/edit/:id', function(req, res) {
  const id = req.params.id
  const nome = req.body.nome
  const idade = parseInt(req.body.idade)
  const uf = req.body.uf
  global.db.update(id, {nome, idade, uf}, (e, result) => {
        if(e) { return console.log(e) }
        res.redirect('/?edit=true')
    })
})

//6.43
<td>
   <a href="/edit/<%= customer._id %>">Editar</a>
   <a href="/delete/<%= customer._id %>" onclick="return confirm('Tem certeza?');">Excluir</a>
</td>

//6.44
function deleteOne(id, callback){
    global.conn.collection("customers").deleteOne({_id: new ObjectId(id)}, callback);
}

module.exports = { findAll, insert, findOne, update, deleteOne }

//6.45
/* GET delete page. */
router.get('/delete/:id', function(req, res) {
  var id = req.params.id
  global.db.deleteOne(id, (e, r) => {
        if(e) { return console.log(e) }
        res.redirect('/?delete=true')
      })
})

//6.46
/* GET home page. */
router.get('/', function(req, res) {
  global.db.findAll((e, docs) => {
      if(e) { return res.redirect('/?erro=' + e); }
      res.render('index', { docs });
  })
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
