// extend jQuery with a method to test if a jQuery-selector returns an empty object
$.fn.exists = function () {
    return this.length !== 0;
}

// info-panel
jQuery(document).ready(function ($) {  

    var $window = $(window),
        $body = $('body'),
        $html = $('html');

    function toggleBreakpoint() {
      var windowWidth = $window.width();
       // toggle breakpoint classes
      $html.toggleClass('desktop', (windowWidth >= 1025));
      $html.toggleClass('tablet-lnd', ( (windowWidth >= 769) && (windowWidth <= 1024) ));
      $html.toggleClass('tablet-ptr', ( (windowWidth >= 481) && (windowWidth <= 768) ));          
      $html.toggleClass('mobile', (windowWidth <= 480) );
    }

    toggleBreakpoint();

    if( $('#panel').exists() ) {
      var $panel = $('#panel'),
          $win = $('.win', $panel),
          $width = $('.width', $panel),
          $fontsize = $('.fontsize', $panel),
          $closeBtn = $('.close-x', $panel);

      $closeBtn.click(function(){
        $panel.hide();
      });

      $win.html($window.width() + 'px');
      $width.html($body.outerWidth() + 'px');
      $fontsize.html($html.css('font-size'));
    }

    $(window).on('resize', function(){
        //console.log($window.width());
        toggleBreakpoint();

        if( $('#panel').exists() ) {
          $win.html($window.width() + 'px');
          $width.html($body.outerWidth() + 'px');
          $fontsize.html($html.css('font-size'));
        }
    });
// end .ready        
});
