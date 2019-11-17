(function () {
    var elem;
    var elemHeight;
    var speed = 0.8;

    function applyHeroParallax() {
        elem = document.querySelector('.parallax');
        if (elem) elemHeight = elem.clientHeight;
    }

    function scrollFunction() {
        if(!elem) return;
        var newHeight = elemHeight - (speed * window.pageYOffset);
        elem.setAttribute('style', 'max-height: ' + newHeight + 'px');
    }

    document.addEventListener("scroll", scrollFunction);
    document.addEventListener('DOMContentLoaded', applyHeroParallax, false)

})();
