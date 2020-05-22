$(document).ready(function(){
$('.t-slider').slick({
  //centerMode: true,
  //centerPadding: '60px',
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 700,
  arrows: true,
  //prevArrow:"<a class='control-c btn d-inline'><i class='fa fa-chevron-left text-success'></i></a>",	
  //nextArrow:"<a class='control-c btn d-inline'><i class='fa fa-chevron-right text-success'></i></a>",
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
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
$(".navbar-nav a").click(function () {
   var navlink = $(this).text();
   $("html, body").animate({
       scrollTop: $('#' + navlink).offset().top
   }, 2000);
   $('.collapse').collapse('hide'); 
});
});
