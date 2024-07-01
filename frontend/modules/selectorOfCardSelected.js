export default function selectorOfCardSelected(cardElement) {
  try {
    const gen = cardElement.parentElement.parentElement.classList[1];
    if (gen === 'root') {
      return '.root-gen > .entry-gen-root';
    }
    const genDegree = Number(gen.slice(4));
    let entry = cardElement.parentElement;
    let geracao = entry.parentElement;
    let classEntry = entry.classList[1];
    let classGeracao = geracao.classList[1];
    let selectorGen = '';
    for (let i = genDegree; i >= 1; i -= 1) {
      selectorGen = `> .${classGeracao} > .${classEntry} ${selectorGen}`;
      entry = geracao.parentElement;
      geracao = entry.parentElement;
      classEntry = entry.classList[1];
      classGeracao = geracao.classList[1];
    }
    selectorGen = selectorGen.trim().slice(2);
    return selectorGen;
  } catch (e) {
    return '.root-gen > .entry-gen-root';
  }
}
