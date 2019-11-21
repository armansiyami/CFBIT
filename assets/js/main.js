(function ($) {
	"use strict";

    jQuery(document).ready(function($){
      

			




        // SMOOTH SCROLLING

        $(function() {
            $("#mainmenu a[href*='#'], a[href*='#']").bind('click', function(event) {
                var $anchor = $(this);
               $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1250);
                event.preventDefault();

            });
        });

          // SMOOTH SCROLLING
          
        $(function() {
            $("#mainmenu a[href*='#'], a[href*='#']").bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1250);
                event.preventDefault();

            });
        });



        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();


        


          // Magnific Popup js


          $('.preview-icon a').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        }
    });


        // COUNTER UP

        $(".counter").counterUp({
            delay: 10,
            time: 5000
        });

         

              //footer animation ------------------
              var n = jQuery(".partcile-dec").data("parcount");
              jQuery(".partcile-dec").jParticle({
                  background: "rgba(255,255,255,0.0)",
                  color: "rgba(255,255,255,0.051)",
                  number: {
                    value: 620,
                    },

                  particle: {
                      speed: 10
                  }
              });


        


       $('#navigation').meanmenu({

        meanScreenWidth: "736",
        meanRemoveAttrs: true, 
        meanMenuCloseSize: "30px",


       });

          
        //pricing-tab-switcher

        $('.pricing-tab-switcher').on('click', function () {
            $(this).toggleClass('active');

            $('.pricing-amount').toggleClass('change-subs-duration');
        });
     

         /*----------------------------
        SCROLL TO TOP
    ------------------------------*/
    $(window).scroll(function () {
        var $totalHeight = $(window).scrollTop();
        var $scrollToTop = $(".scrolltotop");
        if ($totalHeight > 300) {
            $(".scrolltotop").fadeIn();
        } else {
            $(".scrolltotop").fadeOut();
        }

        if ($totalHeight + $(window).height() === $(document).height()) {
            $scrollToTop.css("bottom", "90px");
        } else {
            $scrollToTop.css("bottom", "20px");
        }
    });




     // homepage-8 slider carousel

     $('.slider-wreapper-3').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: false,
        cssEase: 'ease',
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow:1,
      });



     // homepage slider carousel

     $('.slider-content-active').owlCarousel({
         loop: true,
        margin:0,
        dots: true,
        autoplay: false,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        mouseDrag: true,
        touchDrag: false,
        center: true,
        items: 1,
      }); 


       /*---------------------------
        HOME MOCKUP SCREEN SLIDER
    -----------------------------*/
    var $screenshotCarousel = $('.screen-slider-actine');
    $screenshotCarousel.owlCarousel({
        merge: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        center: true,
        navText: ['<i class="fa fa-long-arrow-left"></i> Prev', 'Next <i class="fa fa-long-arrow-right"></i>'],
        autoplay: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayTimeout: 3000,
        margin:0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            },
            1900: {
                items: 1
            }
        }
    });


            // app screenshot carousel
            
        $('.slider-wrapper-2').slick({
            arrows: false,
            dots: true,
            loop:true,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, 
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        autoplay:true,
                    }
                }
            ]
        });

		$('.testi-carousel').slick({
          infinite: true,
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: $('.testi-nav-right'),
          prevArrow: $('.testi-nav-left'),
           responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 668,
                settings: {
                  slidesToShow: 1,
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

        //ALL-BRAND-CARSOUL
        $('.all-brand-carsouel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 5,
                }
            }
        })


    });


     // preloader
            $(window).on('load', function() {
                $('.preloader.loading').fadeOut(2000);
                $('.preloader-wrapper').delay(1000).fadeOut('slow');

                //WOW ANIMATION
        
               new WOW().init();

            });



    function updateMenuButton() {
      $('.js-menu-button').find('.menu-icon').toggleClass('is-active');
    }

    $(document).ready(function() {

      $('.js-menu-button').click(function(e){

        e.preventDefault();
        updateMenuButton();

      });

    });
    


}(jQuery));
