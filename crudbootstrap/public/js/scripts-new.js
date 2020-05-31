$(document).ready(function(){
    $('.alert-danger').hide()

    $('form').submit(function (event) {
    
        if ($('#nome').val() === '') {
            $('.alert-danger').show(1000, function () {
                setTimeout(function () { $('.alert-danger').hide(1000) }, 2000)
            })
            event.preventDefault()
        }
    })
})