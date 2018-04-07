//  js Document

    // Created on : 14/10/2017.
    // Theme Name : Faster .
    // Description: Faster - App Landing Page.
    // Version    : 1.1.
    // Author     : @creativeGigs.

"use strict";


// Prealoder
 function prealoader () {
   if ($('#loader').length) {
     $('#loader').fadeOut(); // will first fade out the loading animation
     $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
     $('body').delay(350).css({'overflow':'visible'});
  };
 }


// WOW animation
function wowAnimation () {
  if($('.wow').length) {
    var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       80,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
    }
  );
  wow.init();
  }
}

// placeholder remove
function removePlaceholder () {
  if ($("input,textarea").length) {
    $("input,textarea").each(
            function(){
                $(this).data('holder',$(this).attr('placeholder'));
                $(this).on('focusin', function() {
                    $(this).attr('placeholder','');
                });
                $(this).on('focusout', function() {
                    $(this).attr('placeholder',$(this).data('holder'));
                });

        });
  }
}


// Scroll to top
function scrollToTop () {
  if ($('.scroll-top').length) {

    // Check to see if the window is top if not then display button
    $(window).on('scroll', function (){
      if ($(this).scrollTop() > 200) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });

    // Click event to scroll to top
    $('.scroll-top').on('click', function() {
      $('html, body').animate({scrollTop : 0}, 1500);
      return false;
    });
  }
}


// Theme-banner slider
function BannerSlider () {
  var banner = $("#theme-main-banner");
  if (banner.length) {
    banner.camera({ //here I declared some settings, the height and the presence of the thumbnails
      height: '1000px',
      pagination: false,
      navigation: false,
      thumbnails: false,
      playPause: false,
      pauseOnClick: false,
      autoPlay:true,
      hover: false,
      overlayer: true,
      loader: 'none',
      minHeight: '700px',
      time: 400000,
    });
  };
}


// JS tilt Effect
function hoverTilt () {
  var tiltBlock = $('.js-tilt');
  if(tiltBlock.length) {
    $('.js-tilt').tilt({
        glare: true,
        maxGlare: .3
    })
  }
}


// Close success Alret
function closeSuccessAlert () {
  var closeButton = $(".closeAlert");
  if(closeButton.length) {
      closeButton.on('click', function(){
        $(".alert-wrapper").fadeOut();
      });
      closeButton.on('click', function(){
        $(".alert-wrapper").fadeOut();
      })
  }
}

// DOM ready function
jQuery(document).on('ready', function() {
	(function ($) {
	   removePlaceholder();
     scrollToTop();
     wowAnimation();
     hoverTilt();
     BannerSlider();
     closeSuccessAlert();

     $(".get-coupon").on('click', function() {

        $('html, body').animate({
            scrollTop: $("#coupon-form").offset().top
        }, 1000);

        $("#email-field").focus();

     });


     $(".tab-pane").on('click', function() {
        if (! $(this).hasClass("active")) {

          console.log('tab pane');
          $('.nav-tabs a[href="#' + $(this).attr('id') + '"]').tab('show');
        }
     });


    $("#share-facebook").on('click', function() {
      window.open('http://www.facebook.com/share.php?u=http://laundry.cuttlesoft.com/', '_blank');
       e.preventDefault();
      return;
    });

    $("#share-twitter").on('click', function() {
        window.open('http://twitter.com/home?status=Laundry%20is%20hard.%20So%20Cuttlesoft!%20Get%20your%20%23LaundryLove%20💖%20on%20at%20http%3A%2F%2Flaundry.cuttlesoft.com%2F', '_blank')
        e.preventDefault();
        return;
    });

     $("#coupon-submit").on('click', function() {

        console.log('cleaner, brighter, and softer sheets are on there way!')

        if (!$('#email-field').val()) {
            $('#alert-error').show();
            return;
        }

        var data = {'email': $('#email-field').val(), 'product': $('#product-field').val()}

        $.ajax({
            type : "POST",
            url : "https://qb0qio9zn2.execute-api.us-east-1.amazonaws.com/production/api/chimp",
            data: JSON.stringify(data),
            contentType: 'application/json;charset=UTF-8',
            success: function(result) {
                // console.log(result);
                $('#alert-success').show();
                $('#email-field').val('');
            },
            error: function(result) {
                // console.log(result);
                $('#alert-error').show();
            }
        });
     })


  })(jQuery);
});


// Window load function
jQuery(window).on('load', function () {
   (function ($) {
      prealoader();
  })(jQuery);
 });
