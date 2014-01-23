// extend jQuery with a method to test if a jQuery-selector returns an empty object
$.fn.exists = function () {
    return this.length !== 0;
}

// info-panel
jQuery(document).ready(function ($) {  
  var $window = $(window),
      $body = $('body'),
      $html = $('html'),
      $panel = $('#panel'),
      $win = $('.win', $panel),
      $width = $('.width', $panel),
      $fontsize = $('.fontsize', $panel),
      $breakpoint = $('.breakpoint', $panel);

  function toggleBreakpoint() {
    var windowWidth = $window.width();
     // toggle breakpoint classes
    $html.toggleClass('desktop', (windowWidth >= 1025));
    $html.toggleClass('tablet', ( (windowWidth >= 768) && (windowWidth <= 1024) ));
    $html.toggleClass('mobile', (windowWidth <= 767) );           
  }

  $win.html($window.width() + 'px');
  $width.html($body.outerWidth() + 'px');
  $fontsize.html($('html').css('font-size'));

  toggleBreakpoint();

  $(window).on('resize', function(){
      //console.log($window.width());
      $win.html($window.width() + 'px');
      $width.html($body.outerWidth() + 'px');
      $fontsize.html($('html').css('font-size'));

      toggleBreakpoint();
  });
// end .ready        
});


