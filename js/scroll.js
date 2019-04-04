/*
This project is licensed under the MIT License - see the LICENSE.md file for details
https://github.com/skino0/fully-scroll-animated/blob/master/license.md
*/

//trigger containers & changes to nav per container

init = 0;

$(window).scroll(function() 
{ 
    screenheight = $(window).height();
    scrollposition = $(window).scrollTop()+screenheight;
    con1height = $("#con1").height();
    con1position = $("#con1").position().top;
    if ((scrollposition>con1position))
        {
            //add class to current container
            $('.nav_item:nth-child(1)').addClass('active');
            //remove others
            $('.nav_item:nth-child(2)').removeClass('active');
            $('.nav_item:nth-child(3)').removeClass('active');
            $('.nav_item:nth-child(4)').removeClass('active');
        } else {
            $('.nav_item:nth-child(1)').removeClass('active');
        }
});

//CON2
$(window).scroll(function() 
{ 
    screenheight = $(window).height();
    scrollposition = $(window).scrollTop()+screenheight;
    con2height = $("#con2").height();
    con2position = $("#con2").position().top;
    if ((scrollposition>con2position))
        {
            //add class to current container
            $('.nav_item:nth-child(2)').addClass('active');
            //remove others
            $('.nav_item:nth-child(1)').removeClass('active');
            $('.nav_item:nth-child(3)').removeClass('active');
            $('.nav_item:nth-child(4)').removeClass('active');
        } else {
            $('.nav_item:nth-child(2)').removeClass('active');
        }
});
//CON3
$(window).scroll(function() 
{ 
    screenheight = $(window).height();
    scrollposition = $(window).scrollTop()+screenheight;
    con3height = $("#con3").height();
    con3position = $("#con3").position().top;
    if ((scrollposition>con3position))
        {
            //add class to current container
            $('.nav_item:nth-child(3)').addClass('active');
            //remove others
            $('.nav_item:nth-child(1)').removeClass('active');
            $('.nav_item:nth-child(2)').removeClass('active');
            $('.nav_item:nth-child(4)').removeClass('active');
        } else {
            $('.nav_item:nth-child(3)').removeClass('active');
        }
});
//CON4
$(window).scroll(function() 
{ 
    screenheight = $(window).height();
    scrollposition = $(window).scrollTop()+screenheight;
    con4height = $("#con4").height();
    con4position = $("#con4").position().top;
    if ((scrollposition>con4position))
        {
            //add class to current container
            $('.nav_item:nth-child(4)').addClass('active');
            //remove others
            $('.nav_item:nth-child(1)').removeClass('active');
            $('.nav_item:nth-child(2)').removeClass('active');
            $('.nav_item:nth-child(3)').removeClass('active');
        } else {
            $('.nav_item:nth-child(4)').removeClass('active');
        }
});

//nav item active on moing to container by click

//go home
$(".nav_item:nth-child(1)").click(function() {
    $('html,body').animate({
        scrollTop: $("#con1").offset().top},
        'slow');
});
//go con2
$(".nav_item:nth-child(2)").click(function() {
    $('html,body').animate({
        scrollTop: $("#con2").offset().top},
        'slow');
});
//go con3
$(".nav_item:nth-child(3)").click(function() {
    $('html,body').animate({
        scrollTop: $("#con3").offset().top},
        'slow');
});
//go con4
$(".nav_item:nth-child(4)").click(function() {
    $('html,body').animate({
        scrollTop: $("#con4").offset().top},
        'slow');
});




