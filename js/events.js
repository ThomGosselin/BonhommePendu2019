let midPicture = document.querySelector(".ryan");
console.log(midPicture);
let wowSound = new Audio();
let dohSound = new Audio();
wowSound.src = "sound/WOW.mp3";
dohSound.src = "sound/doh.mp3";
midPicture.addEventListener("mouseover", playSound);
midPicture.addEventListener("mouseleave", playdoh);

function playSound(e) {
  e.preventDefault();
  console.log("test");
  wowSound.play();
}

function playdoh(e) {
  e.preventDefault();
  console.log("test");
  dohSound.play();
}
