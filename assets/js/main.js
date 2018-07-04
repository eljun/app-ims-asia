$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('#hero-slider', {
      // Optional parameters
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })
    
    //initialize swiper when document ready
    var mySwiper = new Swiper ('#quote', {
      // Optional parameters
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      }
    })
  });