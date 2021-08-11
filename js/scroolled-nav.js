/* script que cambia el color del navbar al scrollear */

$(window).on("scroll", function(){
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
}); 

/*  script que hace aparecer el botón up al scrollear */

$(window).on("scroll", function(){
    $("#up-btn").toggleClass("show", $(this).scrollTop() > 700);
});  




