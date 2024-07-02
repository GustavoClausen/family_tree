/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import CreatorCard from './CreatorCard';
import CreatorTags from './CreatorTags';
import Modal from './Modal';
import selectorOfCardSelected from './selectorOfCardSelected';
import Form from './Form';
import containerDoubt from './containerDoubt';

export default class Tree {
  constructor(
    {
      fullName,
      birthPlace,
      birthPlaceComplete,
      birthDate,
      gender,
      applicant,
      valueBirthCertificate,
      textBirthCertificate,
      valueMarriageCertificate,
      textMarriageCertificate,
      docsBirthCertificate,
      docsMarriageCertificate,
    },
    selectorCSS,
    modeEntry,
  ) {
    this.creatorCard = new CreatorCard(
      {
        fullName,
        birthPlace,
        birthPlaceComplete,
        birthDate,
        gender,
        applicant,
        valueBirthCertificate,
        textBirthCertificate,
        valueMarriageCertificate,
        textMarriageCertificate,
        docsBirthCertificate,
        docsMarriageCertificate,
      },
    );
    this.card = this.creatorCard.create();
    this.tempShow = 1.7;
    this.ct = new CreatorTags();
    this.modal = new Modal();
    this.fullName = fullName;
    this.birthPlace = birthPlace;
    this.birthPlaceComplete = birthPlaceComplete;
    this.birthDate = birthDate;
    this.gender = gender;
    this.applicant = applicant;
    this.valueBirthCertificate = valueBirthCertificate;
    this.valueMarriageCertificate = valueMarriageCertificate;
    this.textBirthCertificate = textBirthCertificate;
    this.textMarriageCertificate = textMarriageCertificate;
    this.docsBirthCertificate = docsBirthCertificate;
    this.docsMarriageCertificate = docsMarriageCertificate;
    this.modeAdd = '';
    this.selectorCSS = selectorCSS;
    this.modeEntry = modeEntry;
  }

  add() {
    if (this.modeEntry === 'dante') {
      this.addRootEntry();
      return;
    }

    if (this.modeEntry === 'child') {
      this.addChildEntry(this.selectorCSS);
      return;
    }

    if (this.modeEntry === 'brother') {
      this.addBrotherEntry(this.selectorCSS);
      return;
    }

    this.editMember();
  }

  addRootEntry() {
    const rootContainerCard = document.querySelector('.container.card-container.add-root-infos');
    const entryGenRoot = document.querySelector('.entry-gen-root');
    const divNoChildAdd = this.ct.createDiv(['no-child-add', 'temp-show']);
    entryGenRoot.classList.add('no-child');
    rootContainerCard.remove();
    entryGenRoot.appendChild(this.card);
    entryGenRoot.appendChild(divNoChildAdd);

    divNoChildAdd.addEventListener('click', async () => {
      this.createFormListener(this.card, 'child');
    });

    divNoChildAdd.title = 'Adicionar filho';

    this.modal.closeModal();

    this.card.addEventListener('click', () => {
      this.showInfosOfMember(this.card);
    });

    setTimeout(() => {
      divNoChildAdd.classList.remove('temp-show');
    }, this.tempShow * 1000);
  }

  getNameOfParent(card, mode) {
    let name;
    const selector = String(selectorOfCardSelected(card));
    if (mode === 'child' || selector === '.root-gen > .entry-gen-root') {
      name = card.querySelector('.name').innerText;
      return name;
    }

    const listSelector = selector.split('');
    const lengthList = listSelector.length;
    if (lengthList === 17) {
      const cardParent = document.querySelector('.entry-gen-root').children[0];
      name = cardParent.querySelector('.name').innerText;
      return name;
    }

    const selectorParent = selector.slice(0, lengthList - 20);
    const parent = document.querySelector(selectorParent);
    name = parent.querySelector('.card-container').querySelector('.name').innerText;
    return name;
  }

