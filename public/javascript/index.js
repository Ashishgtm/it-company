var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    
  },
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


$(document).ready(function() {
  $('.swiper-slide img').height($(window).width()/1.77*0.7)
  $('.swiper-slide .overlay .text').css({'font-size':30*($(window).width()/1820)})
})

$(window).resize(function() {
  $('.swiper-slide img').height($(window).width()/1.77*0.7)
  $('.swiper-slide .overlay .text').css({'font-size':30*($(window).width()/1820)})
})
