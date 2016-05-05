$(document).ready(function() {

    $(".nav-res .menu-button").click(function() {
        $(".nav-res ul>li").slideToggle("slow");
        $("input").focus();
    });

    $(window).resize(function() {
        var winwidth = $(window).innerWidth();
       // console.log(winwidth);
        if (winwidth === 972) {

            location.reload();
        }
        if (winwidth === 1583) {

            location.reload();
        }

    });
    $('.thumb').click(function() {

        var src = $(this).attr('src');
        var psrc = $(this).next().text();

        $('#lightbox').html('<img src="' + src + '"/><p class="flex-caption">' + psrc + '</p>').fadeIn("slow");
        $('.close').fadeIn();
        $('#outerbox').addClass('fade-background');
        $('#outerbox').css({
            'display': 'block'
        });
        // alert("entering");
    });
    $('.close').click(function() {
        // $("#lightbox").css("display","none");
        $('#outerbox').fadeOut("slow");
        $('#outerbox').removeClass('fade-background');
    });
    $(".grid-tab").click(function() {
        $(".grid").show("slow");
        $(".slider").hide("slow");
        $('.grid-tab').addClass('active');
        $('.gallery-tab').removeClass('active');

    });
    $(".gallery-tab").click(function() {
        $(".grid").hide("slow");
        $(".slider").show();
        $('.gallery-tab').addClass('active');
        $('.grid-tab').removeClass('active');

        // debugger;
        $('#carousel').flexslider({
            itemWidth: 100,
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemMargin: 5,
            asNavFor: '#slider'
        });
        $('#slider').flexslider({
            controlNav: false,
            maxItems: 1,
            animationLoop: false,
            slideshow: false,
            sync: "#carousel"
        });
    });

    //accordion

});
