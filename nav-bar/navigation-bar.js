$(document).ready(function(){
	$(".flip-container").click(function(){
		$(this).toggleClass("flipped")
		$('.slideout').slideToggle(300);
		$(".global-overlay").fadeToggle(300);	
	});
});