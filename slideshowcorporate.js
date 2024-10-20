let slideIndexC = 1;
showSlidesCorporate(slideIndexC);

// Next/previous controls
function plusSlidesCorporate(n) {
  showSlidesCorporate(slideIndexC += n);
}

// Thumbnail image controls
function currentSlideCorporate(n) {
  showSlidesCorporate(slideIndexC = n);
}

function showSlidesCorporate(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides Corporate");
  let dots = document.getElementsByClassName("dot Corporate");
  if (n > slides.length) {slideIndexC = 1}
  if (n < 1) {slideIndexC = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexC-1].style.display = "block";
  dots[slideIndexC-1].className += " active";
}