  addChildEntry(selectorEntry) {
    const entry = document.querySelector(selectorEntry);
    const gen = entry.parentElement;
    const entryClassList = entry.classList;
    const genClassList = gen.classList;
    const noChildDiv = entry.children[entry.children.length - 1];
    const newNoChildDiv = this.ct.createDiv(['no-child-add', 'temp-show']);
    const newLastCardDiv = this.ct.createDiv(['last-card-person', 'temp-show']);
    const entryDiv = this.ct.createDiv(['entry-gen', 'entry-1', 'no-child']);
    let genDiv;
    let calcGen;
    if (genClassList.contains('root-gen')) {
      calcGen = '1';
      genDiv = this.ct.createDiv(['gen', `gen-${calcGen}`]);
    } else {
      calcGen = Number(gen.classList[1].slice(4)) + 1;
      genDiv = this.ct.createDiv(['gen', `gen-${calcGen}`]);
    }
    entryClassList.remove('no-child');
    noChildDiv.classList.add('hidden');
    entryDiv.appendChild(this.card);
    entryDiv.appendChild(newLastCardDiv);
    entryDiv.appendChild(newNoChildDiv);
    genDiv.appendChild(entryDiv);
    entry.appendChild(genDiv);
    this.card.addEventListener('click', () => {
      this.showInfosOfMember(this.card);
    });
    newNoChildDiv.addEventListener('click', () => {
      this.createFormListener(this.card, 'child');
    });
    newLastCardDiv.title = 'Adicionar irmão';
    newNoChildDiv.title = 'Adicionar filho';
    newLastCardDiv.addEventListener('click', () => {
      this.createFormListener(this.card, 'brother');
    });
    this.modal.closeModal();
    setTimeout(() => {
      newNoChildDiv.classList.remove('temp-show');
      newLastCardDiv.classList.remove('temp-show');
    }, this.tempShow * 1000);
  }

  addBrotherEntry(selectorEntry) {
    const entry = document.querySelector(selectorEntry);
    const gen = entry.parentElement;
    const totalEntries = gen.children.length;
    const entryRemoveLastCard = gen.children[totalEntries - 1];
    let divRemoveLastCard = entryRemoveLastCard.children[entryRemoveLastCard.children.length - 2];
    const newNoChildDiv = this.ct.createDiv(['no-child-add', 'temp-show']);
    const newLastCardDiv = this.ct.createDiv(['last-card-person', 'temp-show']);
    const entryDiv = this.ct.createDiv(['entry-gen', `entry-${totalEntries + 1}`, 'no-child']);

    if (divRemoveLastCard.classList.contains('last-card-person')) {
      divRemoveLastCard.remove();
    } else {
      divRemoveLastCard = entryRemoveLastCard.children[entryRemoveLastCard.children.length - 3];
      divRemoveLastCard.remove();
    }
    entryDiv.appendChild(this.card);
    entryDiv.appendChild(newLastCardDiv);
    entryDiv.appendChild(newNoChildDiv);

    gen.appendChild(entryDiv);

    this.card.addEventListener('click', () => {
      this.showInfosOfMember(this.card);
    });

    newNoChildDiv.addEventListener('click', () => {
      this.createFormListener(this.card, 'child');
    });

    newNoChildDiv.title = 'Adicionar filho';
    newLastCardDiv.title = 'Adicionar irmão';

    newLastCardDiv.addEventListener('click', () => {
      this.createFormListener(this.card, 'brother');
    });
    this.modal.closeModal();
    setTimeout(() => {
      newNoChildDiv.classList.remove('temp-show');
      newLastCardDiv.classList.remove('temp-show');
    }, this.tempShow * 1000);
  }

