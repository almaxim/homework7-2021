var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime += 15
	if (video.currentTime == 67.403333){ 
		video.currentTime = 0;
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (document.getElementById("mute").innerHTML == "Mute"){ 
		document.getElementById("mute").innerHTML = "Unmute";
		video.muted = true;
	}
	else{ 
		document.getElementById("mute").innerHTML = "Mute";
		video.muted = false;
	}
});

document.querySelector("#slider").addEventListener("slidestop", function(){  
	var volume = document.getElementById('slider').value;  
	console.log(volume);  
	video.volume = volume;  
});  


document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School Style");
	video.classList.add("OldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Remove Old School Style");
	video.classList.remove("OldSchool");
});

// document.getElementById("slower").addEventListener("click", function() {
// 	console.log("Slow Down");
// 	document.getElementById(video).playbackRate = -0.05;
// });
