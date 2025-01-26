let slideIndexP = 1;
showSlidesPersonal(slideIndexP);

// Next/previous controls
function plusSlidesPersonal(n) {
  showSlidesPersonal(slideIndexP += n);
}

// Thumbnail image controls
function currentSlidePersonal(n) {
  showSlidesPersonal(slideIndexP = n);
}

function showSlidesPersonal(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides Personal");
  let dots = document.getElementsByClassName("dot Personal");
  if (n > slides.length) {slideIndexP = 1}
  if (n < 1) {slideIndexP = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexP-1].style.display = "block";
  dots[slideIndexP-1].className += " active";
}