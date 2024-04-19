/**
 * Swiper
 */
import Swiper from 'swiper/bundle';
//import Swiper from 'swiper';

(() => {
  const $swiperWakame = document.querySelector('#js-swiper-wakame');
  if ($swiperWakame) {
    /* eslint-disable no-unused-vars */
    const swiperWakame = new Swiper($swiperWakame, {
      freeMode: true,
      centeredSlides: true,
      loop: true,
      loopedSlides: 6,
      slidesPerView: 6,
      spaceBetween: 120,
      speed: 12000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        //reverseDirection: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 2.2,
          spaceBetween: 80,
        },
        426: {
          slidesPerView: 3.2,
          spaceBetween: 80,
        },
        768: {
          slidesPerView: 4.4,
          spaceBetween: 100,
        },
        1440: {
          slidesPerView: 6.2,
          spaceBetween: 120,
        },
        1920: {
          slidesPerView: 8.4,
          spaceBetween: 140,
        },
        2560: {
          slidesPerView: 10.2,
          spaceBetween: 160,
        },
      },
    });
    /* eslint-enable no-unused-vars */
  }

  const $swiperAckey = document.querySelector('#js-swiper-ackey');
  if ($swiperAckey) {
    /* eslint-disable no-unused-vars */
    const swiperAckey = new Swiper($swiperAckey, {
      freeMode: true,
      centeredSlides: true,
      loop: true,
      loopedSlides: 6,
      slidesPerView: 6,
      spaceBetween: 120,
      speed: 12000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 2.2,
          spaceBetween: 80,
        },
        426: {
          slidesPerView: 3.2,
          spaceBetween: 80,
        },
        768: {
          slidesPerView: 4.4,
          spaceBetween: 100,
        },
        1440: {
          slidesPerView: 6.2,
          spaceBetween: 120,
        },
        1920: {
          slidesPerView: 8.4,
          spaceBetween: 140,
        },
        2560: {
          slidesPerView: 10.2,
          spaceBetween: 160,
        },
      },
    });
    /* eslint-enable no-unused-vars */
  }

  const $swiperEkkun = document.querySelector('#js-swiper-ekkun');
  if ($swiperEkkun) {
    /* eslint-disable no-unused-vars */
    const swiperEkkun = new Swiper($swiperEkkun, {
      freeMode: true,
      centeredSlides: true,
      loop: true,
      loopedSlides: 3,
      slidesPerView: 6,
      spaceBetween: 120,
      speed: 10000,
      loopAdditionalSlides: 1,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        //reverseDirection: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 2.2,
          spaceBetween: 80,
        },
        426: {
          slidesPerView: 3.2,
          spaceBetween: 80,
        },
        768: {
          slidesPerView: 4.4,
          spaceBetween: 100,
        },
        1440: {
          slidesPerView: 6.2,
          spaceBetween: 120,
        },
        1920: {
          slidesPerView: 8.4,
          spaceBetween: 140,
        },
        2560: {
          slidesPerView: 10.2,
          spaceBetween: 160,
        },
      },
    });
    /* eslint-enable no-unused-vars */
  }
})();
