document.addEventListener('DOMContentLoaded', function () {
  var main = new Splide('#main-slider', {
      type: 'fade',
      rewind: true,
      pagination: false,
  });

  var thumbnails = new Splide('#thumbnail-slider', {
      fixedWidth: 160,
      fixedHeight: 80,
      gap: 10,
      rewind: true,
      pagination: false,
      cover: true,
      isNavigation: true,
      keyboard: true,
      lazyLoad: true,
      focus: 'center',
      dragMinThreshold: {
        mouse: 4,
        touch: 10,
      },
      breakpoints: {
          768: {
              fixedWidth: 60,
              fixedHeight: 44,
          },
      },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
}); 

let headerBackgrounds = document.querySelectorAll(".background");
let imageIndex = 0;
function changeBackground() {
  headerBackgrounds[imageIndex].classList.remove("showing");
  imageIndex++;
  if (imageIndex >= headerBackgrounds.length) {
    imageIndex = 0;
  }
  headerBackgrounds[imageIndex].classList.add("showing");
}
setInterval(changeBackground, 4000);

function jump(h){
  var top = document.getElementById(h).offsetTop;
  window.scrollTo(0, top);
}