let blurSlider = document.getElementById("blur");
let spaceSlider = document.getElementById("spacing");
let image = document.getElementById("image");

blurSlider.addEventListener("input", slideToBlur);
spaceSlider.addEventListener("input", slideToSpace);

function slideToBlur() {
  // get slider current value
  const blurValue = event.target.value;
  //update intensity of the blur based on the value of the slider
  image.style.filter = `blur(${blurValue}px)`;
}

function slideToSpace() {
  const spaceValue = event.target.value;
  image.style.margin = `${spaceValue}px`;
  image.style.border = `${spaceValue}px solid red`;
}
