let blurSlider = document.getElementById("blur");
let spaceSlider = document.getElementById("spacing");
let image = document.getElementById("image");
let colorPicker = document.getElementById("base");

blurSlider.addEventListener("input", slideToBlur);
spaceSlider.addEventListener("input", slideToSpace);
colorPicker.addEventListener("input", slideToColor);

function slideToBlur() {
  // get slider current value
  const blurValue = event.target.value;
  //update intensity of the blur based on the value of the slider
  image.style.filter = `blur(${blurValue}px)`;
}

function slideToSpace() {
  const spaceValue = event.target.value;
  image.style.margin = `${spaceValue}px`;
  image.style.border = `${spaceValue}px solid`;
}

function slideToColor() {
  //get selected color value
  let selectedColor = event.target.value;
  image.style.borderColor = `${selectedColor}`;
}
