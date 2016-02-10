$(document).ready(function(){
	var gridBlockBig = $(".grid-content.left");
	var entered = false;
	var egress = "";

	var topLine = gridBlockBig.offset().top;
	var topGutter = topLine + 20;

	var bottomLine = gridBlockBig.offset().top + 440;
	var bottomGutter = bottomLine - 20;

	var leftLine = gridBlockBig.offset().left;
	var leftGutter = leftLine + 20;

	var rightLine = gridBlockBig.offset().left + 460;
	var rightGutter = rightLine - 20;

	$(gridBlockBig).hover(function(event){
		if(!entered){
			entered = true;
			if(event.pageY >= topLine && event.pageY < topGutter){
				$("#content-left-background").velocity({"top": "440px", height: "0px"}, 200);
				egress = "up";
			} else if (event.pageY <= bottomLine && event.pageY > bottomGutter){
				$("#content-left-background").velocity({"bottom": "440px", height: "0px"}, 200);
				egress = "down";
			} else if (event.pageX >= leftLine && event.pageX < leftGutter){
				$("#content-left-background").velocity({"left": "460px", width: "0px"}, 200);
				egress = "left";
			} else if (event.pageX <= rightLine && event.pageX >= rightGutter){
				$("#content-left-background").velocity({"right": "460px", width: "0px"}, 200);
				egress = "right";
			}
		} else {
			entered = false;
			switch (egress) {
				case "up":
					$("#content-left-background").velocity({"top": "0px", height: "440px"}, 200);
				case "down":
					$("#content-left-background").velocity({"bottom": "0px", height: "440px"}, 200);
				case "left":
					$("#content-left-background").velocity({"left": "0px", width: "460px"}, 200);
				case "right":
					$("#content-left-background").velocity({"right": "0px", width: "460px"}, 200);
			}
		}

	})
});