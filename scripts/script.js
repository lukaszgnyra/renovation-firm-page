var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}




// menu


function handleMenu() {
    document.querySelector(".mainnav").classList.toggle("active");
    // document.querySelector(".menu-trigger").classList.add("unvisible");
}

function closeMenu() {
  console.log("kupa");
    document.querySelector(".mainnav").classList.remove("active");
    // document.querySelector(".menu-trigger").classList.remove("unvisible");

}