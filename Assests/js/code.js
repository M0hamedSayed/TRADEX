import './form.js'
import './image-preloader.js'
import './sweetalert.js'
import './../css/all.min.css'
import '../fonts/AbrilFatface-Regular.ttf'
import '../fonts/Anton-Regular.ttf'
import '../fonts/Cabin-VariableFont_wdth,wght.ttf'
import '../fonts/Lobster-Regular.ttf'

import '../images/abt-3.jpg'
import '../images/bg1-360x260.jpg'
import '../images/bg3-360x260.jpg'
import '../images/computer-472016_1920-360x380.jpg'
import '../images/ecommerce-cover-2.jpg'
import '../images/gallery2-1-360x260.png'
import '../images/office-1209640_1920-1-360x380.jpg'
import '../images/port2-360x380.jpg'
import '../images/port2-370x390.jpg'
import '../images/port2-5-360x380.jpg'
import '../images/port7-360x380.jpg'
import '../images/preloader.png'
import '../images/service-bg.jpg'
import '../images/slider1.jpg'
import '../images/slider2.jpg'
import '../images/slider3.jpg'
import '../images/suit-869380_1920-360x380.jpg'
import '../images/team1.png'
import '../images/team2.png'
import '../images/team3.png'
import '../images/team4.png'
import '../images/team5.png'
import '../images/team6.png'
import '../images/testi-avtar-1.jpg'
import '../images/testi-avtar-2.jpg'
import '../images/testi-avtar-3.jpg'
import '../images/testi-avtar-4.jpg'
import '../images/testi-avtar-5.jpg'
import '../images/Trade-X-Logo.png'

