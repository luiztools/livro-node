$(document).ready(function(){
    $('#divListagem').hide();

    $('#btnListar,#btnCadastrar').click(function(){
        $('#divListagem,#divCadastro').toggle();
    })

    $('form').submit(function(event){
        const data = $(this).serializeArray();
        
        let linha = ''
        data.forEach(item => linha += '<td>' + item.value + '</td>');

        if($('table > tbody > tr > td').length === 1)//se tem apenas uma TD, é a default
            $('table > tbody').empty();

        $('table > tbody').append('<tr>' + linha + '<td><input type="button" value="X" /></td></tr>')
        $('#divListagem,#divCadastro').toggle();
        event.preventDefault();
    })

    $('table').on('click','input[value="X"]', function(){
        if(confirm('Tem certeza que deseja excluir este cliente?'))
           $(this).closest('tr').remove();
     })
})