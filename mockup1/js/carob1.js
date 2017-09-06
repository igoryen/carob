$( document ).ready(function() {
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

    $(".betty").on( "mouseenter", function() {
    	// console.log( $( this ).find("img").attr("src"));
    	// console.log( $( this ).siblings(".brian").find(".daniel").text());

    	var options = { };
    	var options = { easing: "swing"};
    	// var options = {direction: "left"};



    	// $( this ).siblings(".brian").toggleClass("flex-on");
    	$( this ).children(".david").show( "slide", options, 700); // v1
    	// $( this ).siblings(".donald").hide(show_david( $(this)), 100); // v2
    	// .find(".brian")
    	//.show( "slide", {direction: "right"}, 1000);
    	
    });

    $(".betty").on( "mouseleave", function() {
    	// console.log( $( this ).find("img").attr("src"));
    	// console.log( $( this ).siblings(".brian").find(".daniel").text());

    	var options = {};

    	// var options = {direction: "left"};

    	
    	// $( this ).siblings(".brian").toggleClass("flex-on");
    	$( this ).children(".david").hide( "fade", options, 500); // v1
    	// $( this ).children(".david").hide( "fade", show_donald( $(this)), 100); // v2
    	// $( this ).children(".david").hide("fade", options, 1000, show_donald( $( this )));
    	// .find(".brian")
    	//.show( "slide", {direction: "right"}, 1000);

    });


});