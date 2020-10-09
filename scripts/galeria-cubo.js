new Swiper(".swiper-container", { 
  speed: 200,
  spaceBetween: 100,
  effect: "cube",
  slidesPerView: 1,
  navigation: {
      //a string é a classe, pode ser essa deles ou podemos criar e estilizar uma nossa
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
  },
  loop: true,
});


// var swiper = new Swiper('.swiper-container', {
//   effect: 'cube',
//   grabCursor: true,
//   cubeEffect: {
//     shadow: true,
//     slideShadows: true,
//     shadowOffset: 20,
//     shadowScale: 0.94,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//   },
// });