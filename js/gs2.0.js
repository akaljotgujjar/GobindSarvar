$(document).ready(function (){
    $("#home2").click(function (){
        $('html, body').animate({
          scrollTop: $("#home1").offset().top
        }, 500);
    });
    $("#events2").click(function (){
        $('html, body').animate({
            scrollTop: $("#events1").offset().top
        }, 500);
    });
    $("#courses2").click(function (){
        $('html, body').animate({
          scrollTop: $("#courses1").offset().top
        }, 500);
    });
    $("#schoolinfo2").click(function (){
        $('html, body').animate({
          scrollTop: $("#schoolinfo1").offset().top
        }, 500);
    });
    $("#contact2").click(function (){
        $('html, body').animate({
          scrollTop: $("#contact1").offset().top
        }, 500);
    });
    $("#gallery2").click(function (){
        $('html, body').animate({
          scrollTop: $("#gallery1").offset().top
        }, 500);
    });
});