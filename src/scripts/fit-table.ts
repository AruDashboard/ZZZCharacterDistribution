const wrap = document.querySelector<HTMLElement>('#wrap')!;
const table = document.querySelector<HTMLTableElement>('#t')!;
let pending = false;

export function fitTable() {
  const fits = (scale: number) => {
    table.style.setProperty('--fit', String(scale));
    return table.offsetHeight <= wrap.clientHeight && table.scrollWidth <= wrap.clientWidth;
  };
  if (fits(1)) return;
  let low = 0;
  let high = 1;
  for (let step = 0; step < 18; step++) {
    const middle = (low + high) / 2;
    if (fits(middle)) low = middle;
    else high = middle;
  }
  table.style.setProperty('--fit', String(low));
}

function scheduleFit() {
  if (pending) return;
  pending = true;
  requestAnimationFrame(() => {
    pending = false;
    fitTable();
  });
}

new ResizeObserver(scheduleFit).observe(wrap);
table.querySelectorAll('img').forEach((image) => {
  image.addEventListener('load', scheduleFit);
  image.addEventListener('error', scheduleFit);
});
document.fonts.ready.then(scheduleFit);
document.fonts.addEventListener('loadingdone', scheduleFit);
fitTable();
