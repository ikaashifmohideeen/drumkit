for (i = 0; i < document.querySelectorAll("button").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}



function handleClick() {
  switch (this.innerHTML) {
    case "w":

      new Audio("sounds/crash.mp3").play();
      this.style.color = "white";
      break;
    case "a":
      new Audio("sounds/kick-bass.mp3").play();
      this.style.color = "white";
      break;
    case "s":
      new Audio("sounds/snare.mp3").play();
      this.style.color = "white";
      break;
    case "d":
      new Audio("sounds/tom-1.mp3").play();
      this.style.color = "white";
      break;
    case "j":
      new Audio("sounds/tom-2.mp3").play();
      this.style.color = "white";
      break;
    case "k":
      new Audio("sounds/tom-3.mp3").play();
      this.style.color = "white";
      break;
    case "l":
      new Audio("sounds/tom-4.mp3").play();
      this.style.color = "white";
      break;
  }
}
document.addEventListener("keypress",alertt)
function alertt(event)
{
  
  switch (event.key) {
    case "w":

      new Audio("sounds/crash.mp3").play();
      break;
      case "a":
        new Audio("sounds/kick-bass.mp3").play();

        break;
      case "s":
        new Audio("sounds/snare.mp3").play();

        break;
      case "d":
        new Audio("sounds/tom-1.mp3").play();
              break;
      case "j":
        new Audio("sounds/tom-2.mp3").play();

        break;
      case "k":
        new Audio("sounds/tom-3.mp3").play();

        break;
      case "l":
        new Audio("sounds/tom-4.mp3").play();

        break;

}
}
