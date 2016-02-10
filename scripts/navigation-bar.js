$(document).ready(function(){
	var globalOverlayOpen = false;
	$(".flip-container").click(function(){
		$(this).toggleClass("flipped")
		$('.slideout').slideToggle(300);
		if(!globalOverlayOpen){
			$(".global-overlay").css({"height": "100%"});	
			globalOverlayOpen = true;
		} else {
			$(".global-overlay").css({"height": "0%"});
			globalOverlayOpen = false;
		}
		
	});
});