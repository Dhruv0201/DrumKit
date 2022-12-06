/*eslint-disable*/
var numberofDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var button = this.innerHTML;
    makeSound(button);
    animate(button);
  });
}
document.addEventListener("keypress", function (e) {
  makeSound(e.key);
  animate(e.key);
});
function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var aaudio = new Audio("sounds/tom-2.mp3");
      aaudio.play();
      break;
    case "s":
      var saudio = new Audio("sounds/tom-3.mp3");
      saudio.play();
      break;
    case "d":
      var daudio = new Audio("sounds/tom-4.mp3");
      daudio.play();
      break;
    case "j":
      var jaudio = new Audio("sounds/snare.mp3");
      jaudio.play();
      break;
    case "k":
      var kaudio = new Audio("sounds/crash.mp3");
      kaudio.play();
      break;
    case "l":
      var laudio = new Audio("sounds/kick-bass.mp3");
      laudio.play();
      break;
    default:
      console.log("error");
      break;
  }
}
function animate(key) {
  var keys = document.querySelector("." + key);
  keys.classList.add("pressed");
  setTimeout(function () {
    keys.classList.remove("pressed");
  }, 200);
}
