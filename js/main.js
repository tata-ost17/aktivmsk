$(function(){

   $('.questions__item-trigger').on('click', function () {
      $(this).parent('.questions__item').toggleClass('questions__item--active');
   });

   $('.reviews__slider-img').slick({
      prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt="prev"></button>',
      nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow-next.svg" alt="next"></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.reviews__slider-text',
      arrows: false,
      responsive: [
         {
            breakpoint: 720,
            settings: {
               arrows: true,
            }
         },
         
      ]
   });

   $('.reviews__slider-text').slick({
      prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt="prev"></button>',
      nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow-next.svg" alt="next"></button>',
      slidesToShow: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.reviews__slider-img',
      fade: true,
      responsive: [
         {
            breakpoint: 1140,
            settings: {
               arrows: false,
               centerMode: true,
            }
         },
      ]
   });

   $('.gallery__slider-sm').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: false,
      //centerMode: true,
      //focusOnSelect: true,
      variableWidth: true, 
      asNavFor: '.gallery__slider-lg',
   });

   $('.gallery__slider-lg').slick({
      prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt="prev"></button>',
      nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow-next.svg" alt="next"></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.gallery__slider-sm',
      responsive: [
         {
            breakpoint: 720,
            settings: {
               arrows: true,
            }
         },

      ]
   });

   $('.gift__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
   });

   $('.menu__btn').on('click', function () {
      $('.menu__list').toggleClass('menu__list--active')
   });

   // $('.header__menu-btn').on('click', function () {
   //    $('.header__menu-btn').toggleClass('header__menu-btn-active')
   //    $('.header__list').toggleClass('active');

   // });

  
});