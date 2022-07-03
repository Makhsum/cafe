$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header-bottom').toggleClass('active');
        $('body').toggleClass('lock')
    });
});