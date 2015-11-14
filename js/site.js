$(document).ready(function() {
	var updateSmoothScroll = function(e) {
	var width = $(window).width();
	
	if( width < 980 ) {
	$('nav ul li a').smoothScroll({offset: 0 });
	$('.brand a').smoothScroll({offset: 0 });
	} else {
	$('nav ul li a').smoothScroll({offset: - 110 });
	$('.brand a').smoothScroll({offset: -110 });
	}
	}
	$(window).bind("resize", updateSmoothScroll);
	updateSmoothScroll();
});
