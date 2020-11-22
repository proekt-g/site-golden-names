document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        $(window).width() <= 1200 && (
            $(".broadcast").prepend($(".broadcast__main-video")),
            $('.broadcast__main-team').appendTo($('.broadcast'))
        )
    }
}
$(window).on("load", function () {
    // variables
    // /variables
    // ----------------------------------------------
    // universal function
    function scrollEmulation() {
        let documentWidth = parseInt(document.documentElement.clientWidth)
        let windowsWidth = parseInt(window.innerWidth)
        let scrollbarWidth = windowsWidth - documentWidth
        $("body").css({ "padding-right": `${scrollbarWidth}px` })
        $("body").toggleClass("block")
    }
    function closeModal() {
        scrollEmulation()
        $(".modal-overlay").removeClass("modal-overlay--active")
        $(".modal").removeClass("modal--active")
    }
    //  /universal function
    // ----------------------------------------------
    // event
    $(".menu__burger").on("click", () => {
        $(".placeholder-picture").toggleClass("placeholder-picture--hidden")
        $(".menu").toggleClass("menu--open")
        $("body").toggleClass("block")
    })
    $(".concept__button").on("click", (e) => {
        scrollEmulation();
        $(".modal-overlay").toggleClass(`modal-overlay--active`);
        $(`.modal`).toggleClass(`modal--active`)
    })
    $(".modal__close").on("click", closeModal)
    $(".modal-overlay").on("click", (e) => {
        if ($(e.target).hasClass("modal-overlay--active")) closeModal()
    })
    $(".program__card-read").on("click", toggleMoreTextCard)
    $(".program__card-note-close").on("click", toggleMoreTextCard)
    $(".program__card-speaker-avatar").on("focus", toggleModalInfoAvatar)
    $(".program__card-moder-avatar").on("focus", toggleModalInfoAvatar)
    $(".program__card-speaker-avatar").on("blur", toggleModalInfoAvatar)
    $(".program__card-moder-avatar").on("blur", toggleModalInfoAvatar)
    $(window).on("scroll", () => {
        pageYOffset
            ? ($(".header").addClass("header--scroll"),
                $(".menu__desktop").addClass("menu__desktop--scroll"))
            : ($(".header").removeClass("header--scroll"),
                $(".menu__desktop").removeClass("menu__desktop--scroll"))
    })
    $('a[href^="#"]').on("click", function (event) {
        if (String(this).slice(-1) !== "#") {
            event.preventDefault()
            let sc = $(this).attr("href"),
                dn = $(sc).offset().top
            $("html, body").animate({ scrollTop: dn - 60 }, 1000)
        }
    })
    // /event
    // ----------------------------------------------
    // unique function
    function toggleMoreTextCard() {
        $(this)
            .parents(".program__card")
            .children(".program__card-note")
            .toggleClass("program__card-note--active")
    }
    function toggleModalInfoAvatar() {
        $(this)
            .parents(".program__card")
            .find(".program__card-modal-avatar-img")
            .attr("src", $(this).find(".program__card-img").attr("src"))
        $(this)
            .parents(".program__card")
            .find(".program__card-modal-name")
            .text($(this).data("avatarName"))
        $(this)
            .parents(".program__card")
            .find(".program__card-modal-text")
            .text($(this).data("avatarInfo"))
        $(this)
            .parents(".program__card")
            .find(".program__card-modal")
            .toggleClass("program__card-modal--active")
        $(this)
            .find(".program__card-img")
            .toggleClass("program__card-img--hidden")
    }
    // /unique function
    // ----------------------------------------------
    // Page load
    if ($(window).width() <= 900)
        $(".header__button").appendTo(".menu__desktop")
    if ($(window).width() >= 900) {
        OverlayScrollbars(
            document.querySelectorAll(".program__card-note-text"),
            {}
        )
    }
    pageYOffset
        ? ($(".header").addClass("header--scroll"),
            $(".menu__desktop").addClass("menu__desktop--scroll"))
        : ($(".header").removeClass("header--scroll"),
            $(".menu__desktop").removeClass("menu__desktop--scroll"))


    let sliderWidth = 0;
    $('.swiper-slide').each((index, item) => {
        sliderWidth += $(item).width();
        sliderWidth += parseInt($(item).css('margin-right'))
    })
    $('.swiper-container').width() <= sliderWidth ? new Swiper('.swiper-container', {
        spaceBetween: 30,
        slidesPerView: 'auto',
        grabCursor: true,
        navigation: {
            nextEl: '.partners__slider-arrow--right',
            prevEl: '.partners__slider-arrow--left',
        },
    }) : $('.swiper-slide').each((index, item) => {
        $(item).css('margin-right', '30px')
    })
    $('.broadcast__main-video').attr(
        "src",
        $('.broadcast__main-video').attr("src") + "?autoplay=1"
    )
    // /Page load
});
