// extend jQuery with a method to test if a jQuery-selector returns an empty object
$.fn.exists = function () {
    return this.length !== 0;
}

// get URL parameters
$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});

jQuery(document).ready(function ($) {  

    var $window = $(window),
        $body = $('body'),
        $html = $('html');

    function toggleBreakpoint() {
      var windowWidth = $window.width();
       // toggle breakpoint classes
      $html.toggleClass('desktop', (windowWidth >= 1025));
      $html.toggleClass('tablet-lnd', ( (windowWidth >= 769) && (windowWidth <= 1024) ));
      $html.toggleClass('tablet-ptr', ( (windowWidth >= 640) && (windowWidth <= 768) ));          
      $html.toggleClass('mobile', (windowWidth <= 639) );
    }

    toggleBreakpoint();

    if ( $('#panel').exists() ) {
      var $panel = $('#panel'),
          $win = $('.win', $panel),
          $width = $('.width', $panel),
          $fontsize = $('.fontsize', $panel),
          $closeBtn = $('.close-x', $panel);

      $closeBtn.click(function () {
        $panel.hide();
      });

      $win.html($window.width() + 'px');
      $width.html($body.outerWidth() + 'px');
      $fontsize.html($html.css('font-size'));
    }

    $(window).on('resize', function () {
        //console.log($window.width());
        toggleBreakpoint();

        if ( $('#panel').exists() ) {
          $win.html($window.width() + 'px');
          $width.html($body.outerWidth() + 'px');
          $fontsize.html($html.css('font-size'));
        }
    });
// end .ready        
});


// dashboard isotope
jQuery(document).ready(function ($) {  
  if ( $('#isotope-container').exists() ) {  
    var $container = $('#isotope-container');
    
    $container.isotope({
      itemSelector : '.element',
      masonry : {
        columnWidth : 1,
        gutterWidth: 10
      },
      getSortData : {
        date : function ( $elem ) {
          return Date.parse($elem.attr('data-date'));
        },
        hotspot : function ( $elem ) {
          return parseInt($elem.attr('data-hotspot'), 10 );
        },
        /*weight : function ( $elem ) {
          return parseFloat( $elem.find('.weight').text().replace( /[\(\)]/g, '') );
        },*/
        number : function ( $elem ) {
          return parseInt( $elem.find('.number').text(), 10 );
        },
        name : function ( $elem ) {
          return $elem.find('.name').text();
        }
      },
      sortBy : 'hotspot'      
    });
    
    
    var $optionSets = $('#options .option-set:not(#filters)'),
        $optionLinks = $optionSets.find('a');

    $optionLinks.click(function () {
      var $this = $(this);
      // don't proceed if already selected
      if ( $this.hasClass('selected') ) {
        return false;
      }
      var $optionSet = $this.parents('.option-set');
      $optionSet.find('.selected').removeClass('selected');
      $this.addClass('selected');

      // make option object dynamically, i.e. { filter: '.my-filter-class' }
      var options = {},
          key = $optionSet.attr('data-option-key'),
          value = $this.attr('data-option-value');
      // parse 'false' as false boolean
      value = value === 'false' ? false : value;
      options[ key ] = value;
      if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
        // changes in layout modes need extra logic
        changeLayoutMode( $this, options )
      } else {
        // otherwise, apply new options
        $container.isotope( options );
      }
      
      return false;
    });

    var $filtersOption = $('#options .option-set#filters'),
        $filtersLinks = $filtersOption.find('a'),

        $qualityStats = $filtersLinks.filter('[data-option-value=".quality"]').find('.sideStats'),
        $utilStats = $filtersLinks.filter('[data-option-value=".utilization"]').find('.sideStats'),
        $registryStats = $filtersLinks.filter('[data-option-value=".registry"]').find('.sideStats'),

        $qualityEls = $container.find('.quality'),
        $utilEls = $container.find('.utilization'),
        $registryEls = $container.find('.registry'),

        $qualityHotspot = $qualityEls.filter('[data-hotspot="1"]').length,
        $utilHotspot = $utilEls.filter('[data-hotspot="1"]').length,
        $registryHotspot = $registryEls.filter('[data-hotspot="1"]').length;

    // counts for isotope navbar         
    $qualityStats.append( $qualityHotspot + '/' + $qualityEls.length);
    $utilStats.append( $utilHotspot + '/' + $utilEls.length);
    $registryStats.append( $registryHotspot + '/' + $registryEls.length);

    $filtersLinks.click(function () {
      var $this = $(this);

      if ( $this.hasClass('selected') ) {
        $this.removeClass('selected')
      } else {
        $this.addClass('selected');       
      }

      var $optionSet = $this.parents('.option-set');

      // make option object dynamically, i.e. { filter: '.my-filter-class' }
      var options = {},
          selectedItemsArr = [];
          $selectedItems = $filtersOption.find('.selected');

      $selectedItems.each(function () {
        selectedItemsArr.push( $(this).attr('data-option-value') );
      });

      if (selectedItemsArr.length < 3) {
        options['filter'] = '*:not(' + selectedItemsArr.join(", ") + ')';
      } else {
        options['filter'] = '*';
        $filtersLinks.removeClass('selected')
      }


      // apply new options
      $container.isotope( options );
      
      return false;
    });
  }

  // set "active" state to this on Modal open
  $('.isotope-item').on('click', function() {
    $(this).addClass('active').hide();
  });

  $('.md-close, .md-overlay').on('click', function() {
    $('.isotope-item').removeClass('active').show();
  });

  // Getting URL var
  if ( $('body').hasClass('page') ) {
    var byName = $.getUrlVar('id');
    $('#page-' + byName).show();

    $('.btn-back').show();
  }

  var $head = $( '.ha-outer-wrapper' );
  $( '.ha-waypoint' ).each( function(i) {
    var $el = $( this ),
      animClassDown = $el.data( 'animateDown' ),
      animClassUp = $el.data( 'animateUp' );

    $el.waypoint( function( direction ) {
      if( direction === 'down' && animClassDown ) {
        $head.attr('class', 'ha-outer-wrapper ' + animClassDown);
        $('.navbar-fixed-top').hide();
      }
      else if( direction === 'up' && animClassUp ){
        $head.attr('class', 'ha-outer-wrapper ' + animClassUp);
        $('.navbar-fixed-top').show();
      }
    });
  } );


// end .ready        
});

