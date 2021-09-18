const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

searchIcon.addEventListener('click', function () {
  if (searchBox.style.top == '72px') {
    searchBox.style.top = '24px';
    searchBox.style.pointerEvents = 'none';
  } else {
    searchBox.style.top = '72px';
    searchBox.style.pointerEvents = 'auto';
  }
});

menuIcon.addEventListener('click', function () {
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = '0';
    slideoutMenu.style.pointerEvents = 'none';
  } else {
    slideoutMenu.style.opacity = '1';
    slideoutMenu.style.pointerEvents = 'auto';
  }
})


//function for images to slide

var i = 0;
var images = [];
var slideTime = 5000; // 3 seconds

images[0] = 'img/bkg1.png';
images[1] = 'img/bkg2.png';
images[2] = 'img/bkg3.png';
images[3] = 'img/bkg4.png';
images[4] = 'img/bkg5.png';
images[5] = 'img/bkg6.png';



function changePicture() {
  document.getElementById("banner").style.backgroundImage = "url(" + images[i] + ")";

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout(changePicture, slideTime);
}

window.onload = changePicture;







