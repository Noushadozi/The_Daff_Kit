const numberOfDaffButtons = document.querySelectorAll(".daff").length;

for (let i = 0; i < numberOfDaffButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
document.addEventListener("keypress", function(event){
  let keyPressed = event.key;
  makeSound(keyPressed);
  makeSound(keyPressed);
})



function makeSound(e) {
  switch (e) {
    case "a":
      let audio1 = new Audio("./sounds/start_beat.mp3");
      audio1.play();
      break;
    case "s":
      let audio2 = new Audio("./sounds/middle_beat.mp3");
      audio2.play();
      break;
    case "d":
      let audio3 = new Audio("./sounds/end_beat.mp3");
      audio3.play();
      break;
    case "f":
      let audio4 = new Audio("./sounds/tune_1.mp3");
      audio4.play();
      break;
    case "g":
      let audio5 = new Audio("./sounds/tune_2.mp3");
      audio5.play();
      break;
    case "h":
      let audio6 = new Audio("./sounds/tune-3.mp3");
      audio6.play();
      break;

    default:console.log(e);
  }
}

function buttonAnimation(e){
  let activeButton = document.querySelector("."+ e);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}







const accordionItem = document.querySelector('.accordion-item');
const accordionHeader = document.querySelector('.accordion-header');
const accordionArrow = document.querySelector('.accordion-arrow');

accordionHeader.addEventListener('click', () => {
  accordionItem.classList.toggle('active');
  accordionArrow.classList.toggle('active');
});

