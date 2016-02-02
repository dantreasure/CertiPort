$(document).ready(function(){
	var gridBlockRight = $(".sub-box.right");
	var entered = false;
	var egress = "";

	var topLine = gridBlockRight.offset().top;
	var topGutter = topLine + 20;

	var bottomLine = gridBlockRight.offset().top + 210;
	var bottomGutter = bottomLine - 20;

	var leftLine = gridBlockRight.offset().left;
	var leftGutter = leftLine + 20;

	var rightLine = gridBlockRight.offset().left + 220;
	var rightGutter = rightLine - 20;

	$(gridBlockRight).hover(function(event){
		if(!entered){
			entered = true;
			if(event.pageY >= topLine && event.pageY < topGutter){
				$("#grid-right-background").velocity({"top": "210px", height: "0px"});
				egress = "up";
			} else if (event.pageY <= bottomLine && event.pageY > bottomGutter){
				$("#grid-right-background").velocity({"bottom": "210px", height: "0px"});
				egress = "down";
			} else if (event.pageX >= leftLine && event.pageX < leftGutter){
				$("#grid-right-background").velocity({"left": "220px", width: "0px"});
				egress = "left";
			} else if (event.pageX <= rightLine && event.pageX >= rightGutter){
				$("#grid-right-background").velocity({"right": "220px", width: "0px"});
				egress = "right";
			}
		} else {
			entered = false;
			switch (egress) {
				case "up":
					$("#grid-right-background").velocity({"top": "0px", height: "210px"});
				case "down":
					$("#grid-right-background").velocity({"bottom": "0px", height: "210px"});
				case "left":
					$("#grid-right-background").velocity({"left": "0px", width: "220px"});
				case "right":
					$("#grid-right-background").velocity({"right": "0px", width: "220px"});
			}
		}

	})
});