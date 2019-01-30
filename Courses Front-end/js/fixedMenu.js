var headerHeight = 95;
var headerIsNotVisible = 0;

$(function(){
    var element = $('.header-menu');
    var top = $(this).scrollTop();

    if(top > headerHeight){
        element.css('top', headerIsNotVisible);
    }

    $(window).scroll(function(){
        top = $(this).scrollTop();

        if (top+headerIsNotVisible < headerHeight) {
            element.css('top', (headerHeight-top));
            $(".header-menu").removeClass("darkHeader-menu")
        } else {
            element.css('top', headerIsNotVisible);
            $(".header-menu").addClass("darkHeader-menu")
        }
    });
});