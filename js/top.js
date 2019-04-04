/*
This project is licensed under the MIT License - see the LICENSE.md file for details
https://github.com/skino0/fully-scroll-animated/blob/master/license.md
*/


//On page refresh top
/*
$(document).ready(function(){
    $(this).scrollTop(0);
});*/

//Go to top 
$("#top").click(function() {
    $('html,body').animate({
        scrollTop: $("#con1").offset().top},
        'slow');
});

//go to top visible

$(document).on('scroll', function(){
    if ($(window).scrollTop() > 100){
        $("#top").addClass('activated');

    } else {
        $("#top").removeClass('activated');
    }
});