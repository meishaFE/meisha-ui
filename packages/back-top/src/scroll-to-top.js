export default function(el, from = 0, to, duration = 500) {
  if (!el) return;
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame =
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        return window.setTimeout(callback, 1000 / 60);
      };
  }

  const difference = Math.abs(from - to);
  const step = Math.ceil(difference / (duration * 60 / 1000));
  const scale = 1 / (1 - Math.pow(10 / difference, 1 / (60 * duration / 1000 - 10)));

  const scroll = (start, end) => {
    if (start === end) return;
    let stepNum = Math.ceil(Math.abs(start - end) / scale);
    stepNum = stepNum > 0 ? Math.ceil(stepNum) : Math.floor(stepNum);

    let d = start + stepNum > end ? end : start + stepNum;

    if (start > end) {
      d = start - stepNum < end ? end : start - stepNum;
    }
    if (el === window) {
      window.scrollTo(d, d);
    } else {
      el.scrollTop = d;
    }
    window.requestAnimationFrame(() => scroll(d, end));
  };

  scroll(from, to, step);
}
