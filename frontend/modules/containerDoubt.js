export default function containerDoubt(answer, idTooltiptext, direction) {
  const div = document.createElement('div');
  div.classList.add('tooltip');
  const span = document.createElement('span');
  span.classList.add('tooltiptext');
  const img = document.createElement('img');
  img.setAttribute(
    'src',
    '../frontend/assets/img/circle-question.svg',
  );
  img.setAttribute(
    'alt',
    'ícone ponto de interrogação',
  );
  img.classList.add('img-doubt');
  span.innerHTML = answer;
  span.classList.add(`tooltip-${direction}`);
  if (idTooltiptext) span.id = idTooltiptext;

  span.appendChild(img);
  div.appendChild(img);
  div.appendChild(span);
  return div;
}
