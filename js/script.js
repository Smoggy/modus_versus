$(document).ready(function(){
  $('.slider').bxSlider({
    pager: true,
    nextSelector: '#slider-next',
    prevSelector: '#slider-prev',
    nextText: '',
    prevText: '',
  	minSlides: 1,
  	maxSlides: 1,
    auto: false
  });

  $('.gallery img').on('click', function(){
      $('.gallery img').removeClass('active_image');
      $(this).addClass('active_image');
  });
});