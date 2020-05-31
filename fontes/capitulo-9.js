//9.1
<body style="background-color: lightgrey">
   <h1>This is a heading</h1>
   <p>This is a paragraph.</p>
</body>

//9.2
<h1 style="color:blue">This is a heading</h1>
<p style="color:red">This is a paragraph.</p>

//9.3
<h1 style="font-family:verdana">This is a heading</h1>
<p style="font-family:courier">This is a paragraph.</p>

//9.4
<h1 style="font-size:300%">This is a heading</h1>
<p style="font-size:160%">This is a paragraph.</p>

//9.5
<h1 style="text-align:center">Centered heading</h1>
<p>This is a paragraph.</p>

//9.6
<style>
	/* seu estilo vai aqui. A propósito, isto é um comentário CSS */
</style>

//9.7
<style>
p {
	color: green;
}
</style>

//9.8
<style>
.paragrafoInicial {
	color: green;
}
</style>

//9.9
<p class="paragrafoInicial">
	Este texto ficará verde.
</p>
<p>
	Este texto terá a cor normal (preta).
</p>

//9.10
<style>
	p { font-family: Arial; }

	.paragrafoInicial{ Color: green; }
</style>

//9.11
<style>
	table p {
		color: green;
}
</style>

//9.12
<p class="paragrafoInicial paragrafoImportante">Parágrafo cheio de estilo.</p>

//9.13
<style>
#paragrafoLegal{
	color: red;
}
</style>

//9.14
<!DOCTYPE html>
<html>
<head><link rel="stylesheet" href="estilos.css" /></head>
<body>

//9.15
p {
	display: none; /* todos p's ficarão invisíveis*/
}

//9.16
p {
	background-color: #d0e4fe;
	background-image: url('url da imagem');
	background-repeat: no-repeat;
}

//9.17
p {
	width: 100%;
	height: 50px;
}

//9.18
p { border: 1px solid black; }

//9.19
p { border: 1px solid black; padding: 10px; }

//9.20
p {
   border: 1px solid black;
   padding: 10px;
   margin: 30px;
}

//9.21
p {
	margin-bottom: 15px;
}

//9.22
$('#myP').css('color', 'red')

//9.23
$('.paragrafoInicial')

//9.24
$('.paragrafoInicial').hide()

//9.25
$('.paragrafoInicial').each(function(index, value) { 
	//faz uma ou mais operações sobre todos os parágrafos iniciais
})

//9.26
$('.paragrafoInicial').css('font-family':'Calibri')

//9.27
<link href="css/estilos.css" rel="stylesheet" />

//9.28
<table style="width:50%">

//9.29
table { width: 50%; }

//9.30
<tr style="background-color: #CCC">

