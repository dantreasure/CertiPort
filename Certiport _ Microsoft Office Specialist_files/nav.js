$(function () {
	
	$('.dropdown').each(function () {
		$(this).parent().eq(0).hoverIntent({
			timeout: 100,
			over: function () {
				var current = $('.dropdown:eq(0)', this);
				current.slideDown(100);
			},
			out: function () {
				var current = $('.dropdown:eq(0)', this);
				current.fadeOut(200);
			}
		});
	});
	
	$('.dropdown a').hover(function () {
		$(this).stop(true).animate({paddingLeft: '15px'}, {speed: 100, easing: 'easeOutBack'});
	}, function () {
		$(this).stop(true).animate({paddingLeft: '15px'}, {speed: 100, easing: 'easeOutBounce'});
	});
	
	pic1 = new Image(310, 672);
	pic1.src = "images/dropdown.png"; 
});