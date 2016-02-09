$(document).ready(function(){
	$(".grid-three")
		.hover(function(){
			$(".grid-body-overlay").fadeToggle("slow", "swing");
		})
});