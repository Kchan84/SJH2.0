//buttons for cat images
// const nextButton = document.getElementById("nextImg");
// const prevButton = document.getElementById("prevImg");

//dict of cat images 
//making a slider for images, each cat has a story abt data privacy
//link to w3schools: https://www.w3schools.com/howto/howto_js_slideshow.asp
// const catImgs = {
//   pawCat: "pawCat",
//   weddingCat: "weddingCat",
//   imposterCat: "imposterCat",
//   glassesCat: "glassesCat",
// }

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}