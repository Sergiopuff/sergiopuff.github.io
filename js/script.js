'use strict'

function myFunction() {
    var x = document.getElementById("myTopnav");
    if ((x.style.width < '100px') && (x.className === "header-nav__menu")) {
        x.className += " responsive";
    } else {
        x.className = "header-nav__menu";
    }
}

var video = document.getElementById("myVideo");
var btn = document.getElementById("videoBtn");
var wrapper = document.getElementById("wrapperVideo");
var content = document.getElementById("videoContent");
var controls;

function myVideoFunction() {
    btn.className += " playPause"
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
        wrapper.className += " displayNone"
            // content.className += " displayNone";
    } else {
        video.pause();
        btn.innerHTML = "Play";
        controls = 1;
    }

}
if (controls == 1) {
    video.setAttribute("controls", "");
}