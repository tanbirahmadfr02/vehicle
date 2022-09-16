// ===logo slider start ===
$('.slider_main').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
// ===logo slider end ===

// ===cars part start ===
$('.cars_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow: '<i class="fa-solid fa-arrow-left arrow prevarrow"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right arrow nextarrow"></i>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
// ===cars part end ===


  // ========back to top part ======
  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
      $(".back_to_top").addClass("bottom_to_top")
    }else{
      $(".back_to_top").removeClass("bottom_to_top")
    }
  });
  // ========back to top part ======

  
 // =========sticky menu part ========
var navbar = document.getElementById("navbar");
window.addEventListener("scroll",function(){
navbar.classList.toggle("sticky",window.scrollY > 100);
})
// =========sticky menu part ========