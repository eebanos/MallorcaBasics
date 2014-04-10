//    $('#page').onepage_scroll({
//       sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
//       easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", 
//                                        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
//       animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
//       pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
//       updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
//       beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
//       afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
//       loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
//       keyboard: true,                  // You can activate the keyboard controls
//       responsiveFallback: false        // You can fallback to normal page scroll by defining the width of the browser in which
//                                        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever 
//                                        // the browser's width is less than 600, the fallback will kick in.
//    });
//    $(window).load(function () {});
//(function ($) {
//    $.fn.shake = function (options) {
//        // defaults
//        var settings = {
//            'shakes': 2,
//            'distance': 10,
//            'duration': 400
//        };
//        // merge options
//        if (options) {
//            $.extend(settings, options);
//        }
//        // make it so
//        var pos;
//        return this.each(function () {
//            $this = $(this);
//            // position if necessary
//            pos = $this.css('position');
//            if (!pos || pos === 'static') {
//                $this.css('position', 'relative');
//            }
//            // shake it
//            for (var x = 1; x <= settings.shakes; x++) {
//                $this.animate({ left: settings.distance * -1 }, (settings.duration / settings.shakes) / 4)
//                    .animate({ left: settings.distance }, (settings.duration / settings.shakes) / 2)
//                    .animate({ left: 0 }, (settings.duration / settings.shakes) / 4);
//            }
//        });
//    };
//        $("#myform").submit(function(event) {
//            if (!$('#login').val() || !$('#password').val()) {
//                if (!$("#myform").hasClass("shake")) {
//                     $("#myform").addClass("shake");
//                } else {
//                    $('#myform').css('animation-name', 'none');
//                    $('#myform').css('-moz-animation-name', 'none');
//                    $('#myform').css('-webkit-animation-name', 'none');
//
//            setTimeout(function() {
//                $('#myform').css('-webkit-animation-name', 'shake');
//                    }, 0);
//                }
//                return false;
//            }
//        });