  showInfosOfMember(card) {
    const modal = new Modal();
    const modalDialog = document.querySelector('.modal-dialog');
    const name = card.querySelector('.name').innerText;
    const boxAllInformations = this.ct.createDiv(['box-infos-all-informations']);
    modalDialog.classList.add('infos-member');
    const infos = {
      localBirth: card.querySelector('.info-local-birth').innerText,
      dateBirth: card.querySelector('.birth-date').innerText,
      applicant: card.querySelector('.info-applicant').innerText,
      sex: card.querySelector('.info-gender').innerText,
      valueBirthCertificate: card.querySelector('.infos-birth-certificate').innerText,
      textBirthCertificate: card.querySelector('.text-infos-birth-certificate').innerText,
      fileBirthCertificate: card.querySelector('.inpt-docs-birth').files,
      valueMarriageCertificate: card.querySelector('.infos-marriage-certificate').innerText,
      textMarriageCertificate: card.querySelector('.text-infos-marriage-certificate').innerText,
      fileMarriageCertificate: card.querySelector('.inpt-docs-marriage').files,
      card,
    };

    this.createNameOfPageInformation(name);
    this.infosOfMember(boxAllInformations, infos);
    this.infosOfBirthCertificate(boxAllInformations, infos);
    this.infosOfMarriageCertificate(boxAllInformations, infos);
    this.btnsEditAndDelete(boxAllInformations, card);
    modalDialog.appendChild(boxAllInformations);

    modal.showModal();
    const nameSelected = document.querySelector('.name-selected');
    nameSelected.classList.add('infos-member');
  }

  calcAge(dateBirth) {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const currentday = date.getDate();
    const infosDate = dateBirth.split('/');
    if (dateBirth.length === 4) {
      const calcAge = currentYear - Number(dateBirth);
      if (calcAge === 1) return `1 ano (completo até o fim de ${currentYear})`;
      if (calcAge === 0) return `0 ano (1 ano completo até o fim de ${currentYear + 1})`;
      return `${calcAge} anos (completos até o fim de ${currentYear})`;
    }
    const birthYear = Number(infosDate[2]);
    const birthMonth = Number(infosDate[1]);
    const birthDay = Number(infosDate[0]);
    const completeBirthday = currentday >= birthDay;

    let yearCalc;
    let monthCalc;

    if (currentMonth === birthMonth) {
      if (completeBirthday) {
        yearCalc = currentYear - birthYear;
        return `${yearCalc > 1 ? `${yearCalc} anos e 0 mês` : `${yearCalc} ano e 0 mês`}`;
      }
      yearCalc = currentYear - birthYear - 1;
      return `${yearCalc > 1 ? `${yearCalc} anos e 11 meses` : `${yearCalc} ano e 11 meses`}`;
    }

    if (completeBirthday) {
      monthCalc = 12 - (birthMonth - currentMonth);
    } else {
      monthCalc = 12 - (birthMonth - currentMonth) - 1;
    }

    if (currentMonth < birthMonth) {
      yearCalc = currentYear - birthYear - 1;
      if (yearCalc > 1) {
        return `${monthCalc > 1 ? `${yearCalc} anos e ${monthCalc} meses` : `${yearCalc} anos e ${monthCalc} mês`}`;
      }
      return `${monthCalc > 1 ? `${yearCalc} ano e ${monthCalc} meses` : `${yearCalc} ano e ${monthCalc} mês`}`;
    }

    yearCalc = currentYear - birthYear;
    if (yearCalc > 1) {
      return `${monthCalc > 1 ? `${yearCalc} anos e ${monthCalc} meses` : `${yearCalc} anos e ${monthCalc} mês`}`;
    }
    return `${monthCalc > 1 ? `${yearCalc} ano e ${monthCalc} meses` : `${yearCalc} ano e ${monthCalc} mês`}`;
  }

  degreeVerifier(card, sex) {
    const degreePrefix = {
      1: 'Filh',
      2: 'Net',
      3: 'Bisnet',
      4: 'Trinet',
      5: 'Tetranet',
      6: 'Pentanet',
      7: 'Hexanet',
      8: 'Geptanet',
      9: 'Octanet',
      10: 'Eneanet',
      11: 'Decanet',
      12: 'Hendecanet',
      13: 'Dodecanet',
      14: 'Tridecanet',
      15: 'Retradecanet',
      16: 'Pentadecanet',
      17: 'Hexadecanet',
      18: 'Heptadecanet',
      19: 'Octadecanet',
      20: 'Eneadecanet',
      21: 'Icosanet',
    };
    const gen = card.parentElement.parentElement.classList[1];
    const degree = Number(gen.split('-')[1]);
    if (Number.isNaN(degree)) return 'Dante Causa';
    if (sex === 'man') return `${degreePrefix[degree]}o`;
    return `${degreePrefix[degree]}a`;
  }

