var ts = $(this),
    bd = $('body'),
    close_img = "icon_close.png",
    imgpath = "assets/images/",
    class1, img1, flag;

function toggler(target) {
    bd.toggleClass(class1);
    $(target).toggleClass('active');
}

function changeimg(target) {
    var src = $(target).find('img').attr('src');
    var newsrc = (src == imgpath + img1) ? imgpath + close_img : imgpath + img1;
    $(target).find('img').attr('src', newsrc);
}

$(document).ready(function() {
    $('.header-search-btn').click(function() {
        $('.header-btns.active').click();
        img1 = "icon_search.png", class1 = "search-menu-open";
        toggler(this);
        changeimg(this);
    });

    $('.my-accnt-btn').click(function() {
        $('.header-btns.active').click();
        img1 = "icon_my_account.png", class1 = "account-menu-open";
        toggler(this);
        changeimg(this);
    });

    $('.menu-toggle').click(function() {
        $('.header-btns.active').click();
        class1 = "menu-open";
        toggler(this);
        $(".main-menu .nav-item").removeClass("submenu-open");
    });

    $('.has-child .nav-link').click(function() {
        $(this).parent().addClass("submenu-open");
    });

    $('.submenu-title button').click(function() {
        $(this).parent().parent().parent().removeClass("submenu-open");
    });
});