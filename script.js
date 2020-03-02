$(document).ready(function()
{
  $('.menu__icon').click(function() {
    if(!$('.menu__icon').hasClass('openDone'))
    {
      $('.menu__icon').addClass('openDone');
      $('.header-mobile-menu').css("max-width", "100%");
      $('body').css("overflow-y", "hidden");
    }
    else
    {
      $('.menu__icon').removeClass('openDone');
      $('.header-mobile-menu').css("max-width", "0");
      $('body').css("overflow-y", "scroll");
    }
  });
});

$(function () {
  $('.news__link').slice(0, 9).show();
  $('#loadMore').on('click', function(e){
    e.preventDefault();
    $('.news__link:hidden').slice(0, 6).slideDown();
    if ($('.news__link:hidden').length < 1) {
      $('#loadMore').css("visibility", "hidden");
    }
  })
});

$('.slick-items').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.upcoming-matches__container').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});