  infosOfMember(
    boxAllInformations,
    {
      localBirth, dateBirth, applicant, sex, card,
    },
  ) {
    const boxInfos = this.ct.createDiv(['box-infos-modal', 'informations']);
    const ctnrFirst = this.ct.createDiv(['container-infos-member']);
    const ctnrSecond = this.ct.createDiv(['container-infos-member']);
    const localBirthCtnr = this.ct.createDiv([]);
    const dateBirthCtnr = this.ct.createDiv([]);
    const ageCtnr = this.ct.createDiv([]);
    const applicantCtnr = this.ct.createDiv([]);
    const sexCtnr = this.ct.createDiv([]);
    const degreeOfRelationCtnr = this.ct.createDiv([]);
    const age = this.calcAge(dateBirth);
    const degreeOfRelation = this.degreeVerifier(card, sex);
    const toolDegree = containerDoubt(
      'Grau de parentesco do membro em relação ao Dante Causa',
      undefined,
      'top',
    );

    localBirthCtnr.innerHTML = `Local de nascimento: <b>${localBirth}</b>`;
    dateBirthCtnr.innerHTML = `Data de nascimento: <b>${dateBirth}</b>`;
    ageCtnr.innerHTML = `Idade: <b>${age}</b>`;
    applicantCtnr.innerHTML = `Requerente: <b>${applicant === 'true' ? '<b>Sim</b>' : '<b>Não</b>'}`;
    sexCtnr.innerHTML = `Sexo: <b>${sex === 'man' ? '<b>Masculino</b>' : '<b>Feminino</b>'}`;
    degreeOfRelationCtnr.innerHTML = `Grau de parentesco: <b>${degreeOfRelation}</b>`;
    degreeOfRelationCtnr.appendChild(toolDegree);

    ctnrFirst.appendChild(localBirthCtnr);
    ctnrFirst.appendChild(ageCtnr);
    ctnrFirst.appendChild(sexCtnr);

    ctnrSecond.appendChild(dateBirthCtnr);
    ctnrSecond.appendChild(applicantCtnr);
    ctnrSecond.appendChild(degreeOfRelationCtnr);

    boxInfos.appendChild(ctnrFirst);
    boxInfos.appendChild(ctnrSecond);

    boxAllInformations.appendChild(boxInfos);
  }

  infosOfBirthCertificate(
    boxAllInformations,
    {
      textBirthCertificate, fileBirthCertificate,
    },
  ) {
    const box = this.createContainerInfosCertificate(
      'birth',
      fileBirthCertificate,
      textBirthCertificate,
    );
    boxAllInformations.appendChild(box);
  }

  infosOfMarriageCertificate(
    boxAllInformations,
    {
      textMarriageCertificate, fileMarriageCertificate,
    },
  ) {
    const box = this.createContainerInfosCertificate(
      'marriage',
      fileMarriageCertificate,
      textMarriageCertificate,
    );
    boxAllInformations.appendChild(box);
  }

  createContainerInfosCertificate(certificateType, files, optionText) {
    const box = this.ct.createDiv(['box-infos-modal', `${certificateType}-certificate-information`]);
    const firstBox = this.ct.createDiv(['first-box']);
    const secondBox = this.ct.createDiv(['second-box']);
    const thirdBox = this.ct.createDiv(['third-box']);
    const title = this.ct.createSpan(['title']);
    const line = this.ct.createSpan(['line']);
    const infoText = this.ct.createDiv(['info-text']);

    if (certificateType === 'birth') {
      title.innerText = 'certidão de nascimento';
    } else {
      title.innerText = 'certidão de casamento';
    }

    infoText.innerText = optionText;

    box.appendChild(firstBox);
    box.appendChild(secondBox);
    box.appendChild(thirdBox);

    firstBox.appendChild(title);
    firstBox.appendChild(infoText);

    thirdBox.appendChild(
      this.showInputFiles(files),
    );

    secondBox.appendChild(line);

    return box;
  }

