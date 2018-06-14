window.onscroll = function () {
    var el = document.getElementsByClassName('header')[0];
    var className = 'small';
    if (el.classList) {
        if (window.scrollY > 10)
            el.classList.add(className);
        else
            el.classList.remove(className);
    }
};

$(document).ready(function () {
    $('.menu_icon').click(function () {
        $('.small-menu').slideToggle(50);
    });

    $(window).scroll(function (event) {
        $('.small-menu').slideUp(200);
    });
});