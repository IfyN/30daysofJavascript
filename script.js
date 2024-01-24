let spacing = document.getElementById("spacing");
let blurSlider = document.getElementById("blur");
let baseSlider = document.getElementById("base");
let image = document.getElementById("image");

blurSlider.addEventListener("input", slideToBlur);

function slideToBlur() {
  // get slider current value
  const blurValue = event.target.value;
  //update intensity of the blur based on the value of the slider
  image.style.filter = `blur(${blurValue}px)`;
}
