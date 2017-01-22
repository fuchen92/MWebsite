$(document).ready(function () {
    function switchSiderbar (targetEle, cancelEle, classType) {
        $(targetEle).addClass(classType);
        $(cancelEle).bind("click", function () {
            $(targetEle).removeClass(classType);
        })
    }
    // 汉堡菜单和搜索的侧边栏切换
    $(".hamburger-menu").on("click", function () {
        switchSiderbar(".siderbar-category", ".close-container", "siderbar-category-active");
    });
    $(".header-search").on("click", function () {
        switchSiderbar(".siderbar-search", ".search-arrow, .search-cancel", "siderbar-search-active");
    });

    // $(document).on("touchstart", function (event) {
    //     var event = window.event || event;
    //     var initX = event.targetTouches[0].clientX,
    //         initY = event.targetTouches[0].clientY;
    //     $(document).on("touchmove", function (event) {
    //         var event = window.event || event;
    //         var moveX = event.targetTouches[0].clientX,
    //             moveY = event.targetTouches[0].clientY;

    //         var navs = $("nav, .footer-nav-container"),
    //             footer = $(".footer");
    //         var x = moveX - initX,
    //             y = moveY - initY;
    //         if (y > 0) {
    //             navs.css("display", "block");
    //         } else {
    //             footer.css("margin-bottom", "0");
    //             navs.css("display", "none");
    //             console.log(footer)
    //         }
    //     })
    // });

    $(".nav-menu-item").on("click", function () {
        switchMenu($(this), "nav-active-menu");
    });

    $(".footer-nav-item").on("click", function () {
        switchMenu($(this), "footer-nav-active");
    })
    function switchMenu (targetEle, classType) {
        targetEle.addClass(classType).siblings().removeClass(classType);
    }
});