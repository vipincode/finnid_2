// ============================================================
// SWIPER CAROUSEL
// ============================================================

import Swiper from 'swiper/bundle';

// CAROUSEL ONE[1]
const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
    },
});

const testimonials = document.querySelector('.swiper1');
if(testimonials) {
    testimonials.addEventListener('mouseenter', () => {
    swiper1.autoplay.stop();
  });
  testimonials.addEventListener('mouseleave', () => {
    swiper1.autoplay.start();
  });
}

// CAROUSEL TWO[2]
const swiper2 = new Swiper(".swiper2", {
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
    },
    navigation: {
        nextEl: ".button-next-2",
        prevEl: ".button-prev-2",
    },
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        }
    }
});

// CAROUSEL THREE[3]
const swiper3 = new Swiper(".swiper3", {
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
        el: ".swiper-pagination3",
        clickable: true,
    },
    navigation: {
        nextEl: ".button-next-3",
        prevEl: ".button-prev-3",
    },
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        }
    }
});

// CAROUSEL FOUR[4]

const swiper4 = new Swiper(".swiper4", {
    spaceBetween: 30,
    effect: "fade",
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

// ============================================================
// BACK TO TOP CODE & STICKY NAV
// ============================================================

import $ from "jquery";

let $backToTop = $("#back-to-top");
$(window).on('scroll', function() {
    if($(this).scrollTop() > 100) {
        $backToTop.fadeIn();
    } else {
        $backToTop.fadeOut();
    }
});

$backToTop.on('click', function() {
    $('html, body').animate({
        scrollTop: 0,
    }, 100);
    return false;
});

// ============================================================
// STICKY NAV BAR
// ============================================================

const navbar = document.querySelector("#navbar");

function myFunction() {
  if (window.pageYOffset >= 100) {
    navbar.classList.add("is-sticky");
  } else {
    navbar.classList.remove("is-sticky");
  }
}

if(navbar) {
    window.onscroll = function() {myFunction()};
}

// ===================================================================
//                     BOOTSTRAP MODAL
// ===================================================================

import 'bootstrap/js/src/modal';

// ============================================================
// MOBILE MENU
// ============================================================

const mobButton = $('.hamburger');

mobButton.on('click', function() {
    $(this).toggleClass('is-active');
    $('.sider').toggleClass('js__toggle');
});

$('.sider__sub').on('click', function() {
    if($(this).find('.sider__links').hasClass('js__toggle')) {
        $(this).find('.sider__links').removeClass('js__toggle'); 
    } else {
        $('.sider__links').removeClass('js__toggle');
        $(this).find('.sider__links').addClass('js__toggle'); 
    }
});

// ============================================================
// COUNTER JS
// ============================================================
import 'waypoints/lib/noframework.waypoints';
import { CountUp } from 'countup.js/dist/countUp';

let count1 = new CountUp('count1', 277);
let count2 = new CountUp('count2', 821);
let count3 = new CountUp('count3', 566);
let count4 = new CountUp('count4', 311);
const way1 = document.getElementById('way1');
const way2 = document.getElementById('way2');
const way3 = document.getElementById('way3');
const way4 = document.getElementById('way4');

if(way1) {
    var wayy1 = new Waypoint({
        element: way1,
        handler: function(direction) {
            if(direction === "up") {
                count1.reset();
            } else {
                count1.start();
            }
        },
        offset: '75%'
    });
}

if(way2) {
    var wayy2 = new Waypoint({
        element: way2,
        handler: function(direction) {
            if(direction === "up") {
                count2.reset();
            } else {
                count2.start();
            }
        },
        offset: '75%'
    });
}


if(way3) {
    var wayy3 = new Waypoint({
        element: way3,
        handler: function(direction) {
            if(direction === "up") {
                count3.reset();
            } else {
                count3.start();
            }
        },
        offset: '75%'
    });
}

if(way4) {
    var wayy4 = new Waypoint({
        element: way4,
        handler: function(direction) {
            if(direction === "up") {
                count4.reset();
            } else {
                count4.start();
            }
        },
        offset: '75%'
    });
}

// ============================================================
// READ MORE
// ============================================================

import 'readmore-js/readmore';

$('.article').readmore({ 
    speed: 100, 
    collapsedHeight: 75,
    heightMargin: 16,
    blockCSS: 'display: block; width: 100%;',
    embedCSS: false,
    startOpen: false,
    moreLink: '<a href="#">Read more</a>',
    lessLink: '<a href="#">Close</a>'
});

// ============================================================
// LITY JS
// ============================================================

import "../../node_modules/lity/dist/lity";

// ============================================================
// VERTICLE MENU TAB
// ============================================================
const srvMain = document.querySelector('.srv');
const srvLinks = document.querySelectorAll('.srvlink a');
const srvContent = document.querySelectorAll('.acc_panel');

if(srvMain) {
    srvMain.addEventListener('click', (e) => {
        if(e.target.getAttribute('attr')) {
            e.preventDefault();
            _removeActive();
            if(e.target.className == 'is-active') {
                e.target.classList.remove('is-active');        
            } else {
                e.target.classList.add('is-active');
            }
            const linkAttr = e.target.getAttribute('attr');
            for(let i = 0; i < srvContent.length; i++) {
               if(srvContent[i].id === linkAttr) {
                   srvContent[i].classList.add('is-active');
               } else {
                srvContent[i].classList.remove('is-active');  
               }
            }
        }
    })
}

function _removeActive() {
    for (let i = 0; i < srvLinks.length; i++) {
        srvLinks[i].classList.remove('is-active')
    }
}

// ============================================================
// HORIZONTAL ACCORDIAN
// ============================================================
const accordianID = document.querySelectorAll('.acc__id');
const accordianContent = document.querySelectorAll('.acc__content');

if(accordianID) {
    for(let i = 0; i < accordianID.length; i++) {
        accordianID[i].addEventListener('click', (e) => {
            const accPanel = e.target.nextElementSibling;
            if(accPanel.className === 'acc__content acc-active') {
                e.target.classList.remove('js__active');
                accPanel.classList.remove('acc-active');
            } else {
                _removePlusMisun();
                _removeAccActive();  
                e.target.classList.add('js__active');  
                accPanel.classList.add('acc-active');
            }
        })
    }
}
function _removeAccActive() {
    for(let i = 0; i < accordianContent.length; i += 1) {
        accordianContent[i].classList.remove('acc-active');
    }
}
function _removePlusMisun() {
    for(let i = 0; i < accordianID.length; i += 1) {
        accordianID[i].classList.remove('js__active');
    }
}

// ============================================================
// HORIZONTAL MENU TABS[PRICE TAB- RENTAL, ANNUAL]
// ============================================================
const tabs1 = document.querySelector(".nd__registration");
const tabs2 = document.querySelector(".nd__software");
const tabs3 = document.querySelector(".nd__compliance");
const tabs4 = document.querySelector(".nd__producer");
const tabsButton = document.querySelectorAll(".tbs__button button");
const tabsPanel1 = document.querySelectorAll(".nd__registration .tbs__panel--item");
const tabsPanel2 = document.querySelectorAll(".nd__software .tbs__panel--item");
const tabsPanel3 = document.querySelectorAll(".nd__compliance .tbs__panel--item");
const tabsPanel4 = document.querySelectorAll(".nd__producer .tbs__panel--item");

if(tabs1) {
    tabs1.addEventListener('click', (e)=> {
        if(e.target.className == 'hr__tab') {
            _removeButtonActive();
            e.target.classList.toggle('br-active');
            let btnAttr = e.target.getAttribute("attr");
            for(let i = 0; i < tabsPanel1.length; i++) {
               if(tabsPanel1[i].id === btnAttr) {
                    tabsPanel1[i].classList.add('tbs--active');
               } else {
                    tabsPanel1[i].classList.remove('tbs--active');
               }
            }
        }
    })
}

if(tabs2) {
    tabs2.addEventListener('click', (e)=> {
        if(e.target.className == 'hr__tab--1') {
            _removeButtonActive();
            e.target.classList.toggle('br-active');
            let btnAttr = e.target.getAttribute("attr");
            for(let i = 0; i < tabsPanel2.length; i++) {
               if(tabsPanel2[i].id === btnAttr) {
                    tabsPanel2[i].classList.add('tbs--active');
               } else {
                    tabsPanel2[i].classList.remove('tbs--active');
               }
            }
        }
    })
}

if(tabs3) {
    tabs3.addEventListener('click', (e)=> {
        if(e.target.className == 'hr__tab--2') {
            _removeButtonActive();
            e.target.classList.toggle('br-active');
            let btnAttr = e.target.getAttribute("attr");
            for(let i = 0; i < tabsPanel3.length; i++) {
               if(tabsPanel3[i].id === btnAttr) {
                    tabsPanel3[i].classList.add('tbs--active');
               } else {
                    tabsPanel3[i].classList.remove('tbs--active');
               }
            }
        }
    })
}

if(tabs4) {
    tabs4.addEventListener('click', (e)=> {
        if(e.target.className == 'hr__tab--3') {
            _removeButtonActive();
            e.target.classList.toggle('br-active');
            let btnAttr = e.target.getAttribute("attr");
            for(let i = 0; i < tabsPanel4.length; i++) {
               if(tabsPanel4[i].id === btnAttr) {
                    tabsPanel4[i].classList.add('tbs--active');
               } else {
                    tabsPanel4[i].classList.remove('tbs--active');
               }
            }
        }
    })
}

function _removeButtonActive() {
    for(let i = 0; i < tabsButton.length; i++) {
        tabsButton[i].classList.remove('br-active');
    }
}

// ============================================================
// HORIZONTAL INNER MENU TABS [PRICE TAB]
// ============================================================
const innerTabButton = document.querySelectorAll(".inner_tab");
const innerTabPanel1 = document.querySelectorAll(".nd__registration .tbs__panel--inner");
const innerTabPanel2 = document.querySelectorAll(".nd__software .tbs__panel--inner");
const innerTabPanel3 = document.querySelectorAll(".nd__compliance .tbs__panel--inner");
const innerTabPanel4 = document.querySelectorAll(".nd__producer .tbs__panel--inner");

if(tabs1) {
    tabs1.addEventListener('click', (e)=> {
        if(e.target.className == 'inner_tab') {
            _removeInnerActiveButton();
            e.target.classList.toggle('inn-active');
            let innerBtnAttr = e.target.getAttribute("attr");
            for(let i = 0; i < innerTabPanel1.length; i++) {
                if(innerTabPanel1[i].id === innerBtnAttr) {
                     innerTabPanel1[i].classList.add('tbs-inner--active');
                } else {
                     innerTabPanel1[i].classList.remove('tbs-inner--active');
                }
             }
        }
    })
}

if(tabs2) {
    tabs2.addEventListener('click', (e)=> {
        if(e.target.className == 'inner_tab') {
            _removeInnerActiveButton();
            e.target.classList.toggle('inn-active');
            let innerBtnAttr = e.target.getAttribute("attr");
            for(let i = 0; i < innerTabPanel2.length; i++) {
                if(innerTabPanel2[i].id === innerBtnAttr) {
                     innerTabPanel2[i].classList.add('tbs-inner--active');
                } else {
                     innerTabPanel2[i].classList.remove('tbs-inner--active');
                }
             }
        }
    })
}

if(tabs3) {
    tabs3.addEventListener('click', (e)=> {
        if(e.target.className == 'inner_tab') {
            _removeInnerActiveButton();
            e.target.classList.toggle('inn-active');
            let innerBtnAttr = e.target.getAttribute("attr");
            for(let i = 0; i < innerTabPanel3.length; i++) {
                if(innerTabPanel3[i].id === innerBtnAttr) {
                     innerTabPanel3[i].classList.add('tbs-inner--active');
                } else {
                     innerTabPanel3[i].classList.remove('tbs-inner--active');
                }
             }
        }
    })
}

if(tabs4) {
    tabs4.addEventListener('click', (e)=> {
        if(e.target.className == 'inner_tab') {
            _removeInnerActiveButton();
            e.target.classList.toggle('inn-active');
            let innerBtnAttr = e.target.getAttribute("attr");
            for(let i = 0; i < innerTabPanel4.length; i++) {
                if(innerTabPanel4[i].id === innerBtnAttr) {
                     innerTabPanel4[i].classList.add('tbs-inner--active');
                } else {
                     innerTabPanel4[i].classList.remove('tbs-inner--active');
                }
             }
        }
    })
}

function _removeInnerActiveButton() {
    for(let i = 0; i < innerTabButton.length; i++) {
        innerTabButton[i].classList.remove('inn-active');
    }
}

// ============================================================
// PRICING TABLE TAB
// ============================================================

var registration =  $('.nd__registration');
var software =  $('.nd__software');
var compliance =  $('.nd__compliance');
var producer =  $('.nd__producer');

registration.addClass('nd--active');

$('.pricing__table').on('click', function(e) {
    if(e.target.tagName==="INPUT") {
        if(e.target.checked === true) {
            $('input:checkbox').prop('checked', false);  
            e.target.checked = true 
        } else {
           e.target.checked = true 
        }
        _removeActiveClass();

        if(e.target.id === registration.attr('class')) {
            registration.addClass('nd--active');
            $('.tbs__button button').removeClass('br-active')
            $('.tbs__button button:first-child').addClass('br-active')

            $('.tbs__panel--item').removeClass('tbs--active')
            $('.tbs__panel--item:first-child').addClass('tbs--active')

            $('.inner_tab').removeClass('inn-active')
            $('.inner_tab:first-child').addClass('inn-active')

        } else if(e.target.id === software.attr('class')) {
            software.addClass('nd--active');
            $('.tbs__button button').removeClass('br-active')
            $('.tbs__button button:first-child').addClass('br-active')

            $('.tbs__panel--item').removeClass('tbs--active')
            $('.tbs__panel--item:first-child').addClass('tbs--active')

            $('.inner_tab').removeClass('inn-active')
            $('.inner_tab:first-child').addClass('inn-active')

        } else if(e.target.id === compliance.attr('class')) {
            compliance.addClass('nd--active');
            $('.tbs__button button').removeClass('br-active')
            $('.tbs__button button:first-child').addClass('br-active')

            $('.tbs__panel--item').removeClass('tbs--active')
            $('.tbs__panel--item:first-child').addClass('tbs--active')

            $('.inner_tab').removeClass('inn-active')
            $('.inner_tab:first-child').addClass('inn-active')

        } else if(e.target.id === producer.attr('class')) {
            producer.addClass('nd--active');
            $('.tbs__button button').removeClass('br-active')
            $('.tbs__button button:first-child').addClass('br-active')

            $('.tbs__panel--item').removeClass('tbs--active')
            $('.tbs__panel--item:first-child').addClass('tbs--active')

            $('.inner_tab').removeClass('inn-active')
            $('.inner_tab:first-child').addClass('inn-active')
        }
    }
});

function _removeActiveClass() {
    registration.removeClass('nd--active');
    software.removeClass('nd--active');
    compliance.removeClass('nd--active');
    producer.removeClass('nd--active');
}

// ============================================================
// LIGHTBOX
// ============================================================

// import '../../node_modules/lightbox2/dist/js/lightbox';
// lightbox.option({
//     'resizeDuration': 200,
//     'wrapAround': true
// })

// ============================================================
// ADD PRICE IN TEXT
// ============================================================

$('#radio-manager').change((e) => {
    $('#to-change strong').text(`${e.target.value}`)
})
