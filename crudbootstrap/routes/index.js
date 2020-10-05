var express = require('express');
var router = express.Router();

/* GET new page. */
router.get('/new', function(req, res, next) {
  res.render('new', { title: "Cadastro de Cliente", doc: {}, action: "/new" });
})

/* POST new page. */
router.post('/new', function(req, res, next) {
  const nome = req.body.nome;
  const idade = parseInt(req.body.idade);
  const uf = req.body.uf;
  global.db.insert({nome, idade, uf}, (err, result) => {
          if(err) { return res.redirect('/?erro=' + err); }
          res.redirect('/?new=true');
      })
})

/* GET edit page. */
router.get('/edit/:id', function(req, res, next) {
  var id = req.params.id;
  global.db.findOne(id, (e, doc) => {
      if(e) { return res.redirect('/?erro=' + e); }
      console.log(doc.nome);
      res.render('new', { title: 'Edição de Cliente', doc: doc, action: '/edit/' + doc._id });
    })
})

/* POST edit page. */
router.post('/edit/:id', function(req, res) {
  const id = req.params.id;
  const nome = req.body.nome;
  const idade = parseInt(req.body.idade);
  const uf = req.body.uf;
  global.db.update(id, {nome, idade, uf}, (e, result) => {
        if(e) { return res.redirect('/?erro=' + e); }
        res.redirect('/?edit=true');
    })
})

/* GET delete page. */
router.get('/delete/:id', function(req, res) {
  var id = req.params.id;
  global.db.deleteOne(id, (e, r) => {
        if(e) { return res.redirect('/?erro=' + e); }
        res.redirect('/?delete=true');
      })
})

/* GET home page. */
router.get('/', function(req, res) {
  global.db.findAll((e, docs) => {
      if(e) { return res.redirect('/?erro=' + e); }
      res.render('index', { docs });
  })
})

module.exports = router;
