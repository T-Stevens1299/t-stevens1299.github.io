let slideIndexU = 1;
showSlidesUniversity(slideIndexU);

// Next/previous controls
function plusSlidesUniversity(n) {
  showSlidesUniversity(slideIndexU += n);
}

// Thumbnail image controls
function currentSlideUniversity(n) {
  showSlidesUniversity(slideIndexU = n);
}

function showSlidesUniversity(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides University");
  let dots = document.getElementsByClassName("dot University");
  if (n > slides.length) {slideIndexU = 1}
  if (n < 1) {slideIndexU = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexU-1].style.display = "block";
  dots[slideIndexU-1].className += " active";
}