  btnsEditAndDelete(boxAllInformations, card) {
    const btnEdit = this.ct.createButton();
    const btnDelete = this.ct.createButton();
    const containerBtns = this.ct.createDiv(['ctnr-btns-edit-delete']);
    btnEdit.innerText = 'editar';
    btnEdit.classList.add('btns-edit-delete', 'btn-edit');
    btnDelete.innerText = 'deletar';
    btnDelete.classList.add('btns-edit-delete', 'btn-delete');
    containerBtns.appendChild(btnEdit);
    containerBtns.appendChild(btnDelete);
    boxAllInformations.appendChild(containerBtns);

    const selectorCSS = selectorOfCardSelected(card);

    btnEdit.addEventListener('click', () => {
      const modal = new Modal();
      modal.closeModal();
      setTimeout(async () => {
        const modalDialog = document.querySelector('.modal-dialog');
        const nameParent = this.getNameOfParent(card, 'child');
        const form = await new Form(
          nameParent,
          selectorCSS,
          'edit',
        );
        const htmlForm = await form.createForm();
        modalDialog.appendChild(htmlForm);
        this.loadEditInfosOnForm(card, form);
        form.tabindexOfSecondBox('disable');
      }, 40);

      setTimeout(() => {
        modal.showModal();
      }, 351);
    });
    btnDelete.addEventListener('click', () => {
      const confirm = window.confirm('Deseja mesmo deletar?');
      if (!confirm) return;
      this.deleteMember(selectorCSS);
    });
  }

  loadEditInfosOnForm(card, form) {
    const localBirthAcronym = card.querySelector('.acronym-birth-certificate').innerText;
    form.inptName.value = card.querySelector('.name').innerText;
    form.selectBirthPlace.value = localBirthAcronym;
    form.selectBirthPlace.style.opacity = '1';
    form.inptBirthDate.value = card.querySelector('.birth-date').innerText;

    if (card.querySelector('.info-gender').innerText === 'man') {
      form.inptManRadio.checked = true;
    } else {
      form.inptWomanRadio.checked = true;
    }
    if (card.querySelector('.info-applicant').innerText === 'true') {
      form.inptYesApplicant.checked = true;
    } else {
      form.inptNoApplicant.checked = true;
    }
    const filesBirth = card.querySelector('.inpt-docs-birth').files;
    form.inptFileBirthCertificate.files = filesBirth;
    const filesMarriage = card.querySelector('.inpt-docs-marriage').files;
    form.inptFileMarriageCertificate.files = filesMarriage;
    form.ctnrBirthCertificate.appendChild(form.createContainerDataFiles(filesBirth, 'birth'));
    form.ctnrMarriageCertificate.appendChild(form.createContainerDataFiles(filesMarriage, 'marriage'));
    form.loadSelectInfosCertificates(localBirthAcronym);
    form.inptSelectInfBirthCertificate.value = card.querySelector('.infos-birth-certificate').innerText;
    form.inptSelectInfMarriageCertificate.value = card.querySelector('.infos-marriage-certificate').innerText;
    form.inptSelectInfBirthCertificate.style.opacity = '1';
    form.inptSelectInfMarriageCertificate.style.opacity = '1';
    localStorage.setItem('prevLocBirth', localBirthAcronym);
  }

  createNameOfPageInformation(name) {
    const nameInfoContainer = document.querySelector('.name-info-container');
    const nameSelected = this.ct.createDiv(['name-selected']);
    const line = this.ct.createDiv(['line-name-modal']);
    const span = this.ct.createSpan(['name-span']);
    nameInfoContainer.appendChild(nameSelected);
    nameInfoContainer.appendChild(line);
    span.innerText = name;
    nameSelected.innerText = 'Informações de ';
    nameSelected.appendChild(span);
    return nameSelected;
  }

