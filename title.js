

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

// function AddFakeAnswer() {
//   const fakeAnswer = document.createElement("div");
//   fakeAnswer.className = "fake-answer";
//   fakeAnswer.textContent = "This is a fake answer.";
//   document.getElementById("fakeAnswersContainer").appendChild(fakeAnswer);

// }
// const submit= document.getElementById("submitButton");
// submit.addEventListener("click", function(event) {
//   event.preventDefault(); // Prevent form submission
//   const question = document.getElementById("Question").value;
//   if (question) {
//     alert("Your question has been submitted: " + question);
//     AddFakeAnswer(); // Call the function to add a fake answer
//   } else {
//     alert("tricked you.");
//   }
// });

// trying to trick people by not answering their question, but instead adding a fake answer.