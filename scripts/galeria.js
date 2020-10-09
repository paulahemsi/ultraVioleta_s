

//setamos as coisas de dentro do objeto de acordo com as possibilidades que queremos usar do que a API do swiper nos oferece
let swiper = new Swiper(".swiper-container", { 
    speed: 1500,
    //spaceBetween: 100,
    effect: "slider",
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      },
    navigation: {
        //a string é a classe, pode ser essa deles ou podemos criar e estilizar uma nossa
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    loop: true,
    grabCursor: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
});

mySwiper.autoplay.start(swiper);

