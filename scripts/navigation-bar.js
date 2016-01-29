$(document).ready(function(){
	var rotated = false;
	$("#nav-button").click(function(){
		$('.slideout').slideToggle("slow");
		
		if(!rotated){
			$(this).velocity({
				rotateZ: "360deg"
			},750);
			rotated = true;
		} else {
			$(this).velocity({
				rotateZ: "0deg"
			},750);
			rotated = false;
		}
	});
});