/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
export default class CreatorTags {
  createDiv(classListDiv = []) {
    const divCreated = document.createElement('div');
    classListDiv.forEach((element) => {
      divCreated.classList.add(element);
    });
    return divCreated;
  }

  createSpan(classListSpan = []) {
    const spanCreated = document.createElement('span');
    classListSpan.forEach((element) => {
      spanCreated.classList.add(element);
    });
    return spanCreated;
  }

  createButton() {
    const btn = document.createElement('button');
    return btn;
  }

  inputSubmit() {
    const submit = document.createElement('input');
    submit.type = 'submit';
    return submit;
  }

  createInputText(classListInputText = [], id = undefined) {
    const inpt = document.createElement('input');
    classListInputText.forEach((element) => {
      inpt.classList.add(element);
    });
    if (id) inpt.id = id;
    inpt.type = 'text';
    return inpt;
  }

  createInputRadio(name, value, id) {
    const inptRadio = document.createElement('input');
    inptRadio.type = 'radio';
    inptRadio.name = name;
    inptRadio.value = value;
    inptRadio.id = id;
    return inptRadio;
  }

  createInputDate(classListInputDate = [], id = undefined) {
    const inpt = document.createElement('input');
    classListInputDate.forEach((element) => {
      inpt.classList.add(element);
    });
    if (id) inpt.id = id;
    inpt.type = 'date';
    return inpt;
  }

  createSelectInput(options) {
    const select = document.createElement('select');
    options.forEach(({
      optionValue, optionText, group, label, optionsOfGroup,
    }) => {
      if (group) {
        const optGroup = document.createElement('optgroup');
        optGroup.label = label;
        optionsOfGroup.forEach((option) => {
          const opt = document.createElement('option');
          opt.value = option.optionValue;
          opt.innerText = option.optionText;
          optGroup.appendChild(opt);
        });
        select.appendChild(optGroup);
      } else {
        const opt = document.createElement('option');
        opt.value = optionValue;
        opt.innerText = optionText;
        select.appendChild(opt);
      }
    });
    return select;
  }

  createLabel(htmlFor) {
    const label = document.createElement('label');
    label.htmlFor = htmlFor;
    return label;
  }

  createForm() {
    const form = document.createElement('form');
    return form;
  }

  createGenericInput() {
    const inpt = document.createElement('input');
    return inpt;
  }

  createImgTag(applicant, sex) {
    const tagImg = document.createElement('img');
    tagImg.classList.add('img');
    tagImg.alt = 'Avatar';
    if (applicant) {
      sex === 'masculino' ? tagImg.src = './icons/applicant-man.svg' : tagImg.src = './icons/applicant-woman.svg';
      return tagImg;
    }
    sex === 'masculino' ? tagImg.src = './icons/generic-man.svg' : tagImg.src = './icons/generic-woman.svg';
    return tagImg;
  }

  createImgGenericTag() {
    const tagImg = document.createElement('img');
    return tagImg;
  }

  createInputHidden() {
    const inpt = document.createElement('input');
    inpt.type = 'hidden';
    return inpt;
  }

  createIconTag(classListInputDate = []) {
    const i = document.createElement('i');
    classListInputDate.forEach((element) => {
      i.classList.add(element);
    });
    return i;
  }

  createInputFile(classList = [], id = undefined) {
    const e = document.createElement('input');
    e.type = 'file';
    classList.forEach((className) => {
      e.classList.add(className);
    });
    if (id) e.id = id;
    e.multiple = true;
    e.accept = '.pdf, .png, .jpg, .jpeg';
    return e;
  }

  paragraph(classList = [], id = undefined, innerText = undefined) {
    const p = document.createElement('p');
    classList.forEach((className) => {
      p.classList.add(className);
    });
    if (id) p.id = id;
    if (innerText) p.innerText = innerText;
    return p;
  }
}
