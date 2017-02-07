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
        $("#searchInput").focus();
    });

    var navMenu = new Swiper(".nav-menu-list", {
        spaceBetween: 10,
        slidesPerView: "auto",
        freeMode: true
    });

    
    var carousel1 = new Swiper(".carousel-one", {
        spaceBetween: 20,
        // width: "auto",
        slidesPerView: "1.6",
        onSlideChangeEnd: function(swiper){
            var currentIndex = swiper.activeIndex;
            var carouselItem = $(".carousel-one .carousel-item")
            // // console.log(currentIndex) //切换结束时，告诉我现在是第几个slide
            if (currentIndex >= carouselItem.length - 2 ) {
                console.log("到底了")
            }
            // console.log(swiper);
            // if (swiper.isEnd) {
            //     console.log("已经到最后了")
            // }
        }
    });

    // $(".news-category-title").on("click", function () {
    //     console.log(carousel.activeIndex)
    // });
    // var swiperWrapper = $(".swiper-wrapper");
    // var moveWidth = $(".carousel-item").width() + 15;
    // var num = 0;
    // var initX = 0;
    // $(".carousel").on("touchstart", function (event) {
    //     var event = window.event || event;
    //     event.stopPropagation();
    //     initX = event.touches[0].pageX;
    //     num++;
    // });

    // $(".carousel").on("touchmove", function (event) {
    //     console.log(num)
    //     var event = window.event || event;
    //     event.preventDefault();
    //     var moveX = event.touches[0].pageX;
    //     var x = moveX - initX;
    //     if (x < 0) {
    //         console.log(num)
    //         swiperWrapper.animate({
    //             "left": -moveWidth * num
    //         }, 200)
    //     }
    // });
    // $(".carousel").on("touchend", function (event) {
    //     var event = window.event || event;
    //     // alert(111)
    // });

    // $(document).on("touchstart", function (event) {
    //     var event = window.event || event;
    //     var initX = event.touches[0].clientX,
    //         initY = event.touches[0].clientY;
    //     $(document).on("touchmove", function (event) {
    //         var event = window.event || event;
    //         var moveX = event.touches[0].clientX,
    //             moveY = event.touches[0].clientY;

    //         var navs = $("nav, .footer-nav-container"),
    //             footer = $(".footer");
    //         var x = moveX - initX,
    //             y = moveY - initY;
    //         if (y > 0) {
    //             navs.css("display", "block");
    //         } else {
    //             footer.css("margin-bottom", "0");
    //             navs.css("display", "none");
    //         }
    //     })
    // });

    var subscribeInput = $(".subscribe-input"),
        tipsContainer = $(".tips-container");
    $("#subscribeBtn").on("click", function () {
        if (subscribeInput.val() == "") {
            subscribeInput.focus();
            tipsContainer.text("请输入您的邮箱地址").addClass("tips-container-active");
            return false;
        } else if (!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test( subscribeInput.val() )) {
            subscribeInput.focus();
            tipsContainer.text("您的邮箱格式不正确，请检查").addClass("tips-container-active");
        }
    });
    subscribeInput.on("blur", function () {
        tipsContainer.removeClass("tips-container-active");
    });

    $(".nav-menu-item").on("click", function () {
        switchMenu($(this), "nav-active-menu");
    });

    $(".footer-nav-item").on("click", function () {
        switchMenu($(this), "footer-nav-active");
    })
    function switchMenu (targetEle, classType) {
        targetEle.addClass(classType).siblings().removeClass(classType);
    }
})