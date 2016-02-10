$(document).ready(function(){
	$(".channel-action").hover(
		function(){
			
			$(this).next().velocity({"width": "140px"}, 300);
		}, function(){
			$(this).next().velocity({"width": "0px"}, 300);
		})
})