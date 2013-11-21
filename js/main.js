/* JS */
(function(){

    "use strict";

    $(document).ready(function(){
        initSmoothScroll();
        initSVG();
    });

    function initSmoothScroll() {
        $(".arrow a[href^='#']").on('click', function(e) {
           e.preventDefault();
           $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 300);
        });
    }

    function initSVG() {
        function supportsSVG() {
            return !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;
        }
        if (!supportsSVG()) {
            var imgs = document.getElementsByTagName('img');
            var dotSVG = /.*\.svg$/;
            for (var i = 0; i != imgs.length; ++i) {
                if(imgs[i].src.match(dotSVG)) {
                    imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
                }
            }
        }
    }

})();