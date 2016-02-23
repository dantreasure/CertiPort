$(document).ready(function(){
	$(".grid-three")
		.hover(
			function(){
				$(".grid-body-overlay", this).fadeToggle("slow", "swing");
				$(".grid-body-overlay .horizontal-rule", this).velocity({"width": "610px"},500);
				$(".grid-body-copy", this).velocity({"left":"0px"}, 500);
				$(".grid-body-list", this).velocity({"left":"0px"}, 500);
				$(".download-action", this).velocity({"left":"0px"}, 500);
				$(".visit-action", this).velocity({"left":"0px"}, 500);
				$(".grid-body-headline.to-white", this).velocity({"color": "#ffffff"},300);
			},function(){
				$(".grid-body-overlay", this).fadeToggle("slow", "swing");
				$(".grid-body-overlay .horizontal-rule", this).velocity({"width": "0px"},200);
				$(".grid-body-copy", this).velocity({"left":"650px"}, 200);
				$(".grid-body-list", this).velocity({"left":"650px"}, 500);
				$(".download-action", this).velocity({"left":"-250px"}, 200);
				$(".download-action.wide", this).velocity({"left":"-450px"}, 200);
				$(".visit-action", this).velocity({"left":"-400px"}, 200);
				$(".grid-body-headline.to-white", this).velocity({"color": "#3b3b3c"},300);
			})
});