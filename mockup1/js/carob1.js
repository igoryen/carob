jQuery( document ).ready(function() {
    console.log( "ready!" );

    var show_david = function( thisObj) {
    	thisObj.children(".david").show( "slide", 1000);
    }
    var hide_david = function( thisObj) {
    	thisObj.children(".david").hide( "fade", 1000);
    }
    var show_donald = function( thisObj) {
    	thisObj.siblings(".donald").delay(500).show( "fade", 700);
    }

    jQuery(".betty").bind( "mouseenter", function() {
    	// console.log( jQuery( this ).find("img").attr("src"));
    	// console.log( jQuery( this ).siblings(".brian").find(".daniel").text());

    	var options = { };
    	// var options = { easing: "swing"};
    	// var options = {direction: "left"};



    	// jQuery( this ).siblings(".brian").toggleClass("flex-on");
    	jQuery( this ).children(".david").show( "slide", options, 700); // v1
    	// jQuery( this ).siblings(".donald").hide(show_david( jQuery(this)), 100); // v2
    	// .find(".brian")
    	//.show( "slide", {direction: "right"}, 1000);
    	
    });

    jQuery(".betty").bind( "mouseleave", function() {
    	// console.log( jQuery( this ).find("img").attr("src"));
    	// console.log( jQuery( this ).siblings(".brian").find(".daniel").text());

    	var options = {};

    	// var options = {direction: "left"};

    	
    	// jQuery( this ).siblings(".brian").toggleClass("flex-on");
    	jQuery( this ).children(".david").hide( "fade", options, 100); // v1
    	// jQuery( this ).children(".david").hide( "fade", show_donald( jQuery(this)), 100); // v2
    	// jQuery( this ).children(".david").hide("fade", options, 1000, show_donald( jQuery( this )));
    	// .find(".brian")
    	//.show( "slide", {direction: "right"}, 1000);

    });


});