//9.31
table thead tr { background-color: #CCC; }

//9.32
<td style="width:50%">Nome</td>
<td style="width:15%">Idade</td>
<td style="width:15%">UF</td>
<td>Ações</td>

//9.33
table thead tr td:first-child { width:50%; }

table thead tr td:last-child { width:20%; }

//9.34
<table cellspacing="0">

//9.35
body{ padding-left: 10px; }

//9.36
form{
    width: 50%;
    text-align: right;
}

//9.37
input {
    padding: 5px;
    border-radius: 4px;
}

//9.38
select{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 5px;
    width: 53%;
}

//9.39
input[type="text"], input[type="number"] { width: 50%; }

//9.40
#btnListar, input[type="submit"] { width: 25%; }

//9.41
h2 {
    text-align: right;
    padding-right: 50%;
}

//9.42
table tr td{
    padding: 5px;
    text-align: center;
}

//9.43
table tr td:first-child{  text-align: left; }

//9.44
table tbody tr:hover{
    background-color: #ccc;
}

//9.45
<!DOCTYPE html>
<html>
  <head>
    <title>Exemplo JQuery</title>
    <link href="css/bootstrap.min.css" rel="stylesheet" />
  </head>
…
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/scripts.js"></script>
  </body>
</html>

//9.46
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

//9.47
<!DOCTYPE html>
<html>
<head>
  <title>Exemplo Bootstrap</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link href="css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
  <div class="container">

… todo o restante do body aqui …

  </div>
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.bundle.min.js"></script>
  <script src="js/scripts.js"></script>
</body>
</html>

//9.48
<div class="row">
	<div class="col-sm-4">.col-sm-4</div>
	<div class="col-sm-4">.col-sm-4</div>
	<div class="col-sm-4">.col-sm-4</div>
</div>

//9.49
<div class="row">
	<div class="col-sm-4">.col-sm-4</div>
	<div class="col-sm-8">.col-sm-8</div>
</div>

//9.50
<div class="container">
    <div class="row">
        <div class="col">
            <h1>Exemplo Bootstrap</h1>
            <span class="text-muted">Sistema para exemplificar uso de Bootstrap</span>
        </div>
    </div>

//9.51
<table cellspacing="0" class="table">

//9.52
<table cellspacing="0" class="table table-striped">
    
//9.53
<table cellspacing="0" class="table table-striped table-bordered table-hover">

//9.54
<div class="well">Basic Well</div>

//9.55
<div class="alert alert-success">
   <strong>Success!</strong> This alert box indicates a successful or positive action.
</div>

//9.56
<div class="alert alert-success">
    <strong>Successo!</strong> Blá blá blá!
</div>

//9.57
$(document).ready(function(){
    loadTable()
    $('#divCadastro,.alert').hide()

    //restante do código
})

//9.58
function updateDatabase(data, callback){
    const json = {}
    data.forEach(item => json[item['name']] = item['value'])

    $.post(webApiDomain + '/clientes', json, function(data){
        $('.alert-success').html('<strong>Sucesso!</strong> Cliente cadastrado com sucesso!')
        $('.alert-success').show(1000, function(){
            setTimeout(function(){ $('.alert-success').hide(1000) }, 2000)
        })
        callback()
    })
}

//9.59
<div class="alert alert-danger">
    <strong>Erro!</strong> Nome é obrigatório!
</div>

//9.60
$('form').submit(function(event){
    event.preventDefault()

    if($('input[name="nome"]').val() === ''){
            $('.alert-danger').show(1000, function(){
                setTimeout(function(){ $('.alert-danger').hide(1000) }, 2000)
            })
            return
        }

    const data = $(this).serializeArray()
    updateDatabase(data, loadTable)
    $('#divListagem,#divCadastro').toggle()
})

//9.61
<input type="submit" value="Salvar" class="btn btn-primary" />

//9.62
<div class="btn-group">
	<button type="button" class="btn btn-primary">Apple</button>
	<button type="button" class="btn btn-primary">Samsung</button>
	<button type="button" class="btn btn-primary">Sony</button>
</div>

//9.63
<div class="btn-group">
	<button type="button" class="btn btn-primary">Apple</button>
	<button type="button" class="btn btn-primary">Samsung</button>
	<div class="btn-group">

	<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Sony <span class="caret"></span></button>
	<ul class="dropdown-menu" role="menu">
		<li><a href="#">Tablet</a></li>
		<li><a href="#">Smartphone</a></li>
	</ul>
	</div>
</div>

//9.64
function loadTable(){
    const tbody = $('table > tbody')
    tbody.empty()
    $.getJSON(webApiDomain + '/clientes', function(data){
        data.forEach(item =>{
            let linha = '<td>' + item.nome + '</td><td>' + item.idade + '</td><td>' + item.uf + '</td>'
            tbody.append('<tr>' + linha + '<td><a href="#" class="btn btn-danger" data-id="' + item._id + '">x</a></td></tr>')
        })
    })
}

//9.65
$('table').on('click','a[class="btn btn-danger"]', function(){
    if(confirm('Tem certeza que deseja excluir este cliente?')){
        const input = $(this);
        const id = input.attr('data-id')
        deleteCustomer(id, function(){
            input.closest('tr').remove();
        })
    }
    return false
})

//9.66
function deleteCustomer(id, callback){
    $.ajax({
        url: webApiDomain + '/clientes/' + id,
        method: 'DELETE',
        success: function(result) {
            $('.alert-success').html('<strong>Sucesso!</strong> Cliente excluído com sucesso!')
            $('.alert-success').show(1000, function(){
                setTimeout(function(){ $('.alert-success').hide(1000) }, 2000)
            })
            callback()
        }
    })
}

//9.67
<form action="" method="" role="form">

//9.68
<form action="" method="" role="form">
    <div class="form-group">
        <label>Nome: <input type="text" name="nome" class="form-control" /></label>
    </div>
    <div class="form-group">
            <label>Idade: <input type="number" name="idade" class="form-control" /></label>
    </div>
    <div class="form-group">
        <label>UF: <select name="uf" class="form-control">
                <option>RS</option>
                <option>SC</option>
                <option>PR</option>
                <!-- coloque os estados que quiser -->
            </select></label>
    </div>
    <div class="form-group">
        <input type="button" id="btnListar" value="Listar" class="btn btn-default"> | <input type="submit" value="Salvar" class="btn btn-primary" />
    </div>
</form>

//9.69
<div class="radio">
	<label><input type="radio" name="optradio">Option 1</label>
</div>
<div class="radio">
	<label><input type="radio" name="optradio">Option 2</label>
</div>
<div class="radio disabled">
	<label><input type="radio" name="optradio">Option 3</label>
</div>

//9.70
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

//9.71
<script src="/js/jquery.min.js"></script>
<script src="/js/bootstrap.bundle.min.js"></script>
<script src="/js/scripts-index.js"></script>
</body>
</html>

//9.72
<head>
  <title>CRUD de Clientes</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link href="https://bootswatch.com/4/cyborg/bootstrap.min.css" rel="stylesheet" />
</head>

//9.73
<div class="container">
  <h1>Listagem de Clientes</h1>
  <p>Clientes já cadastrados no sistema.</p>
  <div class="alert alert-success">
      <strong>Successo!</strong> Cliente cadastrado com sucesso!
    </div>
  <table class="table table-striped table-bordered table-hover">
    <thead>
      <tr><td>Nome</td><td>Idade</td><td>UF</td><td>Ações</td></tr>
    </thead>
    <tbody>
      <% if(!docs || docs.length == 0) { %>
        <tr>
          <td colspan="4">Nenhum cliente cadastrado.</td>
        </tr>
        <% } else { 
          docs.forEach(function(customer){ %>
          <tr>
            <td><%= customer.nome %></td>
            <td><%= customer.idade %></td>
            <td><%= customer.uf %></td>
            <td>
              <a href="/edit/<%= customer._id %>" class="btn btn-info">edit</a>
              <a href="/delete/<%= customer._id %>" class="btn btn-danger" onclick="return confirm('Tem certeza?');">x</a>
            </td>
          </tr>
          <% }) 
      }%>
    </tbody>
  </table>
  <a href="/new" class="btn btn-primary">Cadastrar Novo</a>
</div>

//9.74
function alertar(mensagem){
    $('.alert-success').html('<strong>Sucesso!</strong> ' + mensagem)
    $('.alert-success').show(1000, function(){
        setTimeout(function(){ $('.alert-success').hide(1000) }, 2000)
    })
}

if(location.href.indexOf('delete=true') != -1){
    alertar('Cliente excluído com sucesso!');
}
else if(location.href.indexOf('edit=true') != -1){
    alertar('Cliente editado com sucesso!');
}
else if(location.href.indexOf('new=true') != -1){
    alertar('Cliente cadastrado com sucesso!');
}
else if(location.href.indexOf('erro') != -1){
    alertar('Ocorreu um erro!');
}

//9.75
<head>
    <title>CRUD de Clientes</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link href="https://bootswatch.com/4/cyborg/bootstrap.min.css" rel="stylesheet" />
  </head>

//9.76
<div class="container">
    <h1>
        <%= title %>
    </h1>
    <p>Preencha os dados abaixo para salvar o cliente.</p>
    <div class="alert alert-danger col-sm-6">
      <strong>Erro!</strong> Nome é um dado obrigatório!
    </div>
    <form action="<%= action %>" method="POST" role="form" class="form-horizontal">
        <div class="form-group">
          <label class="control-label" for="nome">Nome: 
              <input type="text" id="nome" name="nome" value="<%= doc.nome %>" class="form-control" />
          </label>
        </div>
        <div class="form-group">
          <label class="control-label" for="idade">Idade:
              <input type="number" id="idade" name="idade" value="<%= doc.idade %>" class="form-control" />
          </label>
        </div>
        <div class="form-group">
          <label class="control-label">UF:
            <select name="uf" class="form-control">
            <% const s = "selected" %>
            <option <% if(doc.uf === "RS") { %><%= s %><% } %>>RS</option>
            <option <% if(doc.uf === "SC") { %><%= s %><% } %>>SC</option>
            <option <% if(doc.uf === "PR") { %><%= s %><% } %>>PR</option>
            <!-- coloque os estados que quiser -->
            </select>
          </label>
        </div>
        <div class="form-group">
          <a href="/" class="btn btn-default">Cancelar</a> <input type="submit" value="Salvar" class="btn btn-primary" />
        </div>
    </form>
</div>

//9.77
$(document).ready(function(){
    $('.alert-danger').hide()

    $('form').submit(function (event) {
    
        if ($('#nome').val() === ''
            || $('#idade').val() === '') {
            $('.alert-danger').show(1000, function () {
                setTimeout(function () { $('.alert-danger').hide(1000) }, 2000)
            })
            event.preventDefault()
        }
    })
})

//9.78
<script src="/js/jquery.min.js"></script>
<script src="/js/bootstrap.bundle.min.js"></script>
<script src="/js/scripts-new.js"></script>