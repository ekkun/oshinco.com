/**
 * Splash
 */
(() => {
  const $splash = document.querySelector('.p-splash');
  const $splashInner = document.querySelector('.p-splash__inner');
  //const sessionKey = sessionStorage.getItem('oshinco_visited');
  const localKey = localStorage.getItem('oshinco_visited');
  const now = Date.now();

  const getWindowHeight = () => {
    const windowHeight = window.innerHeight;
    $splashInner.style.height = windowHeight + 'px';
    return true;
  };

  if ($splash) {
    if (localKey) {
      //console.info('セッション・ストレージ or ローカルストレージが存在しています！');
      //sessionStorage.removeItem('oshinco_visited');
      //localStorage.removeItem('oshinco_visited');
      document.addEventListener('DOMContentLoaded', () => {
        document.body.classList.remove('js-splash');
        $splash.style.display = 'none';
      });
    } else {
      //console.info('セッション・ストレージ or ローカルストレージが存在していません！');
      //sessionStorage.setItem('oshinco_visited', 'true');
      localStorage.setItem('oshinco_visited', now);
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

  if (localKey && now - parseInt(localKey) > 24 * 60 * 60 * 1000) {
    localStorage.removeItem('oshinco_visited');
  }
})();
