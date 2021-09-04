$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover()
    $('.carousel').carousel({
        interval: 2000
    })
    $('#modalContactoConsole').on('show.bs.modal', function(e) {
        console.log('funcionaaaaa');
    });
});