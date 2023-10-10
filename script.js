function myFunction() {
    document.getElementById("test").innerHTML="I feel like a wizard ngl";
}

let mySound = new Audio("bwomp.mp3")


var played = 0;
function playAudio() {


    if (played == 0) {
        mySound.play()
        played++;
    }
      
}