// import '../../form.html'
$(window).on('load', function () {
    main(); var update = 0; var imagesSrc = ["./Assests/images/abt-3.jpg", "./Assests/images/computer-472016_1920-360x380.jpg", "./Assests/images/ecommerce-cover-2.jpg", "./Assests/images/office-1209640_1920-1-360x380.jpg", "./Assests/images/port2-5-360x380.jpg", "./Assests/images/port2-370x390.jpg", "./Assests/images/service-bg.jpg", "./Assests/images/slider1.jpg", "./Assests/images/slider3.jpg", "./Assests/images/suit-869380_1920-360x380.jpg", "./Assests/images/bg1-360x260.jpg", "./Assests/images/testi-avtar-1.jpg", "./Assests/images/testi-avtar-2.jpg", "./Assests/images/testi-avtar-3.jpg", "./Assests/images/testi-avtar-4.jpg", "./Assests/images/testi-avtar-5.jpg", "./Assests/images/bg3-360x260.jpg", "./Assests/images/team1.png", "./Assests/images/team2.png", "./Assests/images/team3.png", "./Assests/images/team4.png", "./Assests/images/team5.png", "./Assests/images/team6.png", "./Assests/images/gallery2-1-360x260.png"]
    function preloadImage(no) { new ImagePreloader(imagesSrc[no], function () { if (imagesSrc.length === update) { $('.preloader').delay(2000).fadeOut('slow', function () { $('.body_content').fadeIn('slow'); setInterval(mousebox, 100); AOS.init({ duration: 800, }); $('.img_container').not('.slick-initialized').slick({ slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000, initialSlide: 0, arrows: false, dots: true, pauseOnHover: true }); $('.tesi').not('.slick-initialized').slick({ slidesToShow: 2, slidesToScroll: 1, autoplay: true, autoplaySpeed: 5000, initialSlide: 0, arrows: true, dots: false, pauseOnHover: true, responsive: [{ breakpoint: 993, settings: { slidesToShow: 1 } }] }); }); } }); }
    for (var i = 0; i < imagesSrc.length; i++) { update++; preloadImage(i); }
    $('.img_container').on('beforeChange', function (event, slick, currentSlide, nextSlide) { let currentEle = "div[data-slick-index='" + currentSlide + "'] .card-img-overlay"; let nextEle = "div[data-slick-index='" + nextSlide + "'] .card-img-overlay"; $(currentEle).removeClass('img_c-display').delay(200).fadeOut(0); $(nextEle).fadeOut(0); }); $('.img_container').on('afterChange', function (event, slick, nextSlide) { let next = "div[data-slick-index='" + nextSlide + "'] .card-img-overlay"; $(next).fadeIn(0).delay(800).addClass('img_c-display'); }); let media993 = window.matchMedia("(max-width: 993px)"); media993.addListener(media)
    media(media993); function media(media) {
        if (media993.matches) {
            $(".burger__input").prop('checked', false); $('.navbar-collapse').removeClass('show'); $('.nav-link').click(function () { $('.dropdown-menu').fadeOut(0).removeClass('show'); $('.dropdown').removeClass('show'); $(this).next('.dropdown-menu').stop(true, true).fadeIn(100).addClass('show'); }); $('body').on('click', function (e) { if (!$('.dropdown-menu').is(e.target) && $('.dropdown').has(e.target).length === 0) { $('.dropdown-menu').fadeOut(0).removeClass('show'); $('.dropdown').removeClass('show'); } }); $(".body_content").on("touchstart", handleTouchStart); $(".body_content").on("touchmove", handleTouchMove); var xDown = null; var yDown = null; function getTouches(evt) { return evt.touches || evt.originalEvent.touches; }
            function handleTouchStart(evt) { const firstTouch = getTouches(evt)[0]; xDown = firstTouch.clientX; yDown = firstTouch.clientY; }; function handleTouchMove(evt) {
                if (!xDown || !yDown) { return; }
                var xUp = evt.touches[0].clientX; var yUp = evt.touches[0].clientY; var xDiff = xDown - xUp; var yDiff = yDown - yUp; if (Math.abs(xDiff) > Math.abs(yDiff)) { if (xDiff > 0) { $('.setting').removeClass('setting-active'); } else { $('.setting').addClass('setting-active'); } } else { if (yDiff > 0) { } else { } }
                xDown = null; yDown = null;
            };
        } else { $('.dropdown').hover(function () { $(this).find('> .dropdown-menu').stop(true, true).fadeIn(0).delay(400).addClass('show'); }, function () { $(this).find('> .dropdown-menu').stop(true, true).removeClass('show').delay(400).fadeOut(0); }); }
    }
    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter'); if (value == "all") { $('.filter').fadeIn(300).delay(300).removeClass('gallery-hide'); }
        else { $(".filter").not('.' + value).addClass('gallery-hide').delay(150).fadeOut(150); $('.filter').filter('.' + value).fadeIn(300).delay(300).removeClass('gallery-hide'); }
        if ($(".filter-button").removeClass("active")) { $(this).removeClass("active"); }
        $(this).addClass("active");
    }); $(".price_btn").click(function () {
        var value = $(this).attr('data-filter'); $(".filter_price").removeClass('active-card')
        if (value == "business") { $('.' + value + ':nth-of-type(3)').addClass('active-card'); } else if (value == "ultimate") { $('.' + value + ':nth-of-type(2)').addClass('active-card'); }
        $(".filter_price").not('.' + value).removeClass('active-card').fadeOut(200); $('.filter_price').filter('.' + value).delay(200).fadeIn(300); if ($(".price_btn").removeClass("active-price")) { $(this).removeClass("active-price"); }
        $(this).addClass("active-price");
    }); var section = document.querySelector('.numbers'); var hasEntered = false; window.addEventListener('scroll', (e) => { var shouldAnimate = (window.scrollY + window.innerHeight) >= section.offsetTop; if (shouldAnimate && !hasEntered) { hasEntered = true; $('.value').each(function () { $(this).prop('Counter', 0).animate({ Counter: $(this).text() }, { duration: 2000, easing: 'swing', step: function (now) { $(this).text(Math.ceil(now)); } }); }); } }); if (window.location.pathname != "/form.html") { var x = 0; var y = 0; var page = document.querySelector('body'); page.addEventListener('mousemove', function (event) { x = event.pageX; y = event.pageY; }); var box = document.getElementById('box'); var mousebox = function () { setTimeout(() => { box.style.left = (x + 20) + 'px'; box.style.top = (y + 20) + 'px'; }, 1000); } }
    $('#button').on('click', function (e) { e.preventDefault(); $('html, body').animate({ scrollTop: 0 }, 'slow'); }); $(window).on("scroll", function () {
        if ($(window).scrollTop() > 60) { $('#button').addClass('show'); $('nav').addClass('header_active'); }
        else { $('#button').removeClass('show'); $('nav').removeClass('header_active'); }
    }); $('.btn-fixed').click(function () {
        $(this).toggleClass('off-fixed'); if ($(this).hasClass('head')) { $('nav').toggleClass('static'); } else if ($(this).hasClass('foot')) { $('footer').toggleClass('static'); } else if ($(this).hasClass("dark-mode")) {
            if ($(this).hasClass("off-fixed")) { checkDark = true; } else { checkDark = false; }
            $('.template-header > a , .template-body > a').parent().children().removeClass('active_circle'); darkTheme();
        }
    }); var headerLinks = $('.template-header > a'), bodyLinks = $('.template-body > a'), fontLinks = $('.template-font > a'), darkMode = $('.dark-mode'), rootVar = document.documentElement.style; var checkDark, oldBG = "", newBGColor = "", newBGColor2 = "", newBGColor3 = "", headerStyle = "", bodyStyle1 = "", bodyStyle2 = "", primaryStyle = ""; function headerGradient() { rootVar.setProperty('--header-gradient', newBGColor); return newBGColor; }
    function bodyGradient() { rootVar.setProperty('--body-gradient', newBGColor2); return newBGColor2; }
    function secondaryColor() { rootVar.setProperty('--bg-color-secondary', newBGColor3); return newBGColor3; }
    function primaryColor() { rootVar.setProperty('--color-primary', newBGColor2); rootVar.setProperty('--bg-color-primary', newBGColor2); return newBGColor2; }
    function addElementMulti(el, s, fn) { el.forEach(e => e.on(s, fn)); }
    addElementMulti([headerLinks, bodyLinks, fontLinks, darkMode], "click", templateSetting); function templateSetting() {
        oldBG = $(this).css('background-color'); newBGColor = oldBG.replace('rgb', 'rgba').replace(')', ',.4)'); newBGColor2 = oldBG.replace('rgb', 'rgba').replace(')', ',.8)'); newBGColor3 = oldBG.replace('rgb', 'rgba').replace(')', ',1)'); $(this).parent().children().removeClass('active_circle'); if ($(this).parent().hasClass("template-header")) { headerStyle = headerGradient(); } else if ($(this).parent().hasClass("template-body")) { bodyStyle1 = bodyGradient(); bodyStyle2 = secondaryColor(); } else if ($(this).parent().hasClass("template-font")) { if (typeof (primaryColor) == 'function') { primaryStyle = primaryColor(); } else { rootVar.setProperty('--color-primary', newBGColor2); rootVar.setProperty('--bg-color-primary', newBGColor2); primaryStyle = newBGColor2; } }
        $(this).addClass("active_circle")
    }
    $('.rest-header').click(function () { (checkDark) ? rootVar.setProperty('--header-gradient', "rgba(255, 255, 255, 0.4)") : rootVar.setProperty('--header-gradient', "rgba(0, 0, 0, 0.6)"); (checkDark) ? headerStyle = 'rgba(255, 255, 255, 0.4)' : headerStyle = 'rgba(0, 0, 0, 0.6)'; $('.template-header > a').removeClass('active_circle'); }); $('.rest-body').click(function () {
        if (checkDark) { rootVar.setProperty('--body-gradient', "rgb(255, 255, 255)"); rootVar.setProperty('--bg-color-secondary', "#f9f9f9"); bodyStyle1 = "rgb(255, 255, 255)"; bodyStyle2 = "#f9f9f9" } else { rootVar.setProperty('--body-gradient', "rgb(0, 0, 0)"); rootVar.setProperty('--bg-color-secondary', "#3a3a3a"); bodyStyle1 = "rgb(0, 0, 0)"; bodyStyle2 = "#3a3a3a"; }
        $('.template-body > a').removeClass('active_circle');
    }); $('.rest-font').click(function () {
        rootVar.setProperty('--color-primary', "#0c65ed"); rootVar.setProperty('--bg-color-primary', "#0c65ed"); primaryColor = "#0c65ed"
        $('.template-font > a').removeClass('active_circle');
    }); $('.btn-options').click(function () { $(this).toggleClass('btn-options-active'); $('.setting').toggleClass('setting-active'); }); function darkTheme() { if (checkDark) { headerStyle = 'rgba(255, 255, 255, 0.4)'; bodyStyle1 = 'rgb(255, 255, 255)'; bodyStyle2 = '#f9f9f9'; rootVar.setProperty('--body-gradient', 'rgb(255, 255, 255)'); rootVar.setProperty('--header-gradient', 'rgba(255, 255, 255, 0.4)'); rootVar.setProperty('--color-white', 'rgb(255, 255, 255)'); rootVar.setProperty('--bg-color-secondary', '#f9f9f9'); rootVar.setProperty('--color-theme-black', 'black'); rootVar.setProperty('--shadow-black', '0 16px 26px -10px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'); } else { headerStyle = 'rgba(0, 0, 0, 0.6)'; bodyStyle1 = 'rgb(0, 0, 0)'; bodyStyle2 = '#3a3a3a'; rootVar.setProperty('--body-gradient', 'rgb(0, 0, 0)'); rootVar.setProperty('--header-gradient', 'rgba(0, 0, 0, 0.6)'); rootVar.setProperty('--color-white', 'rgb(196, 196, 196)'); rootVar.setProperty('--bg-color-secondary', '#3a3a3a'); rootVar.setProperty('--color-theme-black', 'white'); rootVar.setProperty('--shadow-black', '0 16px 26px -10px rgba(255, 255, 255, 0.56), 0 4px 25px 0px rgba(255, 255, 255, 0.12), 0 8px 10px -5px rgba(255, 255, 255, 0.2)'); } }
    function main() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                var user = firebase.auth().currentUser; var uid
                if (user != null) { uid = user.uid; }
                var firebaseRefKey = firebase.database().ref().child(uid); firebaseRefKey.on('value', (dataSnapShot) => {
                    var val = dataSnapShot.val(); var name = val.userFullName; checkDark = val.checkDark; darkTheme(); headerStyle = val.headerStyle; bodyStyle1 = val.bodyStyle1; bodyStyle1 = val.bodyStyle2; primaryStyle = val.primaryStyle; rootVar.setProperty("--header-gradient", val.headerStyle); rootVar.setProperty("--body-gradient", val.bodyStyle1); rootVar.setProperty("--bg-color-secondary", val.bodyStyle2); rootVar.setProperty("--color-primary", val.primaryStyle); rootVar.setProperty("--bg-color-primary", val.primaryStyle); (checkDark) ? $('.dark-mode').addClass('off-fixed') : $('.dark-mode').removeClass('off-fixed'); var box = document.getElementById("box"); if (box) {
                        box.innerText = name; setTimeout(() => {
                            box.innerHTML = `<h5 id="nam" class="m-0"><span>
                                <i class="far fa-grin-stars"></i>
                            </span></h5>`;
                        }, 15000);
                    }
                    var uidName = document.querySelector(".uid_name"); if (uidName) { uidName.innerText = name; }
                })
                $('.save_theme').on('click', function () { swal('successfull', 'All Style colors are saved',).then((value) => { setTimeout(function () { firebaseRefKey.update({ headerStyle: headerStyle, bodyStyle1: bodyStyle1, bodyStyle2: bodyStyle2, primaryStyle: primaryStyle, checkDark: checkDark }); }, 500) }); });
            } else { if (window.location.pathname != "/form.html") { setTimeout(function () { window.location.replace("form.html"); }, 0); } }
        });
    }
});