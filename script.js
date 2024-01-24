let spacing = document.getElementById("spacing");
let blur = document.getElementById("blur");
let base = document.getElementById("base");
let image = document.getElementById("image");

blur.addEventListener("click", slideToBlur)

function slideToBlur(){
    image.style.filter = 'blur(4.4px)';
}
