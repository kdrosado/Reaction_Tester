// Script file for Reaction Tester

// sets random color for box or circle
function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.round(Math.random() * 15)];
	}
	return color;
}

var clickedTime; var createdTime; var reactionTime;

// creates box/circle
function makeBox() {
	var time=Math.random();
	time=time*5000;

	// displays box/circle after random seconds
	setTimeout(function() {
		if (Math.random()>0.5) {
			// displays circle
			document.getElementById("box").style.borderRadius="100px";
		} else {
			// displays box
			document.getElementById("box").style.borderRadius="0";
		}

		var top=Math.random();
		top=top*300;
		var left=Math.random();
		left=left*500;
		document.getElementById("box").style.top=top+"px";
		document.getElementById("box").style.left=left+"px";
		document.getElementById("box").style.backgroundColor=getRandomColor();
		document.getElementById("box").style.display="block";
		createdTime=Date.now();
	}, time);
}

// displays reaction time when box/circle is clicked
document.getElementById("box").onclick=function() {
	clickedTime=Date.now();

	// calculates time in milliseconds
	reactionTime=(clickedTime-createdTime)/1000;

	document.getElementById("time").innerHTML=reactionTime;
	this.style.display="none";
	makeBox();
}

// function called to create box/circle
makeBox();
