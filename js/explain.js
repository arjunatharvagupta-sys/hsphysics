/**
 * Click any .explain block to cycle through its levels.
 * Structure:
 *   <div class="explain" data-levels='["text1","text2","text3"]'>
 *     <p></p>
 *     <button class="hit" aria-label="Cycle explanation"></button>
 *   </div>
 */
document.querySelectorAll('.explain').forEach(el => {
  const levels = JSON.parse(el.dataset.levels || '[]');
  if (!levels.length) return;

  let i = 0;
  const p = el.querySelector('p');
  if (!p) return;

  p.textContent = levels[0];

  const hit = el.querySelector('.hit') || (() => {
    const b = document.createElement('button');
    b.className = 'hit';
    b.setAttribute('aria-label', 'Cycle explanation');
    el.appendChild(b);
    return b;
  })();

  hit.addEventListener('click', () => {
    i = (i + 1) % levels.length;
    p.style.opacity = '0';
    setTimeout(() => {
      p.textContent = levels[i];
      p.style.opacity = '1';
    }, 120);
  });
});