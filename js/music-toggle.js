 $(document).ready(function() {
     console.log('loaded');
     $(".menu-button").click(function() {
         alert("menu");
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
     // songlist
     var playgrid = 1;
     var prevplaylist = 0;
     var playlist = $(".playlist-grid li");
     var list = playlist.length / 2;
     console.log(list);
     $("audio").bind("ended", function() {
         $(".playlist-grid li:nth-child(" + playgrid + ") img").removeClass("shadow");
         console.log('Ended!');
         if (playgrid == list) {
             playgrid = 1;
             musicdetail(playgrid);
             listplay(playgrid);
             $(".playlist-grid li:nth-child(" + playgrid + ") img").addClass("shadow");
             $('audio').attr('src', $(".playlist-grid li:nth-child(" + playgrid + ") img").attr("data-src"));
             console.log("in if condition : " + playgrid);
             $('audio').trigger('play');
             //$(".music-title").html(songUrls[pos]);
             for (var j = list; j >= 1; j--) {
                 $(".flipster__button--prev").trigger("click");
             }
         } else {
             playgrid++;
             musicdetail(playgrid);
             listplay(playgrid);
             $(".flipster__button--next").trigger("click");
             console.log("Next Songs and index : " + playgrid);
             $(".playlist-grid li:nth-child(" + playgrid + ") img").addClass("shadow");
             $('audio').attr('src', $(".playlist-grid li:nth-child(" + playgrid + ") img").attr("data-src"));
             $('audio').trigger('play');
             //$(".music-title").html(songUrls[pos]);
         }
     });
     $('.thumb').click(function() {
         console.log("Clicked on thumb");
         var src = $(this).attr('data-src');
         var stop = $(this).text();
         // alert(stop);
         console.log("clicked" + src);
         $(".playlist-grid li:nth-child(" + playgrid + ") img").removeClass("shadow");
         for (var i = 1; i <= list; i++) {
             console.log("entered in for");
             // $(".flipster__button--next").trigger("click");
             console.log($(".playlist-grid li:nth-child(" + i + ") img").attr("data-src"));
             if (src === $(".playlist-grid li:nth-child(" + i + ") img").attr("data-src")) {
                 playgrid = i;
                 musicdetail(i);
                 if (stop === "Stop") {
                     console.log("stop");
                     listplaynone(i);
                     $('audio').trigger('pause');
                     $('audio').prop("currentTime",0);

                 } else {
                     console.log("entered");
                     listplay(i);
                     $(".playlist-grid li:nth-child(" + playgrid + ") img").addClass("shadow");
                     $('audio').attr('src', src);
                     $('audio').trigger('play');
                 }
             }
         }
     });
     $("body").on('click', '.grid-tab', function(args) {
         console.log('args', args)
         $('#audio-tag').removeClass("audio-center");
         $('video').removeClass("video-center");
         $(".grid").show();
         $(".slider").hide();
         $(".list").hide();
         $("#musicdesc").show();
         $('.grid-tab').addClass('active');
         $('.gallery-tab').removeClass('active');
         $('.list-tab').removeClass('active');


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
         $('#audio-tag').addClass("audio-center");
         $('video').addClass("video-center");
         $('.gallery-tab').addClass('active');
         $('.grid-tab').removeClass('active');
         $('.list-tab').removeClass('active');

         flipplay(playgrid);
     });

     function musicdetail(a) {
         var srcname = $(".playlist-grid li:nth-child(" + a + ") img").attr("src");
         $(".music-thumb img").attr("src", srcname);
         var name = srcname.substring(srcname.lastIndexOf('/') + 1);
         console.log(name);
         $(".Track").next().text(name);
     }

     function listplaynone(a){
        var play = a + 1;
         for (var i = 2; i <= 15; i++) {
             $(' tr:nth-child(' + i + ')').css({ "border": "none" })
             $(' tr:nth-child(' + i + ') td:nth-child(2)').text("Play");
         }

     }

     function listplay(a) {
         var play = a + 1;
         for (var i = 2; i <= 15; i++) {
             $(' tr:nth-child(' + i + ')').css({ "border": "none" })
             $(' tr:nth-child(' + i + ') td:nth-child(2)').text("Play");
         }
         $(' tr:nth-child(' + play + ')').css({ "border": "1px solid white" })
         $(' tr:nth-child(' + play + ') td:nth-child(2)').text("Stop");
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
     $(".list-tab").click(function() {
         $('#audio-tag').removeClass("audio-center");
         $(".grid").hide("slow");
         $(".slider").hide("slow");
         $(".list").show("slow");
         $("#musicdesc").hide();
         $('.list-tab').addClass('active');
         $('.grid-tab').removeClass('active');
         $('.gallery-tab').removeClass('active');

     });
 });
