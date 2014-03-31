      /*
      var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
        menuRight = document.getElementById( 'cbp-spmenu-s2' ),
        menuTop = document.getElementById( 'cbp-spmenu-s3' ),
        menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
        showLeft = document.getElementById( 'showLeft' ),
        showRight = document.getElementById( 'showRight' ),
        showTop = document.getElementById( 'showTop' ),
        showBottom = document.getElementById( 'showBottom' ),
        showLeftPush = document.getElementById( 'showLeftPush' ),
        showRightPush = document.getElementById( 'showRightPush' ),
        body = document.body;
      */






            /*
      showLeft.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( menuLeft, 'cbp-spmenu-open' );
        disableOther( 'showLeft' );
      };
      showRight.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( menuRight, 'cbp-spmenu-open' );
        disableOther( 'showRight' );
      };
      showTop.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( menuTop, 'cbp-spmenu-open' );
        disableOther( 'showTop' );
      };
      showBottom.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( menuBottom, 'cbp-spmenu-open' );
        disableOther( 'showBottom' );
      };
      showLeftPush.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( body, 'cbp-spmenu-push-toright' );
        classie.toggle( menuLeft, 'cbp-spmenu-open' );
        disableOther( 'showLeftPush' );
      };
      showRightPush.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( body, 'cbp-spmenu-push-toleft' );
        classie.toggle( menuRight, 'cbp-spmenu-open' );
        disableOther( 'showRightPush' );
      };

     

      function disableOther( button ) {
        if( button !== 'showLeft' ) {
          classie.toggle( showLeft, 'disabled' );
        }
        if( button !== 'showRight' ) {
          classie.toggle( showRight, 'disabled' );
        }
        if( button !== 'showTop' ) {
          classie.toggle( showTop, 'disabled' );
        }
        if( button !== 'showBottom' ) {
          classie.toggle( showBottom, 'disabled' );
        }
        if( button !== 'showLeftPush' ) {
          classie.toggle( showLeftPush, 'disabled' );
        }
        if( button !== 'showRightPush' ) {
          classie.toggle( showRightPush, 'disabled' );
        }
      }
  
     */

$(function() {

    var $container = $( '#container' ),
        $pageScroll = $( '.page-scroll' ),
        $menuLeft = $( '#cbp-spmenu-s1' ),
        $menuRight = $( '.cbp-spmenu-s2' ),
        $menuBottom = $( '.cbp-spmenu-s4' ),
        $showBottom = $( '.show-bottom' ),
        $showLeftPush = $( '#showLeftPush' ),
        $showRightPush = $( '.show-right' );
        $overlay = $( '#overlay-left' );

      $showLeftPush.on('click', function() {
        $overlay.show();
        $container.toggleClass( 'cbp-spmenu-push-toright' );
        $menuLeft.toggleClass( 'cbp-spmenu-open' );
      });

      $pageScroll.on('click', '.show-right', function() {
        // $(this).toggleClass( 'active' );
        $('.cbp-spmenu-right').toggleClass( 'cbp-spmenu-open' );
      });

      $pageScroll.on('click', '.show-bottom', function() {
        $(this).toggleClass( 'active' );
        var getIndex = $(this).data( 'window' );
        $( '#cbp-spmenu-' + getIndex ).toggleClass( 'cbp-spmenu-open' );
      });

      $pageScroll.on('click', '.show-right-close', function() {
        $('.cbp-spmenu-right').toggleClass( 'cbp-spmenu-open' );
      });

      $('#overlay-left').on('click', function() {
        $overlay.hide();
        $container.toggleClass( 'cbp-spmenu-push-toright' );
        $menuLeft.toggleClass( 'cbp-spmenu-open' );
      });

});
