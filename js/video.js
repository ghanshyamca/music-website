 $(document).ready(function() {
     console.log('loaded');
     $(".menu-button").click(function() {
        
         $(".nav-res ul>li").slideToggle("slow");
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
     // Videolist
     var playgrid = 1;
     var prevplaylist = 0;
     var playlist = $(".playlist-grid li");
     var list = playlist.length / 2;
     $('video').attr('src', $(".playlist-grid li:nth-child(" + playgrid + ") img").attr("data-src"));
     $('video').trigger('play');
     console.log(list);
     $()
     $("video").bind("ended", function() {
         $(".playlist-grid li:nth-child(" + playgrid + ") img").removeClass("shadow");
         console.log('Ended!');
         if (playgrid == list) {
             playgrid = 1;
             musicdetail(playgrid);
             $(".playlist-grid li:nth-child(" + playgrid + ") img").addClass("shadow");
             $('video').attr('src', $(".playlist-grid li:nth-child(" + playgrid + ") img").attr("data-src"));
             console.log("in if condition : " + playgrid);
             $('video').trigger('play');
             for (var j = list; j >= 1; j--) {
                 $(".flipster__button--prev").trigger("click");
             }
         } else {
             playgrid++;
             musicdetail(playgrid);
             // listplay(playgrid);
             $(".flipster__button--next").trigger("click");
             console.log("Next Songs and index : " + playgrid);
             $(".playlist-grid li:nth-child(" + playgrid + ") img").addClass("shadow");
             $('video').attr('src', $(".playlist-grid li:nth-child(" + playgrid + ") img").attr("data-src"));
             $('video').trigger('play');
         }
     });
     $('.thumb').click(function() {
         console.log("Clicked on thumb");
         var src = $(this).attr('data-src');
         console.log("clicked" + src);
         $(".playlist-grid li:nth-child(" + playgrid + ") img").removeClass("shadow");
         for (var i = 1; i <= list; i++) {
             console.log("entered in for");
             console.log($(".playlist-grid li:nth-child(" + i + ") img").attr("data-src"));
             if (src === $(".playlist-grid li:nth-child(" + i + ") img").attr("data-src")) {
                 playgrid = i;
                 musicdetail(i);
                 console.log("entered");
                 $(".playlist-grid li:nth-child(" + playgrid + ") img").addClass("shadow");
                 $('video').attr('src', src);
                 $('video').trigger('play');
             }
         }
     });
     $("body").on('click', '.grid-tab', function(args) {
         console.log('args', args)
             // $('#audio-tag').removeClass("audio-center");
         $('video').removeClass("video-center");
         $(".grid").show();
         $(".slider").hide();
         $(".list").hide();
         $("#musicdesc").show();
         $('.grid-tab').addClass('active');
         $('.gallery-tab').removeClass('active');
     });
     $('body').on('click', '.gallery-tab', function(argument) {
         console.log('entered');
         $(".slider").show();
         $(".grid").hide();
         $(".list").hide();
         $("#musicdesc").hide();
         /*Change this to .toggle*/
         var carousel = $("#carousel").flipster({
             style: 'carousel',
             spacing: -0.5,
             nav: true,
             async: true,
             buttons: true,
         });
         $('video').addClass("video-center");
          $('.gallery-tab').addClass('active');
         $('.grid-tab').removeClass('active');
         flipplay(playgrid);
     });

     function musicdetail(a) {
         var srcname = $(".playlist-grid li:nth-child(" + a + ") img").attr("src");
         $(".music-thumb img").attr("src", srcname);
         var name = srcname.substring(srcname.lastIndexOf('/') + 1);
         console.log(name);
         $(".Track").next().text(name);
     }

     function flipplay(a) {
         var visit = Math.floor(list / 2) + 1;
         console.log(visit);

         if (prevplaylist === 0) {
             console.log("outer if ");

             if (a > visit) {
                 for (var j = visit; j < a; j++) {
                     $(".flipster__button--next").trigger("click");
                 }
             } else if (a < visit) {
                 for (var j = visit; j > a; j--) {
                     $(".flipster__button--prev").trigger("click");
                 }
             }
             prevplaylist = a;
         } else {
             if (prevplaylist > a) {
                 for (var j = a; j < prevplaylist; j++) {
                     $(".flipster__button--prev").trigger("click");
                 }
             } else if (prevplaylist < a) {
                 for (var j = a; j > prevplaylist; j--) {
                     $(".flipster__button--next").trigger("click");
                 }
             }
             prevplaylist = a;
         }
     }
 });
