/**
 * Debounce
 */
/*function debounce(func, timeout) {
  let timer;
  timeout = timeout !== undefined ? timeout : 300;
  return () => {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, timeout);
  };
}*/
function debounce(func, timeout = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export default debounce;
