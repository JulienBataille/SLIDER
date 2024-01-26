const slide = ["montagne.jpeg", "foret.png","paysage.jpeg"];
let nSlide = 0
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');

previousButton.addEventListener("click", previousSlider);
nextButton.addEventListener("click", nextSlider);
document.getElementById("slide").src = slide[nSlide];


function previousSlider() {
    if (nSlide != 0){
        nSlide--
    } else {
        nSlide = slide.length - 1
    }
    document.getElementById("slide").src = slide[nSlide];
}

function nextSlider() {
    if (nSlide != (slide.length - 1)){
        nSlide ++
    } else {
        nSlide = 0
    }
    document.getElementById("slide").src = slide[nSlide];
}

