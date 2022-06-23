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


    pageBody = document.getElementById("main-body");


    var prevScrollpos = window.pageYOffset;
    while (window.scrollY > 0){
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    
    if ($(window).width() > 576) {
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("page-header").style.top = "0";
        pageBody.style.top = "126px";
      } else {
        document.getElementById("page-header").style.top = "-126px";
        pageBody.style.top = "0px";
      }
    } else {
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("page-header").style.top = "0";
        pageBody.style.top = "152px";
      } else {
        document.getElementById("page-header").style.top = "-152px";
        pageBody.style.top = "0px";
      }
    }
      prevScrollpos = currentScrollPos;
    }
  }

});

});
