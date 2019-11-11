

$(function () {

    "use strict";

    // vars 
    var winHeight = $(window).height()

    // Trigger niceScroll
    $('html').niceScroll({
        cursorcolor: "#35CE8D", // change cursor color in hex
        cursoropacitymin: .5, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
        cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
        cursorwidth: "10px", // cursor width in pixel (you can also write "5px")
        cursorborder: "1px solid #CCC", // css definition for cursor border
        cursorborderradius: "2px", // border radius in pixel for cursor
    });


    //change haader height 
    $('.header').height(winHeight);

    // Scroll to Freatures 
    $('.header .arrow i').on("click", function () {

        $('html, body').animate({
            scrollTop: $('#feature').offset().top
        }, 1000)
    })

    // show more items 
    $('.show-more').on("click", function () {

        $('.hidden').fadeIn();
    });

    // Check Clients 
    var lfetArrow = $('.fa-chevron-left');
    var rightArrow = $('.fa-chevron-right');
    function checkClients() {

        if ($('.client:first').hasClass('active')) {

            lfetArrow.fadeOut();

        } else {

            lfetArrow.fadeIn();
        }

        /*  *********   */

        if ($('.client:last').hasClass('active')) {

            rightArrow.fadeOut()

        } else {

            rightArrow.fadeIn();
        }

    }



    $('.testim i').on("click", function () {

        if ($(this).hasClass('right')) {

            $('.testim .active').fadeOut(100, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClients();
            });

        } else {

            $('.testim .active').fadeOut(100, function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClients();
            });

        }
    });
        // Hie Us scrollDown 
        $('.btn .hire').on("click", function () {

        $('html, body').animate({
            scrollTop: $('#t-team').offset().top
        }, 1000)
    });

});
