new Swiper(".swiper",  {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
$(document).ready(function(){
  $('.swiper-gallery').slick(
    {
      arrows:false,
      dots:false,
      adaptiveHeight:true,
      slidesToShow: 6,
      speed:1000,
      easting: 'ease',
      infinite:true,
      asNavFor: ".swiper-gallery-big"
    }
  );
});
$(document).ready(function(){
  $('.swiper-gallery-big').slick({
    arrows: true,
    fade:true,
    asNavFor: ".swiper-gallery"
  });
});