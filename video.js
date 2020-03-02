$(document).ready(function()
{
  $('.menu__icon').click(function() {
    if(!$('.menu__icon').hasClass('openDone'))
    {
      $('.menu__icon').addClass('openDone');
      $('.header-mobile-menu').css("right", "0px");
      $('body').css("overflow-y", "hidden");
    }
    else
    {
      $('.menu__icon').removeClass('openDone');
      $('.header-mobile-menu').css("right", "-100%");
      $('body').css("overflow-y", "scroll");
    }
  });
});

$(function () {
  $('.frame-container').slice(0, 6).show();
  $('#loadMore').on('click', function(e){
    e.preventDefault();
    $('.frame-container:hidden').slice(0, 4).slideDown();
    if ($('.frame-container:hidden').length < 1) {
      $('#loadMore').css("visibility", "hidden");
    }
  })
});