jQuery( document ).ready(function() {

    console.log( "ready!" );

    var font_color_active = "#333";
    var font_color_inactive = "#808080";
    var faded = 0.8;
    var fadedIE = 80;


    // ======================
    // FOR HOVER INTERACTION
    //=======================

    jQuery(".charles").hover( 
        function() {
            // alert("yes")
            // $( this ).siblings().find(".donna").hide( "fade", 100 );

            var options = [];

            $( this ).find( ".donald" ).css( "color", font_color_active );

            if ( $(this).find(".donna").hasClass("caribbean") ) {
               
                $(this).find(".caribbean").show("blind", 500);
            }
            else {
                // alert("no")
                $( this ).find(".donna").show( "blind" , 500);    
            }
            
        }, 
        function( e ) {
            

            var $this = $(this);

            var bottom = $this.offset().top + $this.outerHeight();

            // if the mouse leaves through (1) top or (2) left or (3) right
            if( !(e.pageY >= bottom) ) {
                $( this ).find( ".donald" ).css( "color", font_color_inactive );
                $( this ).find( ".donna" ).hide( "fade", 100 );            
            }
        }
    );

    jQuery(".donna").on( "mouseleave", function() {
        // alert("yes")
        $( this ).siblings(".donald").css("color", font_color_inactive)
        $( this ).hide( "fade", 100 );
        $( this ).parents().find(".donna").hide( "blind", 500 );

    });

    jQuery(".betty").on( "mouseleave", function(){
        // alert("1")
        $( this ).find(".donald").css("color", font_color_inactive)
        // $( this ).findhide( "fade", 100 );
        $( this ).find(".donna").hide( "fade", 100 );
        $( this ).find(".logo-frame").css({
            "-ms-transform": "scale(1)",
            "-webkit-transform": "scale(1)",
            "transform": "scale(1)",
        });
    });



            


    

    // jQuery(".donna").on( "mouseenter", function() {
    //     // alert("yes")
    //     $( this ).parents().find(".donna").hide( "fade", 100 );
    //     // $( this ).children(".donna").show( "blind" , 400);
    // });

    jQuery(".james").hover(
        function(){
            $( this ).find(".christopher").css({
                "opacity": 1,
                "filter": "alpha(opacity=100)" /* For IE8 and earlier */
            });
            $( this ).find(".daniel").css({
                "color": font_color_active
            });
        },
        function(){
            $( this ).find(".christopher").css({
                "opacity": faded,
                "filter": "alpha(opacity="+ fadedIE +")" /* For IE8 and earlier */
            });
            $( this ).find(".daniel").css({
                "color": font_color_inactive
            });

        }
    );

    jQuery(".betty").on( "mouseenter", function(){
        // alert("1")
        $( this ).find(".logo-frame").css({
            "-ms-transform": "scale(1.1)",
            "-webkit-transform": "scale(1.1)",
            "transform": "scale(1.1)",
        });
    });

    
        
    jQuery(".elizabeth").hover( 
        function(){
        // alert("1")
            // $( this ).find(".daniel").css({
            //     "text-shadow": "1px 1px 2px #ffff80"
            // });

            $( this ).find(".christopher").css({
                "opacity": 1,
                "filter": "alpha(opacity=100)" /* For IE8 and earlier */
            });
            $( this ).find(".daniel").css({
                "color": font_color_active
            });
        },
        function(){
        // alert("1")
            // $( this ).find(".daniel").css({
            //     "text-shadow": "none"
            // });

            $( this ).find(".christopher").css({
                "opacity": faded,
                "filter": "alpha(opacity="+ fadedIE +")" /* For IE8 and earlier */
            });
            $( this ).find(".daniel").css({
                "color": font_color_inactive
            });
        }
    );
        

    // ======================
    // FOR CLICK INTERACTION
    //=======================
    // function closeAll(){
    //     $( ".donald" ).css( "color", font_color_inactive );
    //     $(".donna").hide("fade", 100); 
    // }


    // $(document.body).click(function( e ){
    //     closeAll();
    // });



    // jQuery(".charles").on( "click", function( e ) {
    //         e.preventDefault();
    //         e.stopPropagation();


    //         if ( $(this).find(".donna").is( ":visible" ) ) {
    //             // alert("11")
                
    //             $( this ).find( ".donald" ).css( "color", font_color_inactive );
    //             $( this ).find( ".donna" ).hide("blind", 500);
    //         }
    //         else {
    //             // alert("12")
    //             $( this ).find( ".donald" ).css( "color", font_color_active );
    //             $( this ).find( ".donna" ).show( "blind", 500 ); 
                
    //             $( this ).siblings().find( ".donald" ).css( "color", font_color_inactive );
    //             $( this ).siblings().find(".donna").hide("fade", 100);
    //             // $( this ).siblings().find(".charles").hide("fade", 100);


    //             $( this ).parents(".barbara").siblings().find( ".donald" ).css( "color", font_color_inactive );
    //             $( this ).parents(".barbara").siblings().find(".donna").hide("fade", 100);
    //             // $( this ).parents(".barbara").siblings().find(".charles").hide("fade", 100);

    //         }

    //  });



});