import { fitTable } from './fit-table';

const wrap = document.querySelector<HTMLElement>('#wrap')!;
const T = document.querySelector<HTMLElement>('#t')!;
const tip = document.querySelector<HTMLElement>('#tip')!;

const touch = window.matchMedia('(hover: none)').matches;

const showRank4 = document.querySelector<HTMLInputElement>('#show-rank-4')!;
const showRank5 = document.querySelector<HTMLInputElement>('#show-rank-5')!;

function hideTip(): void {
  tip.classList.remove('on');
}

function showTip(target: HTMLElement, x: number, y: number): void {
  if (!target.dataset.tip) {
    hideTip();
    return;
  }

  tip.textContent = target.dataset.tip;
  tip.classList.add('on');

  tip.style.left = Math.max(8, Math.min(x, window.innerWidth - tip.offsetWidth - 8)) + 'px';

  tip.style.top = Math.max(8, Math.min(y, window.innerHeight - tip.offsetHeight - 8)) + 'px';
}

T.addEventListener('mousemove', (event: MouseEvent) => {
  if (!touch && event.target instanceof HTMLElement) {
    showTip(event.target, event.clientX + 14, event.clientY + 18);
  }
});

T.addEventListener('mouseleave', hideTip);

T.addEventListener('focusin', (event: FocusEvent) => {
  const target = event.target;

  if (!(target instanceof HTMLElement)) return;

  const r = target.getBoundingClientRect();
  showTip(target, r.left, r.bottom + 6);
});

T.addEventListener('focusout', hideTip);

T.addEventListener('click', (event: MouseEvent) => {
  if (!touch) return;

  const target = event.target;

  if (!(target instanceof HTMLElement)) return;

  const r = target.getBoundingClientRect();
  showTip(target, r.left, r.bottom + 6);
});

wrap.addEventListener('scroll', hideTip);

window.addEventListener('resize', hideTip);

document.addEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    hideTip();
  }
});

document.addEventListener('click', (event: MouseEvent) => {
  const target = event.target;

  if (target instanceof Node && !T.contains(target)) {
    hideTip();
  }
});

T.querySelectorAll<HTMLImageElement>('img').forEach((img) => {
  img.addEventListener('error', () => {
    img.classList.add('broken');
  });
});

function updateImageVisibility(): void {
  const selectedRanks = new Set<string>(
    [showRank4, showRank5].filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value),
  );

  console.log('SelectedRanks:', selectedRanks);

  T.querySelectorAll<HTMLImageElement>('img[data-rank]').forEach((img) => {
    img.hidden = !selectedRanks.has(img.dataset.rank ?? '');
  });

  hideTip();
  fitTable();
}

showRank4.addEventListener('change', updateImageVisibility);
showRank5.addEventListener('change', updateImageVisibility);
