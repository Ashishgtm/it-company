$(document).ready(function() {
    dropdownMenuWidth();
    $('body').css({'margin-top':$('.navbar-fixed-top').height()});
});
$(window).resize(function() {
    dropdownMenuWidth();
})
function dropdownMenuWidth() {
    if($(window).width()>768) $('.dropdown-menu').width($(window).width()*0.5);
    else $('.dropdown-menu').width($(window).width()*0.9);
}
