/**
 * Splide
 */
import { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

(() => {
  const $swiperWakame = document.querySelector('.js-swiper-wakame');
  if ($swiperWakame) {
    /* eslint-disable no-unused-vars */
    const splideWakame = new Splide($swiperWakame, {
      mediaQuery: 'min',
      type: 'loop',
      perMove: 1,
      focus: 'center',
      fixedWidth: '160px',
      gap: '120px',
      arrows: false,
      pagination: false,
      autoScroll: {
        speed: 0.8,
        pauseOnHover: false,
        pauseOnFocus: false,
      },
      direction: 'ltr',
      breakpoints: {
        320: {
          fixedWidth: '100px',
          gap: '60px',
        },
        768: {
          fixedWidth: '120px',
          gap: '100px',
        },
        1440: {
          fixedWidth: '140px',
          gap: '120px',
        },
        1920: {
          fixedWidth: '160px',
          gap: '120px',
        },
        2560: {
          fixedWidth: '180px',
          gap: '160px',
        },
      },
    }).mount({ AutoScroll });
    /* eslint-enable no-unused-vars */
  }

  const $swiperAckey = document.querySelector('.js-swiper-ackey');
  if ($swiperAckey) {
    /* eslint-disable no-unused-vars */
    const splideAckey = new Splide($swiperAckey, {
      mediaQuery: 'min',
      type: 'loop',
      perMove: 1,
      focus: 'center',
      fixedWidth: '160px',
      gap: '120px',
      arrows: false,
      pagination: false,
      autoScroll: {
        speed: 0.8,
        pauseOnHover: false,
        pauseOnFocus: false,
      },
      direction: 'rtl',
      breakpoints: {
        320: {
          fixedWidth: '100px',
          gap: '60px',
        },
        768: {
          fixedWidth: '120px',
          gap: '100px',
        },
        1440: {
          fixedWidth: '140px',
          gap: '120px',
        },
        1920: {
          fixedWidth: '160px',
          gap: '120px',
        },
        2560: {
          fixedWidth: '180px',
          gap: '160px',
        },
      },
    }).mount({ AutoScroll });
    /* eslint-enable no-unused-vars */
  }

  const $swiperEkkun = document.querySelector('.js-swiper-ekkun');
  if ($swiperEkkun) {
    /* eslint-disable no-unused-vars */
    const splideEkkun = new Splide($swiperEkkun, {
      mediaQuery: 'min',
      type: 'loop',
      perMove: 1,
      focus: 'center',
      fixedWidth: '160px',
      gap: '120px',
      arrows: false,
      pagination: false,
      autoScroll: {
        speed: 0.8,
        pauseOnHover: false,
        pauseOnFocus: false,
      },
      direction: 'ltr',
      breakpoints: {
        320: {
          fixedWidth: '100px',
          gap: '60px',
        },
        768: {
          fixedWidth: '120px',
          gap: '100px',
        },
        1440: {
          fixedWidth: '140px',
          gap: '120px',
        },
        1920: {
          fixedWidth: '160px',
          gap: '120px',
        },
        2560: {
          fixedWidth: '180px',
          gap: '160px',
        },
      },
    }).mount({ AutoScroll });
    /* eslint-enable no-unused-vars */
  }
})();
