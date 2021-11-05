/**
 * ITEM
 */
(() => {
  const items = document.querySelectorAll('.js-item');

  items.forEach((element) => {
    const $this = element;
    const $image = $this.querySelector('.item__image');
    const imageSrc = $image.getAttribute('data-image-src');
    //const imageSrcHover = $image.getAttribute('data-image-src-hover');
    $image.style.backgroundImage = 'url(' + imageSrc + ')';
    /*
    $this.addEventListener(
      'mouseover',
      () => {
        $image.style.backgroundImage = 'url(' + imageSrcHover + ')';
      },
      false
    );
    $this.addEventListener(
      'mouseleave',
      () => {
        $image.style.backgroundImage = 'url(' + imageSrc + ')';
      },
      false
    );
*/
  });
})();
