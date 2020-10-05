//a2.20
<script src="js/jquery.min.js"></script>

//a2.21
<!DOCTYPE html>
<html>
	<head><meta charset="utf-8" /></head>
	<body>
		<input type="text" name="nome" id="txtNome" />
	</body>
</html>

//a2.22
<!DOCTYPE html>
<html>
  <head>
    <title>Exemplo JQuery</title>
    <meta charset="utf-8" />
  </head>
  <body>
    <h1>Exemplo JQuery</h1>
    <p>Sistema para exemplificar uso de JQuery</p>
    <script src="js/jquery.min.js"></script>
  </body>
</html>

//a2.23
<div id="divCadastro">
    <h2>Cadastro</h2>
</div>
<div id="divListagem">
    <h2>Listagem</h2>
</div>

//a2.24
<div id="divCadastro">
    <h2>Cadastro</h2>
    <input type="button" id="btnListar" value="Listar">
</div>
<div id="divListagem">
    <h2>Listagem</h2>
    <input type="button" id="btnCadastrar" value="Cadastrar">
</div>

//a2.25
<script src="js/jquery.min.js"></script>
<script src="js/scripts.js"></script>

//a2.26
$(document).ready(function(){
    
})

//a2.27
$(document).ready(function(){
    $('#divListagem').hide();
})

//a2.28
$(document).ready(function(){
    $('#divListagem').hide();

    $('#btnListar').click(function(){
        $('#divListagem').show();
        $('#divCadastro').hide();
    })

    $('#btnCadastrar').click(function(){
        $('#divListagem').hide();
        $('#divCadastro').show();
    })
})

//a2.29
$(document).ready(function(){
    $('#divListagem').hide();

    $('#btnListar,#btnCadastrar').click(function(){
        $('#divListagem,#divCadastro').toggle();
    })
})

//a2.30
<form action="" method="">
    <p>
        <label>Nome: <input type="text" name="nome" /></label>
    </p>
    <p>
        <label>Idade: <input type="number" name="idade" /></label>
    </p>
    <p>
        <label>UF: <select name="uf">
        <option>RS</option>
        <option>SC</option>
        <option>PR</option>
        <!-- coloque os estados que quiser -->
        </select></label>
    </p>
    <p>
    <input type="button" id="btnListar" value="Listar"> | <input type="submit" value="Salvar" />
    </p>
</form>

//a2.31
<table style="width:50%">
   <thead>
      <tr style="background-color: #CCC">
         <td style="width:50%">Nome</td>
         <td style="width:15%">Idade</td>
         <td style="width:15%">UF</td>
         <td>Ações</td>
       </tr>
   </thead>
   <tbody>
      <tr>
         <td colspan="4">Nenhum cliente cadastrado.</td>
      </tr>
   </tbody>
   <tfoot>
        <tr>
          <td colspan="4">
              <input type="button" id="btnCadastrar" value="Cadastrar">
          </td>
        </tr>
   </tfoot>
</table>

//a2.32
$('form').submit(function(event){
    const data = $(this).serializeArray();
    
    let linha = '';
    data.forEach(item => linha += '<td>' + item.value + '</td>');

    if($('table > tbody > tr > td').length === 1)//se tem apenas uma TD, é a default
        $('table > tbody').empty();

    $('table > tbody').append('<tr>' + linha + '<td><input type="button" value="X" /></td></tr>');
    $('#divListagem,#divCadastro').toggle();
    event.preventDefault();
})

//a2.33
$('table').on('click','input[value="X"]', function(){
    if(confirm('Tem certeza que deseja excluir este cliente?'))
        $(this).closest('tr').remove();
})

//a2.34
<script src="js/jquery.min.js"></script>

//a2.35
$.ajax('/clientes', settings)

//a2.36
var data = $('#formCadastro').serialize();
settings.data = data;

//a2.37
$.getJSON('/clientes', function(jsonData){
	jsonData.each(function(key,val){
		$('#estados').append('<option>'+val+'</option>');
           });
})

element.load(url);

//a2.38
$('#estados').load('/estados');

//a2.39
function updateTable(data){
    let linha = ''
    data.forEach(item => linha += '<td>' + item.value + '</td>');

    if($('table > tbody > tr > td').length === 1)//se tem apenas uma TD, é a default
        $('table > tbody').empty();

    $('table > tbody').append('<tr>' + linha + '<td><input type="button" value="X" /></td></tr>');
    $('#divListagem,#divCadastro').toggle();
}

//a2.40
$('form').submit(function(event){
    const data = $(this).serializeArray();
    
    updateTable(data);
    
    event.preventDefault();
})

//a2.41
const webApiDomain = 'http://localhost:3000'
function updateDatabase(data, callback){
    const json = {};
    data.forEach(item => json[item['name']] = item['value'])

    $.post(webApiDomain + '/clientes', json, function(result){
        alert('Cliente cadastrado com sucesso!');
        callback(data);
    })
}

//a2.42
$('form').submit(function(event){
    const data = $(this).serializeArray();
    updateDatabase(data, updateTable);
    event.preventDefault();
})

//a2.45
function loadTable(){
    const tbody = $('table > tbody');
    tbody.empty();
    $.getJSON(webApiDomain + '/clientes', function(data){
        data.forEach(item =>{
            let linha = '<td>' + item.nome + '</td><td>' + item.idade + '</td><td>' + item.uf + '</td>';
            tbody.append('<tr>' + linha + '<td><input type="button" value="X" /></td></tr>');
        })
    })
}

//a2.46
$(document).ready(function(){
    
    loadTable();

//a2.47
function loadTable(){
    const tbody = $('table > tbody');
    tbody.empty();
    $.getJSON(webApiDomain + '/clientes', function(data){
        data.forEach(item =>{
            let linha = '<td>' + item.nome + '</td><td>' + item.idade + '</td><td>' + item.uf + '</td>';
            tbody.append('<tr>' + linha + '<td><input type="button" value="X" data-id="' + item._id + '" /></td></tr>');
        })
    })
}

//a2.48
function deleteCustomer(id, callback){
    $.ajax({
        url: webApiDomain + '/clientes/' + id,
        method: 'DELETE',
        success: function(result) {
            alert('Cliente excluído com sucesso!')
            callback()
        }
    })
}

//a2.49
$('table').on('click','input[value="X"]', function(){
    if(confirm('Tem certeza que deseja excluir este cliente?')){
        const input = $(this);
        const id = input.attr('data-id');
        deleteCustomer(id, function(){
            input.closest('tr').remove();
        })
    }
})

//a2.50
$('form').submit(function(event){
    const data = $(this).serializeArray();
    updateDatabase(data, loadTable);
    $('#divListagem,#divCadastro').toggle();
    event.preventDefault();
})

