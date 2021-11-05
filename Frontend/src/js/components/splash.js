/**
 * Splash
 */
(() => {
  const $splash = document.querySelector('.p-splash');
  const $splashInner = document.querySelector('.p-splash__inner');
  const sessionKey = sessionStorage.getItem('oshinco_visited');

  const getWindowHeight = () => {
    const windowHeight = window.innerHeight;
    $splashInner.style.height = windowHeight + 'px';
    return true;
  };

  if ($splash) {
    if (sessionKey) {
      //console.info('セッション・ストレージがあります！');
      //sessionStorage.removeItem('oshinco_visited');
      document.addEventListener('DOMContentLoaded', () => {
        document.body.classList.remove('js-splash');
        $splash.style.display = 'none';
      });
    } else {
      //console.info('セッション・ストレージがありません！');
      sessionStorage.setItem('oshinco_visited', 'true');
      window.addEventListener('load', () => {
        getWindowHeight();
        window.setTimeout(() => {
          document.body.classList.remove('js-splash');
        }, 6000);
        window.setTimeout(() => {
          $splash.style.display = 'none';
        }, 8000);
      });
    }
  }
})();
