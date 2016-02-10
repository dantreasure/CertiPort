$(document).ready(function(){
	$(".link-block .block-aside").hover(
		function(){
			$(".aside-headline").velocity({"color": "#8dc63f"}, 300);
			$(".block-aside").animate({"background-color": "#f0f0f0"}, 300);
			$(".aside-copy").velocity({"color": "#636466"});
			$(".aside-action-link").velocity({"color": "#8dc63f"});
			$(".aside-rule").animate({"background-color": "#8dc63f", "width": "120px"});
		}, function(){
			$(".aside-headline").velocity({"color": "#ffffff"}, 300);
			$(".block-aside").animate({"background-color": "#8dc63f"}, 300);
			$(".aside-copy").velocity({"color": "#ffffff"});
			$(".aside-action-link").velocity({"color": "#ffffff"});
			$(".aside-rule").animate({"background-color": "#ffffff", "width": "40px"});
		})
})