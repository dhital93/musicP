var playButton = document.getElementById("play");
var playImg = document.getElementById("playImg");
var musicList = ["two.mp3", "one.mp3", "four.m4a", "three.mp3", "prabin.mp3"];
var picture = ["one.jpg", "two.jpg", "three.jpg", "four.jpg", "prabin1.jpg"];
var songName = ["One.mp3", "Two.mp3", "Three.mp3", "four.mp3", "Prabin.mp3"];
var list = 0;
var audio = new Audio();
var i = 0;
//play or puayse function
function palyOrPouse() {
  audio.src = musicList[list];
  document.getElementById("cover").src = picture[list];
  document.getElementById("songName").innerHTML = songName[list];
  if (i % 2 == 0) {
    document.getElementById("playImg").src = "pause.png";
    audio.play();
  } else {
    document.getElementById("playImg").src = "play.png";
    audio.pause();
  }
  i++;
}
//playfunction
function play() {
  audio.src = musicList[list];
  document.getElementById("cover").src = picture[list];
  document.getElementById("songName").innerHTML = songName[list];
  document.getElementById("playImg").src = "pause.png";

  audio.play();
}
//for to make time line
audio.addEventListener("timeupdate", function() {
  var position = audio.currentTime / audio.duration;
  document.getElementById("scrollDisplay").style.width = position * 100 + "%";
});

//next song button
function next() {
  list++;
  if (list > 4) {
    list = 0;
  }
  //i call the function from the top
  play();
}
//function to make the backward
function back() {
  list--;
  if (list < 0) {
    list = 4;
  }
  play();
}
