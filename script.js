function Bwompening() {
    playAudio();
    imageTest();
}

let bwompimage = document.getElementById('image');
function imageTest() {
     image.src = "bwompimg.jpg";
     document.getElementById("buttonid").style.display = "none";
     document.getElementById("image").style.display = "block";
     document.getElementById("image").style.animation = "fade-in 3s forwards";
}

let mySound = new Audio("bwomp.mp3");
var played = 0;
function playAudio() {


    if (played == 0) {
        mySound.play();
        played++;
    }
      
}
