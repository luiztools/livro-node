function updateTable(data){
    let linha = '';
    data.forEach(item => linha += '<td>' + item.value + '</td>');

    if($('table > tbody > tr > td').length === 1)//se tem apenas uma TD, é a default
        $('table > tbody').empty()

    $('table > tbody').append('<tr>' + linha + '<td><input type="button" value="X" /></td></tr>')
    $('#divListagem,#divCadastro').toggle()
}

const webApiDomain = 'http://localhost:3000'
function updateDatabase(data, callback){
    const json = {}
    data.forEach(item => json[item['name']] = item['value'])

    $.post(webApiDomain + '/clientes', json, function(result){
        alert('Cliente cadastrado com sucesso!')
        callback(data)
    })
}

function loadTable(){
    const tbody = $('table > tbody')
    tbody.empty()
    $.getJSON(webApiDomain + '/clientes', function(data){
        data.forEach(item =>{
            let linha = '<td>' + item.nome + '</td><td>' + item.idade + '</td><td>' + item.uf + '</td>'
            tbody.append('<tr>' + linha + '<td><input type="button" value="X" data-id="' + item._id + '" /></td></tr>')
        })
    })
}

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

$(document).ready(function(){
    loadTable();
    $('#divListagem').hide()

    $('#btnListar,#btnCadastrar').click(function(){
        $('#divListagem,#divCadastro').toggle()
    })

    $('form').submit(function(event){
        const data = $(this).serializeArray()
        updateDatabase(data, loadTable)
        $('#divListagem,#divCadastro').toggle()
        event.preventDefault()
    })

    $('table').on('click','input[value="X"]', function(){
        if(confirm('Tem certeza que deseja excluir este cliente?')){
            const input = $(this)
            const id = input.attr('data-id')
            deleteCustomer(id, function(){
                input.closest('tr').remove()
            })
        }
    })
})