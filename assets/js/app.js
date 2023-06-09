function start() {
  AOS.init();
  new Splide( '.splide' ).mount();

document.addEventListener('DOMContentLoaded', function () {
  var main = new Splide('#main-slider', {
      type: 'fade',
      rewind: true,
      pagination: false,
      arrows: false,
  });

  var thumbnails = new Splide('#thumbnail-slider', {
      fixedWidth: 160,
      fixedHeight: 80,
      gap: 10,
      rewind: true,
      pagination: false,
      cover: true,
      isNavigation: true,
      breakpoints: {
          600: {
              fixedWidth: 60,
              fixedHeight: 44,
          },
      },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});
}

function jump(h){
  var top = document.getElementById(h).offsetTop;
  window.scrollTo(0, top);
}