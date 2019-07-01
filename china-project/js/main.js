$(document).ready(function() {
  
  $('.menu-trigger').click(function(event) {
    $(this).toggleClass('active');
    $('body').toggleClass('open-menu');
  });

  $(window).click(function(event) {
    if (event.target.className == "box-menu") {
      $('.menu-trigger').removeClass('active');
      $('body').removeClass('open-menu');
    }
  });

})