  showInputFiles(files) {
    if (files.length === 0) {
      const containerNoFiles = this.ct.createDiv(['no-files-container']);
      const img = this.ct.createImgGenericTag();
      const text = this.ct.createSpan([]);
      text.innerHTML = 'Cópia não adicionada';
      img.src = '../../family_tree/frontend/assets/img/folder.svg';
      containerNoFiles.appendChild(text);
      containerNoFiles.appendChild(img);
      return containerNoFiles;
    }
    const containter = this.ct.createDiv(['container-show-all-files']);
    Array.from(files).forEach((file) => {
      const containerFile = this.ct.createDiv(['container-file']);
      const containerInfos = this.ct.createDiv(['container-infos-file']);
      const containerDivImgAndInfosFiles = this.ct.createDiv([]);
      const { size } = file;
      const { name } = file;
      const sizeConverted = Math.round(size / 1024) < 1000
        ? `${Math.round(size / 1024)} KB` : `${Math.round(size / 1024 / 1024)} MB`;
      const pSize = this.ct.paragraph(['info-file-size'], undefined, String(sizeConverted));
      const pName = this.ct.paragraph(['info-file-name'], undefined, name);
      const image = this.ct.createImgGenericTag();
      const type = file.type.split('/')[1];
      image.src = `../../family_tree/frontend/assets/img/${type}.svg`;
      image.classList.add('img-file-upload');
      containerDivImgAndInfosFiles.appendChild(image);
      containerDivImgAndInfosFiles.appendChild(containerInfos);
      containerFile.appendChild(containerDivImgAndInfosFiles);
      containerInfos.appendChild(pName);
      containerInfos.appendChild(pSize);
      containter.appendChild(containerFile);
    });
    return containter;
  }

  editMember(infos, selectorCSS) {
    const modal = new Modal();
    const card = document.querySelector(selectorCSS);
    const { applicant } = infos;
    const { birthDate } = infos;
    const { birthPlace } = infos;
    const { birthPlaceComplete } = infos;
    const { docsBirthCertificate } = infos;
    const { docsMarriageCertificate } = infos;
    const { fullName } = infos;
    const { gender } = infos;
    const { textBirthCertificate } = infos;
    const { textMarriageCertificate } = infos;
    const { valueBirthCertificate } = infos;
    const { valueMarriageCertificate } = infos;

    const imgAvatar = card.querySelector('.img');
    const name = card.querySelector('.name');
    const acronymBirthCertificate = card.querySelector('.acronym-birth-certificate');
    const flag = card.querySelector('.flag');
    const birthDateHtml = card.querySelector('.birth-date');
    const cardEndLine = card.querySelector('.card-end-line');
    const inptDocsBirth = card.querySelector('.inpt-docs-birth');
    const inptDocsMarriage = card.querySelector('.inpt-docs-marriage');
    const infosBirthCertificate = card.querySelector('.infos-birth-certificate');
    const textInfosBirthCertificate = card.querySelector('.text-infos-birth-certificate');
    const infosMarriageCertificate = card.querySelector('.infos-marriage-certificate');
    const textInfosMarriageCertificate = card.querySelector('.text-infos-marriage-certificate');
    const infoGender = card.querySelector('.info-gender');
    const infoApplicant = card.querySelector('.info-applicant');
    const infoLocalBirth = card.querySelector('.info-local-birth');

    let year;
    let ageToIcon;
    if (birthDate.length === 4) year = Number(birthDate);
    year = Number(birthDate.slice(-4));
    const date = new Date();
    const currentYear = date.getFullYear();
    if (currentYear - year >= 65) {
      ageToIcon = '-old';
    } else if (currentYear - year < 18) {
      ageToIcon = '-minor';
    } else {
      ageToIcon = '';
    }

    if (applicant) {
      imgAvatar.src = `../../family_tree/frontend/assets/img/${gender}${ageToIcon}.svg`;
      cardEndLine.classList = '';
      cardEndLine.classList.add('card-end-line', gender);
    } else {
      imgAvatar.src = `../../family_tree/frontend/assets/img/${gender}${ageToIcon}-generic.svg`;
      cardEndLine.classList = '';
      cardEndLine.classList.add('card-end-line', 'generic-person');
    }
    name.innerText = fullName;
    acronymBirthCertificate.innerText = birthPlace;
    flag.src = `https://flagcdn.com/${birthPlace}.svg`;
    birthDateHtml.innerText = birthDate;
    inptDocsBirth.value = '';
    inptDocsMarriage.value = '';
    inptDocsBirth.files = docsBirthCertificate;
    inptDocsMarriage.files = docsMarriageCertificate;

    infosBirthCertificate.innerText = valueBirthCertificate;
    textInfosBirthCertificate.innerText = textBirthCertificate;
    infosMarriageCertificate.innerText = valueMarriageCertificate;
    textInfosMarriageCertificate.innerHTML = textMarriageCertificate;
    infoGender.innerText = gender;
    infoApplicant.innerText = applicant;
    infoLocalBirth.innerText = birthPlaceComplete;
    modal.closeModal();
  }

