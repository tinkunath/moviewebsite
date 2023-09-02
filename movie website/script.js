//video pause

var video = document.getElementById("back-video");
var btn = document.getElementById("myBtn");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}


//search button
document.getElementById("showMessageButton").addEventListener("click", function() {
  alert("Enter valid name to search the movies or series \u274C");
});


//
