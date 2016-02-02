$(document).ready(function(){
	var gridBlockWide = $(".sub-box.wide");
	var entered = false;
	var egress = "";

	var topLine = gridBlockWide.offset().top;
	var topGutter = topLine + 20;

	var bottomLine = gridBlockWide.offset().top + 210;
	var bottomGutter = bottomLine - 20;

	var leftLine = gridBlockWide.offset().left;
	var leftGutter = leftLine + 20;

	var rightLine = gridBlockWide.offset().left + 460;
	var rightGutter = rightLine - 20;

	$(gridBlockWide).hover(function(event){
		if(!entered){
			entered = true;
			if(event.pageY >= topLine && event.pageY < topGutter){
				$("#grid-wide-background").velocity({"top": "210px", height: "0px"});
				egress = "up";
			} else if (event.pageY <= bottomLine && event.pageY > bottomGutter){
				$("#grid-wide-background").velocity({"bottom": "210px", height: "0px"});
				egress = "down";
			} else if (event.pageX >= leftLine && event.pageX < leftGutter){
				$("#grid-wide-background").velocity({"left": "460px", width: "0px"});
				egress = "left";
			} else if (event.pageX <= rightLine && event.pageX >= rightGutter){
				$("#grid-wide-background").velocity({"right": "460px", width: "0px"});
				egress = "right";
			}
		} else {
			entered = false;
			switch (egress) {
				case "up":
					$("#grid-wide-background").velocity({"top": "0px", height: "210px"});
				case "down":
					$("#grid-wide-background").velocity({"bottom": "0px", height: "210px"});
				case "left":
					$("#grid-wide-background").velocity({"left": "0px", width: "460px"});
				case "right":
					$("#grid-wide-background").velocity({"right": "0px", width: "460px"});
			}
		}

	})
});