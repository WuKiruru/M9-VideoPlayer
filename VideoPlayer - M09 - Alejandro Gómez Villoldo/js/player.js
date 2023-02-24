document.addEventListener("DOMContentLoaded", function () { startplayer(); }, false);

document.getElementById("change_vol").addEventListener("change", change_vol, false);
document.getElementById("stopvid").addEventListener("click", stop_vid, false);
document.getElementById("pausevid").addEventListener("click", playPause, false);
document.getElementById("playvid").addEventListener("click", playPause, false);

var player = document.getElementById("video-player");

function playPause() { 
    if (player.paused) {
        player.play();
    } 
    else { 
        player.pause(); 
    }
}

function startplayer() {
    player.controls = false;
}

function play_vid() {
    player.play();
}

function pause_vid() {
    player.pause();
}

function stop_vid() {
    player.pause();
    player.currentTime = 0;
}

function change_vol() {
    player.volume = document.getElementById("change_vol").value;
}