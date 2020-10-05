//8.1
<!--... código HTML qualquer ...-->
<script>
	//código Javascript vai aqui
</script>
<!-- ... mais código HTML ... ->

//8.2
<!-- ... código HTML qualquer ... -->
<script src="funcoes.js" />
<!-- ...código HTML qualquer ... -->

//8.3
function exibirMensagem(){
	alert('funcionou!');
}

//8.4
<input type="button" value="Teste" onclick="exibirMensagem()" />

//8.5
function exibirUF(uf){
	alert(uf);
}

<select onchange="exibirUF(this.value)">
    <option value="RS">Rio Grande do Sul</option>
    <option value="SC">Santa Catarina</option>
    <option value="PR">Paraná</option>
</select>

//8.6
function exibirMensagem(msg){
	alert(msg);
}

<div onmouseenter="exibirMensagem('entrou!')" onmouseleave="exibirMensagem('saiu!')">Teste</div>

//8.7
function exibirMensagem(msg){
	alert(msg);
}

<input type="text" onfocus="exibirMensagem('entrou!')" onblur="exibirMensagem('saiu!')" />

//8.8
function validarNumeros(e){
	var unicode=e.charCode? e.charCode : e.keyCode;
	if (unicode!=8){ //8 = backspace
	        if (unicode<48||unicode>57) //se não é um número
            	return false; //disable key press
    	}
}

<input type="text" onkeypress="return validarNumeros(event)" />

//8.9
<!DOCTYPE html>
<html>
  <head>
    <title>Calculadora</title>
    <meta charset="utf-8" />
  </head>
  <body>
      <table>
          <tr>
              <td colspan="6"><input type="text" id="display" value="0" disabled></td>
          </tr>
          <tr>
            <td><input type="button" value="7" /></td>
            <td><input type="button" value="8" /></td>
            <td><input type="button" value="9" /></td>
            <td><input type="button" value="*" /></td>
        </tr>
        <tr>
            <td><input type="button" value="4" /></td>
            <td><input type="button" value="5" /></td>
            <td><input type="button" value="6" /></td>
            <td><input type="button" value="-" /></td>
        </tr>
        <tr>
            <td><input type="button" value="1" /></td>
            <td><input type="button" value="2" /></td>
            <td><input type="button" value="3" /></td>
            <td><input type="button" value="+" /></td>
        </tr>
        <tr>
            <td><input type="button" value="C" /></td>
            <td><input type="button" value="0" /></td>
            <td><input type="button" value="=" /></td>
            <td><input type="button" value="/" /></td>
        </tr>
      </table>
  </body>
</html>

//8.10
<script>
    function atualizarDisplay(btn){
        const display = document.getElementById('display');
        if(display.value.length === 9) return;
        if(display.value === '0') display.value = btn.value;
        else display.value += btn.value;
    }
</script>

//8.11
<td><input type="button" value="7" onclick="atualizarDisplay(this)" /></td>

//8.12
function limparDisplay(){
    document.getElementById('display').value = '0';
}

//8.13
<td><input type="button" value="C" onclick="limparDisplay()"/></td>

//8.14
var operador = ''
var valor1 = 0
function atualizarOperacao(btn){
            const display = document.getElementById('display');
            operador = btn.value;
            valor1 = parseInt(display.value);
            display.value = '0';
}

//8.15
<td><input type="button" value="*" onclick="atualizarOperacao(this)" /></td>

//8.16
function calcularOperacao(){
    const display = document.getElementById('display');
    const valor2 = parseInt(display.value);
    valor1 = eval(valor1+operador+valor2);
    display.value = valor1;
    operador = '';
}

//8.17
<td><input type="button" value="=" onclick="calcularOperacao()" /></td>

//8.18
function manipularTeclado(){
    if(/[0-9]/.test(event.key))
        atualizarDisplay({value: event.key});
}

//8.19
<body onkeypress="manipularTeclado()">

//8.20
<script src="js/jquery.min.js"></script>

//8.21
<!DOCTYPE html>
<html>
	<head><meta charset="utf-8" /></head>
	<body>
		<input type="text" name="nome" id="txtNome" />
	</body>
</html>

//8.22
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

//8.23
<div id="divCadastro">
    <h2>Cadastro</h2>
</div>
<div id="divListagem">
    <h2>Listagem</h2>
</div>

//8.24
<div id="divCadastro">
    <h2>Cadastro</h2>
    <input type="button" id="btnListar" value="Listar">
</div>
<div id="divListagem">
    <h2>Listagem</h2>
    <input type="button" id="btnCadastrar" value="Cadastrar">
</div>

//8.25
<script src="js/jquery.min.js"></script>
<script src="js/scripts.js"></script>

//8.26
$(document).ready(function(){
    
})

//8.27
$(document).ready(function(){
    $('#divListagem').hide();
})

//8.28
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

//8.29
$(document).ready(function(){
    $('#divListagem').hide();

    $('#btnListar,#btnCadastrar').click(function(){
        $('#divListagem,#divCadastro').toggle();
    })
})

//8.30
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

//8.31
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

//8.32
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

//8.33
$('table').on('click','input[value="X"]', function(){
    if(confirm('Tem certeza que deseja excluir este cliente?'))
        $(this).closest('tr').remove();
})

//8.34
<script src="js/jquery.min.js"></script>

//8.35
$.ajax('/clientes', settings)

//8.36
var data = $('#formCadastro').serialize();
settings.data = data;

//8.37
$.getJSON('/clientes', function(jsonData){
	jsonData.each(function(key,val){
		$('#estados').append('<option>'+val+'</option>');
           });
})

element.load(url);

//8.38
$('#estados').load('/estados');

//8.39
function updateTable(data){
    let linha = ''
    data.forEach(item => linha += '<td>' + item.value + '</td>');

    if($('table > tbody > tr > td').length === 1)//se tem apenas uma TD, é a default
        $('table > tbody').empty();

    $('table > tbody').append('<tr>' + linha + '<td><input type="button" value="X" /></td></tr>');
    $('#divListagem,#divCadastro').toggle();
}

//8.40
$('form').submit(function(event){
    const data = $(this).serializeArray();
    
    updateTable(data);
    
    event.preventDefault();
})

//8.41
const webApiDomain = 'http://localhost:3000'
function updateDatabase(data, callback){
    const json = {};
    data.forEach(item => json[item['name']] = item['value'])

    $.post(webApiDomain + '/clientes', json, function(result){
        alert('Cliente cadastrado com sucesso!');
        callback(data);
    })
}

//8.42
$('form').submit(function(event){
    const data = $(this).serializeArray();
    updateDatabase(data, updateTable);
    event.preventDefault();
})

//8.43
npm install cors

//8.44
app.use(require('cors')());

//8.45
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

//8.46
$(document).ready(function(){
    
    loadTable();

//8.47
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

//8.48
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

//8.49
$('table').on('click','input[value="X"]', function(){
    if(confirm('Tem certeza que deseja excluir este cliente?')){
        const input = $(this);
        const id = input.attr('data-id');
        deleteCustomer(id, function(){
            input.closest('tr').remove();
        })
    }
})

//8.50
$('form').submit(function(event){
    const data = $(this).serializeArray();
    updateDatabase(data, loadTable);
    $('#divListagem,#divCadastro').toggle();
    event.preventDefault();
})