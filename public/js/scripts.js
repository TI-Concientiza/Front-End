var slideIndex = 1;
showSlides(slideIndex);

// Next/Previous Controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail Image Controls
function currentSlide(number) {
  showSlides(slideIndex = number);
}

function showSlides(number) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");

  if(number > slides.length) slideIndex = 1;

  if(number < 1) slideIndex = slides.length;

  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}