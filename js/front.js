/*global window */
/*global jQuery */
(function ($) {
    $(window).scroll(function() {
        var topOfWindow = $(window).scrollTop();
        var imagePos = $('.service').offset().top;

        function highlight(items, index) {
            index = index % items.length;
            items.eq(index).addClass('bigEntrance');
            setTimeout(function() {highlight(items, index + 1)}, 400);
        }

        if (imagePos < topOfWindow+700){
            highlight($('.srv-animated'), 0);
            $("#edit-submit").addClass('shake');
        }
    });
    $(window).load(function () {
        $(".btn-srv a.btn").mouseover(function(){
            $(".inner-box img").css({
            filter: 'none',
            "-webkit-filter": 'grayscale(0%)',
            "-webkit-transition": 'all 1.6s ease 0s',
                "-moz-transition": 'all 1.6s ease 0s',
                "-ms-transition": 'all 1.6s ease 0s',
                "-o-transition": 'all 1.6s ease 0s',
                "transition": 'all 1.6s ease 0s'
            })
        });
        $(".btn-srv a.btn").mouseout(function(){
            $(".inner-box img").removeAttr('style');
        });
        Placeholdem( document.querySelectorAll( '[placeholder]' ) );
    });
}(jQuery));;
