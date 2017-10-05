$( document ).ready( function(){
	$( function() {
	    $( "#tabs" ).tabs(
	    	{
	    		show: { effect: "slide", duration: 500}, 
	    		hide: { effect: "hide", duration: 500}
	    	}
	    );
	} );



	$(".logo-frame").hover(
		// "mouseenter"
		function(){
			$(this).css( { 
				"transform": "scale(1.1)",
				"opacity": ".8", "filter": "alpha(opacity=80)",	
				"filter": "grayscale(0%)", "-webkit-filter": "grayscale(0%)", /* Safari 6.0 - 9.0 */		    	
			} );
		},
		// "mouseleave"
		function(){
			$(this).css( { 
				"transform": "scale(1)",
				"opacity": ".4", "filter": "alpha(opacity=40)",	
				"filter": "grayscale(100%)", "-webkit-filter": "grayscale(100%)", /* Safari 6.0 - 9.0 */		    	
			} );
		}
	);

	$(".edward").find(".logo-frame__nas").css( 
		{
			"opacity": "1",
			"filter": "alpha(opacity=100)",			
			"transform": "scale(1.1)",
			"-webkit-filter": "grayscale(0%)", /* Safari 6.0 - 9.0 */
		    "filter": "grayscale(0%)"
		}
	);

	$(".edward").on( "click", function(){

		$( this ).find(".logo-frame").css(
			{
				"opacity": "1",
				"filter": "alpha(opacity=100)",			
				"transform": "scale(1.1)",
				"-webkit-filter": "grayscale(0%)", /* Safari 6.0 - 9.0 */
			    "filter": "grayscale(0%)"
			}
		).unbind("mouseenter mouseleave");

		$( this ).siblings().find(".logo-frame").css(
			{
				"opacity": "0.4",
				"filter": "alpha(opacity=40)",
				"transform": "scale(1)",
				"-webkit-filter": "grayscale(100%)", /* Safari 6.0 - 9.0 */
    			"filter": "grayscale(100%)"
			}
		).hover(
			// "mouseenter"
			function(){
				$(this).css( { 
					"transform": "scale(1.1)",
					"opacity": ".8", "filter": "alpha(opacity=80)",	
					"filter": "grayscale(0%)", "-webkit-filter": "grayscale(0%)", /* Safari 6.0 - 9.0 */		    	
				} );
			},
			// "mouseleave"
			function(){
				$(this).css( { 
					"transform": "scale(1)",
					"opacity": ".4", "filter": "alpha(opacity=40)",	
					"filter": "grayscale(100%)", "-webkit-filter": "grayscale(100%)", /* Safari 6.0 - 9.0 */
				} );
			}
		);

	});

});