  deleteMember(selectorEntry) {
    const modal = new Modal();
    const modalDialog = document.querySelector('.modal-dialog');

    if (selectorEntry === '.root-gen > .entry-gen-root') {
      const entryGenRoot = document.querySelector('.root-gen > .entry-gen-root');
      const noChildDiv = entryGenRoot.querySelector('.no-child-add');
      noChildDiv.remove();
      entryGenRoot.children[0].remove();
      if (!entryGenRoot.classList.contains('no-child')) entryGenRoot.children[0].remove();
      const newCard = this.ct.createDiv(['container', 'card-container', 'add-root-infos']);
      newCard.title = 'Adicionar Dante Causa';
      newCard.addEventListener('click', async () => {
        const form = await new Form(
          'Dante Causa (Italiano)',
          '.root-gen > .entry-gen-root',
          'dante',
        ).createForm();
        modalDialog.appendChild(form);
        modal.showModal();
      });
      newCard.innerHTML += `
      <div class="container-root-icon">
        <img class="root-icon" src="../frontend/assets/img/add-icon.svg" alt="Ícone adicionar">
      </div>
      </div>
      `;
      entryGenRoot.classList = '';
      entryGenRoot.classList.add('entry-gen-root');
      entryGenRoot.appendChild(newCard);
      modal.closeModal();
      return;
    }

    const entryDelet = document.querySelector(selectorEntry);
    const divLastCardOrAddChild = entryDelet.children[1];
    const genParentEntryDelet = entryDelet.parentElement;
    const totalEntriesGen = genParentEntryDelet.children.length;

    if (totalEntriesGen === 1) {
      const entryParent = entryDelet.parentElement.parentElement;
      const divNoChildParent = entryParent.children[entryParent.children.length - 2];
      divNoChildParent.classList.remove('hidden');
      entryParent.classList.add('no-child');
      entryDelet.parentElement.remove();
      this.modal.closeModal();
      return;
    }

    if (divLastCardOrAddChild.classList.contains('last-card-person')) {
      const newLastEntry = genParentEntryDelet.children[totalEntriesGen - 2];
      const divLastCard = this.ct.createDiv(['last-card-person']);
      const card = newLastEntry.children[0];
      card.insertAdjacentElement('afterend', divLastCard);
      divLastCard.addEventListener('click', () => {
        this.createFormListener(card, 'brother');
      });
      entryDelet.remove();
    } else {
      entryDelet.remove();
      for (let i = 0; i <= totalEntriesGen - 2; i += 1) {
        const children = genParentEntryDelet.children[i];
        if (children.classList.contains('no-child')) {
          children.classList = '';
          children.classList.add('entry-gen');
          children.classList.add(`entry-${i + 1}`);
          children.classList.add('no-child');
        } else {
          children.classList = '';
          children.classList.add('entry-gen');
          children.classList.add(`entry-${i + 1}`);
        }
      }
    }

    modal.closeModal();
  }

  async createFormListener(card, mode) {
    const modal = new Modal();
    const selectorCSS = selectorOfCardSelected(card);
    const nameParent = this.getNameOfParent(card, mode);
    const form = await new Form(
      nameParent,
      selectorCSS,
      mode,
    ).createForm();
    const modalDialog = document.querySelector('.modal-dialog');
    modalDialog.appendChild(form);
    modal.showModal();
  }
}
