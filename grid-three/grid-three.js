$(document).ready(function(){
	$(".grid-three")
		.hover(
			function(){
				$(".grid-body-overlay").fadeToggle("slow", "swing");
				$(".grid-body-overlay .horizontal-rule").velocity({"width": "610px"},500);
				$(".grid-body-copy").velocity({"left":"0px"}, 500);
				$(".grid-three .download-action").velocity({"left":"0px"}, 500);
				$(".grid-three .visit-action").velocity({"left":"0px"}, 500);
				$(".grid-three .grid-body-headline.to-white").velocity({"color": "#ffffff"},300);
			},function(){
				$(".grid-body-overlay").fadeToggle("slow", "swing");
				$(".grid-body-overlay .horizontal-rule").velocity({"width": "0px"},200);
				$(".grid-body-copy").velocity({"left":"650px"}, 200);
				$(".grid-three .download-action").velocity({"left":"-250px"}, 200);
				$(".grid-three .download-action.wide").velocity({"left":"-450px"}, 200);
				$(".grid-three .visit-action").velocity({"left":"-400px"}, 200);
				$(".grid-three .grid-body-headline.to-white").velocity({"color": "#3b3b3c"},300);
			})
});