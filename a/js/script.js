//change style of nav when scrolled down the page

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".page-header").addClass("collapsed");
        $(".has-fixed-header").addClass("bumped");
    } else {
        $(".page-header").removeClass("collapsed");
        $(".has-fixed-header").removeClass("bumped");
    }

});