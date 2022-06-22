jQuery(function($) {

$(document).ready(function(){


    $('.news-section .news-container').slick({
        slidesToShow: 1,
        arrows:true,
        infinite: true,
        dots:true,
        autoplay:true,
        autoplaySpeed:3000,
     
    });

    $('.new-titles-section .new-titles-list').slick({
      slidesToShow: 4,
      arrows: true,
      dots: true,
      infinite: true,
      autoplay:true,
      autoplaySpeed:3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,

            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1
            }
          }
        ]
    });
   
  });

});