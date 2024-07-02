/* eslint-disable no-lonely-if */
/* eslint-disable import/no-cycle */
/* eslint-disable no-alert */
import CreatorTags from './CreatorTags';
import Tree from './Tree';
import containerDoubt from './containerDoubt';

export default class Form {
  constructor(nameAdding, selectorCSS, modeEntry) {
    const date = new Date();
    const year = date.getFullYear();
    this.ct = new CreatorTags();
    this.nameAdding = nameAdding;
    const optsBrazilText = {
      a: `Possuo a via física e ORIGINAL em INTEIRO TEOR - emitida em ${year - 5} ou depois`,
      b: `Possuo a via física e ORIGINAL em INTEIRO TEOR - emitida antes de ${year - 5}`,
      c: 'Possuo a via física e ORIGINAL em BREVE RELATO ',
      d: 'Possuo apenas uma CÓPIA da certidão brasileira',
      e: 'Não sei em qual Cartório está o registro',
      f: 'Não sei informar',
      g: 'Não se aplica - solteiro(a) ou União Estável',
      h: 'Possuo a via física e ORIGINAL emitida pelo Consulado brasileiro',
      i: 'Possuo a via física e ORIGINAL emitida pelo cartório brasileiro',
      j: 'Possuo apenas uma CÓPIA da via emitida pelo Consulado ou cartório brasileiro',
      k: 'Possuo a via física e ORIGINAL da via emitida pelo próprio país',
      l: 'Possuo apenas uma CÓPIA da via emitida pelo próprio país ',
    };
    const optsBrazilTips = {
      a: 'A <b>certidão tem um texto corrido</b> com todos os detalhes do registro e <b>está dentro do prazo</b> estipulado',
      b: 'A <b>certidão tem um texto corrido</b> com todos os detalhes do registro, mas <b>NÃO está dentro do prazo</b> estipulado',
      c: 'A <b>certidão possui as informações em formato de “tabela”</b> e tem apenas os dados principais do registro. Exemplo: nomes dos pais e avós, data de nascimento, data do registro etc.',
      d: 'Você possui <b>apenas uma cópia digital ou física</b> da certidão brasileira, independentemente de estar em inteiro teor ou breve relato',
      e: 'Você tem <b>apenas as informações</b> ou suposições do local e data do registro',
      f: 'Você <b>NÃO</b> tem certeza sobre o estado do documento ou ele <b>NÃO se encaixa nas opções</b>',
      g: 'Não há registro civil de casamento ou possui apenas uma <b>UNIÃO ESTÁVEL</b>',
      h: 'Você possui a <b>certidão original emitida diretamente</b> pelo <b>Consulado ou Embaixada</b> brasileira',
      i: 'Você possui uma <b>certidão original emitida</b> por um <b>CARTÓRIO</b> brasileiro, produzida <b>a partir da certidão emitida diretamente no consulado</b> ou Embaixada (<b>transcrita no Brasil</b>)',
      j: 'Você possui apenas uma <b>cópia digital ou física</b> da certidão brasileira, independentemente de ser do Consulado ou Cartório brasileiro',
      k: 'Você possui a <b>certidão original “estrangeira” emitida diretamente pelo país</b> em o casamento foi celebrado',
      l: 'Você possui <b>apenas uma cópia</b>, física ou digital, da <b>certidão “estrangeira” emitida diretamente pelo país</b> em o casamento foi celebrado',
    };

    const optsItalyTips = {
      a: 'A certidão italiana está no <b> formato ORIGINAL</b>, físico e dentro do prazo estipulado',
      b: 'A certidão italiana está no <b> formato ORIGINAL</b> e físico, mas <b>NÃO está dentro do prazo </b>estipulado',
      c: 'A certidão italiana <b>NÃO está no formato original</b>, independentemente do prazo estipulado',
      d: 'Você tem <b>apenas as informações ou suposições</b> do local e data de nascimento',
      e: 'Você <b>NÃO tem certeza sobre o estado</b> do documento ou ele <b>NÃO se encaixa nas opções</b>',
      f: '<b>Não há registro civil de casamento</b>, tanto nos cartórios ou paróquias brasileiras, quanto nas Comuni ou Parrocchie italianas',
      g: 'A <b>certidão tem um texto corrido com todos os detalhes</b> do registro e <b>está dentro do prazo estipulado</b>',
      h: 'A <b>certidão tem um texto corrido com todos os detalhes</b> do registro, <b>mas NÃO está dentro do prazo</b> estipulado',
      i: 'A <b>certidão possui as informações em formato de “tabela”</b> e tem <b>apenas os dados principais</b>: nomes dos pais e avós, data de nascimento, data do registro etc.',
      j: 'Você <b>possui apenas uma cópia digital ou física da certidão brasileira</b>, independentemente de estar em inteiro teor ou breve relato',
      k: 'Você <b>possui a certidão estrangeira</b> (emitida fora da Itália ou Brasil) em <b>formato ORIGINAL e físico</b>',
      l: 'Você <b>possui a certidão estrangeira</b> (emitida fora da Itália ou Brasil), mas <b>NÃO está no formato original</b>',
    };
    const optsItalyText = {
      a: `Possuo a via física e ORIGINAL - emitida em ${year - 10} ou depois`,
      b: `Possuo a via física e ORIGINAL - emitida antes de ${year - 10}`,
      c: 'Possuo apenas uma CÓPIA do documento italiano',
      d: 'Não sei em qual Comune ou Parrocchia está o registro',
      e: 'Não sei informar',
      f: 'Não se aplica - solteiro(a) ou União Estável',
      g: `Possuo a via física e ORIGINAL em INTEIRO TEOR emitida em ${year - 5} ou depois`,
      h: `Possuo a via física e ORIGINAL em INTEIRO TEOR emitida antes de ${year - 5}`,
      i: 'Possuo a via física e original em BREVE RELATO ',
      j: 'Possuo apenas uma CÓPIA da certidão brasileira',
      k: 'Possuo um registro físico e ORIGINAL',
      l: 'Possuo apenas uma CÓPIA do registro',
    };

    this.optsOtherText = {
      textA: '',
      get a() {
        return this.textA;
      },
      set a(country) {
        this.textA = `Possuo um registro físico e ORIGINAL feito pelo país de nascimento - ${country}`;
      },
      b: 'Possuo um registro físico e ORIGINAL feito no Consulado brasileiro',
      c: 'Possuo um registro físico e ORIGINAL feito em cartório brasileiro - Transcrito no Brasil',
      textD: '',
      get d() {
        return this.textD;
      },
      set d(country) {
        this.textD = `Possuo uma CÓPIA do registro feito pelo país de nascimento - ${country}`;
      },
      e: 'Possuo uma CÓPIA do registro feito no Consulado ou Cartório brasileiro',
      f: 'Não se aplica - solteiro(a) ou União Estável',
      g: `Possuo um registro físico e ORIGINAL em INTEIRO TEOR - emitido em ${year - 5} ou depois`,
      h: `Possuo um registro físico e ORIGINAL em INTEIRO TEOR - emitido antes de ${year - 5}`,
      i: 'Possuo um registro físico e ORIGINAL em BREVE RELATO',
      j: 'Possuo apenas uma CÓPIA do registro',
      k: 'Possuo um registro físico e ORIGINAL',
      l: 'Possuo apenas uma CÓPIA do registro',
      m: 'Não sei informar',
    };
    this.optsOtherTips = {
      a: 'A <b>certidão é “estrangeira”</b> e no formato <b>físico original</b>, sendo <b>emitida por um órgão competente</b> do <b>país que ocorreu o nascimento</b>',
      b: 'A <b>certidão é brasileira</b> e no formato <b>físico original, emitida por um órgão BRASILEIRO</b>, sendo o Consulado ou Embaixada brasileira localizado no país de nascimento',
      c: 'A <b>certidão é brasileira</b> e no formato <b>físico original</b>, sendo <b>emitida por um CARTÓRIO</b> após o registro do Consulado ter sido <b>inscrito no Brasil</b> (transcrição da certidão)',
      d: 'A <b>certidão é “estrangeira”</b> e foi <b>emitida por um órgão competente</b> do <b>país que ocorreu o nascimento</b>, mas é apenas uma CÓPIA física ou digital',
      e: 'A <b>certidão é brasileira</b> e foi emitida por um cartório ou Consulado brasileiro, mas é <b>apenas uma CÓPIA</b>',
      f: '<b>Não há registro civil de casamento</b> ou possui <b>apenas uma UNIÃO ESTÁVEL</b>',
      g: 'A <b>certidão tem um texto corrido</b> com todos os detalhes do registro e <b>está dentro do prazo</b> estipulado',
      h: 'A <b>certidão tem um texto corrido</b> com todos os detalhes do registro, mas <b>NÃO está dentro do prazo</b> estipulado',
      i: 'A <b>certidão possui as informações em formato de “tabela”</b> e tem apenas os dados principais do registro',
      j: 'Você possui <b>apenas uma cópia digital ou física</b> da certidão brasileira, independentemente de estar em inteiro teor ou breve relato',
      k: 'Você possui uma <b>certidão física e original emitida por outro país, <b>NÃO</b> sendo do local de nascimento ou Brasil',
      l: 'Você possui <b>apenas uma CÓPIA digital ou física</b> da certidão emitida por outro país, <b>NÃO sendo</b> do <b>local de nascimento ou Brasil</b>',
      m: 'Você <b>NÃO</b> tem certeza sobre o estado do documento ou ele <b>NÃO se encaixa nas opções abaixo</b>',
    };

    this.locals = [
      { optionValue: 'pd', optionText: 'Selecione um país' },
    ];
    this.optsBrazilBirthCertificate = [
      { optionValue: 'pd', optionText: 'Selecione uma opção' },
      { optionValue: 'a', optionText: optsBrazilText.a, optionTip: optsBrazilTips.a },
      { optionValue: 'b', optionText: optsBrazilText.b, optionTip: optsBrazilTips.b },
      { optionValue: 'c', optionText: optsBrazilText.c, optionTip: optsBrazilTips.c },
      { optionValue: 'd', optionText: optsBrazilText.d, optionTip: optsBrazilTips.d },
      { optionValue: 'e', optionText: optsBrazilText.e, optionTip: optsBrazilTips.e },
      { optionValue: 'f', optionText: optsBrazilText.f, optionTip: optsBrazilTips.f },
    ];
    this.optsBrazilMarriageCertificate = [
      { optionValue: 'pd', optionText: 'Selecione uma opção' },
      { optionValue: 'g', optionText: optsBrazilText.g, optionTip: optsBrazilTips.g },
      { optionValue: 'f', optionText: optsBrazilText.f, optionTip: optsBrazilTips.f },
      {
        group: true,
        label: 'celebrado em: BRASIL',
        optionsOfGroup: [
          { optionValue: 'a', optionText: optsBrazilText.a, optionTip: optsBrazilTips.a },
          { optionValue: 'b', optionText: optsBrazilText.b, optionTip: optsBrazilTips.b },
          { optionValue: 'c', optionText: optsBrazilText.c, optionTip: optsBrazilTips.c },
          { optionValue: 'd', optionText: optsBrazilText.d, optionTip: optsBrazilTips.d },
          { optionValue: 'e', optionText: optsBrazilText.e, optionTip: optsBrazilTips.e },
        ],
      },
      {
        group: true,
        label: 'celebrado em: FORA DO BRASIL',
        optionsOfGroup: [
          { optionValue: 'h', optionText: optsBrazilText.h, optionTip: optsBrazilTips.h },
          { optionValue: 'i', optionText: optsBrazilText.i, optionTip: optsBrazilTips.i },
          { optionValue: 'j', optionText: optsBrazilText.j, optionTip: optsBrazilTips.j },
          { optionValue: 'k', optionText: optsBrazilText.k, optionTip: optsBrazilTips.k },
          { optionValue: 'l', optionText: optsBrazilText.l, optionTip: optsBrazilTips.l },
        ],
      },
    ];
    this.optsItalyBirthCertificate = [
      { optionValue: 'pd', optionText: 'Selecione uma opção' },
      { optionValue: 'a', optionText: optsItalyText.a, optionTip: optsItalyTips.a },
      { optionValue: 'b', optionText: optsItalyText.b, optionTip: optsItalyTips.b },
      { optionValue: 'c', optionText: optsItalyText.c, optionTip: optsItalyTips.c },
      { optionValue: 'd', optionText: optsItalyText.d, optionTip: optsItalyTips.d },
      { optionValue: 'e', optionText: optsItalyText.e, optionTip: optsItalyTips.e },
    ];
    this.optsItalyMarriageCertificate = [
      { optionValue: 'pd', optionText: 'Selecione uma opção' },
      { optionValue: 'f', optionText: optsItalyText.f, optionTip: optsItalyTips.f },
      { optionValue: 'e', optionText: optsItalyText.e, optionTip: optsItalyTips.e },
      {
        group: true,
        label: 'celebrado em: ITÁLIA',
        optionsOfGroup: [
          { optionValue: 'a', optionText: optsItalyText.a, optionTip: optsItalyTips.a },
          { optionValue: 'b', optionText: optsItalyText.b, optionTip: optsItalyTips.b },
          { optionValue: 'c', optionText: optsItalyText.c, optionTip: optsItalyTips.c },
          { optionValue: 'd', optionText: optsItalyText.d, optionTip: optsItalyTips.d },
        ],
      },
      {
        group: true,
        label: 'celebrado em: BRASIL',
        optionsOfGroup: [
          { optionValue: 'g', optionText: optsItalyText.g, optionTip: optsItalyTips.g },
          { optionValue: 'h', optionText: optsItalyText.h, optionTip: optsItalyTips.h },
          { optionValue: 'i', optionText: optsItalyText.i, optionTip: optsItalyTips.i },
          { optionValue: 'j', optionText: optsItalyText.j, optionTip: optsItalyTips.j },
        ],
      },
      {
        group: true,
        label: 'celebrado em: OUTRO PAÍS',
        optionsOfGroup: [
          { optionValue: 'k', optionText: optsItalyText.k, optionTip: optsItalyTips.k },
          { optionValue: 'l', optionText: optsItalyText.l, optionTip: optsItalyTips.l },
        ],
      },
    ];

    this.selectorCSS = selectorCSS;
    this.modeEntry = modeEntry;
  }

  async createForm() {
    this.createNameOfAdding();
    this.form = this.ct.createForm();
    this.form.appendChild(await this.firstPartForm());
    if (this.modeEntry === 'edit') {
      this.secondPartForm();
      this.tabindexOfSecondBox('disable');
    }
    this.formListerners();
    return this.form;
  }

  async firstPartForm() {
    const boxInfosModal = this.ct.createDiv(['box-infos-modal']);
    const containerBox1 = this.ct.createDiv(['container-box-1']);
    const containerName = this.ct.createDiv(['container-nome']);
    const containerBirth = this.ct.createDiv(['container-date-place-birth']);
    const containerSexApplicant = this.ct.createDiv(['container-sex-applicant']);
    const labelInputName = this.ct.createLabel('input-name');
    this.inptName = this.ct.createInputText(['inptValidate'], 'input-name');
    this.containerBirthPlace = this.ct.createDiv(['container-birth-place']);
    const containerBirthDate = this.ct.createDiv(['container-birth-date']);
    const labelBirthPlace = this.ct.createLabel('select-birth-place');
    const labelBirthDate = this.ct.createLabel('input-birth-date');
    this.inptBirthDate = this.ct.createInputText([], 'input-birth-date');
    const containerSex = this.ct.createDiv(['container-sex']);
    const containerApplicant = this.ct.createDiv(['container-applicant']);
    const div1ContainerSex = this.ct.createDiv([]);
    const div2ContainerSex = this.ct.createDiv([]);
    const div1ContainerApplicant = this.ct.createDiv([]);
    const div2ContainerApplicant = this.ct.createDiv([]);
    this.inptManRadio = this.ct.createInputRadio('sex', 'maleRadio', 'man');
    const labelMaleRadio = this.ct.createLabel('man');
    this.inptWomanRadio = this.ct.createInputRadio('sex', 'femaleRadio', 'woman');
    const labelFemaleRadio = this.ct.createLabel('woman');
    this.inptYesApplicant = this.ct.createInputRadio('applicant', 'yes', 'applicantYesRadio');
    const labelYesApplicant = this.ct.createLabel('applicantYesRadio');
    this.inptNoApplicant = this.ct.createInputRadio('applicant', 'no', 'applicantNoRadio');
    const labelNoApplicant = this.ct.createLabel('applicantNoRadio');

    const doubtApplicat = containerDoubt(
      'Selecione esta opção para <b>quem tem interesse no reconhecimento da cidadania</b>, incluindo menores de idade',
      '',
      'top',
    );
    const doubtNoApplicat = containerDoubt(
      'Selecione esta opção para o italiano, falecidos ou no caso dos membros que <b>NÃO têm interesse no reconhecimento da cidadania</b>',
      '',
      'top',
    );

    boxInfosModal.appendChild(containerName);
    boxInfosModal.appendChild(containerBirth);
    boxInfosModal.appendChild(containerSexApplicant);

    containerName.appendChild(labelInputName);
    containerName.appendChild(this.inptName);

    containerBirth.appendChild(this.containerBirthPlace);
    containerBirth.appendChild(containerBirthDate);

    containerSexApplicant.appendChild(containerSex);
    containerSexApplicant.appendChild(containerApplicant);

    this.containerBirthPlace.appendChild(labelBirthPlace);

    containerBirthDate.appendChild(labelBirthDate);
    containerBirthDate.appendChild(this.inptBirthDate);

    containerSex.appendChild(div1ContainerSex);
    containerSex.appendChild(div2ContainerSex);

    div1ContainerSex.appendChild(this.inptManRadio);
    div1ContainerSex.appendChild(labelMaleRadio);

    div2ContainerSex.appendChild(this.inptWomanRadio);
    div2ContainerSex.appendChild(labelFemaleRadio);

    containerApplicant.appendChild(div1ContainerApplicant);
    containerApplicant.appendChild(div2ContainerApplicant);

    div1ContainerApplicant.appendChild(this.inptYesApplicant);
    div1ContainerApplicant.appendChild(labelYesApplicant);

    div2ContainerApplicant.appendChild(this.inptNoApplicant);
    div2ContainerApplicant.appendChild(labelNoApplicant);

    labelInputName.innerText = 'nome completo';
    labelBirthDate.innerText = 'data de nascimento';
    labelBirthPlace.innerText = 'país de nascimento';
    labelFemaleRadio.innerText = 'feminino';
    labelMaleRadio.innerText = 'masculino';
    labelYesApplicant.innerText = 'requerente';
    labelNoApplicant.innerText = 'não requerente';
    this.inptName.placeholder = 'Ex: Giuseppe Francesco Rossi';

    div1ContainerApplicant.appendChild(doubtApplicat);
    div2ContainerApplicant.appendChild(doubtNoApplicat);

    this.inptBirthDate.addEventListener('keypress', (e) => {
      const codeKey = e.key.charCodeAt();
      const date = this.inptBirthDate.value;
      const lengthInput = date.length;
      if (
        !((codeKey >= 48 && codeKey <= 57)
        || codeKey === 66 || codeKey === 68 || codeKey === 65)) e.preventDefault();
      if (lengthInput >= 4) this.regexInputBirhtDate(date);
      // this.regexInputBirhtDate(date);
    });
    this.inptBirthDate.placeholder = 'Ex: 1880 ou 10/04/1880';
    this.inptBirthDate.maxLength = '10';

    await fetch('/family_tree/frontend/assets/json/countries.json')
      .then((promise) => promise.json())
      .then((data) => {
        const keys = Object.keys(data);
        keys.forEach((key) => {
          const obj = { optionValue: key, optionText: data[key] };
          this.locals.push(obj);
        });
      });

    this.selectBirthPlace = this.ct.createSelectInput(this.locals);
    this.selectBirthPlace.id = 'select-birth-place';
    const optDefatult = this.selectBirthPlace.options[0];
    optDefatult.defaultSelected = 'true';
    optDefatult.disabled = 'true';
    this.containerBirthPlace.appendChild(this.selectBirthPlace);
    this.selectBirthPlace.addEventListener('change', () => {
      this.selectBirthPlace.style.opacity = '1';
    });

    containerBox1.appendChild(boxInfosModal);
    containerBox1.appendChild(this.createBtnTypeAction('nextPartForm'));

    return containerBox1;
  }

  regexInputBirhtDate(date) {
    const { length } = this.inptBirthDate.value;
    // if (length <= 4) return undefined;
    if (length === 4 && !(this.inptBirthDate.value.includes('/'))) {
      this.inptBirthDate.value = `${date.slice(0, 2)}/${date.slice(2, 4)}/${date.slice(6)}`;
      return;
    }
    if (length === 5 && this.inptBirthDate.value.includes('/')) {
      this.inptBirthDate.value = `${date.slice(0, 2)}/${date.slice(3, 5)}/${date.slice(6)}`;
    }
    // const regex = /([0-9]{2})([0-9]{2})([0-9]{1,4})/;
    // const newFormat = '$1/$2/$3';
    // return date.replace(regex, newFormat);
    // this.inptBirthDate.value = date.replace(regex, newFormat);
    // return undefined;
  }

  secondPartForm() {
    const boxInfosModal = this.ct.createDiv(['box-infos-modal']);
    const ctnrBox2 = this.ct.createDiv(['container-box-2']);
    const ctnrButtons = this.ct.createDiv(['container-btns-back-include']);
    const btnBack = this.createBtnTypeAction('backPartForm');
    let btnIncludeOrEdit;
    if (this.modeEntry === 'edit') {
      btnIncludeOrEdit = this.createBtnTypeAction('edit');
    } else {
      btnIncludeOrEdit = this.createBtnTypeAction('include');
    }
    this.ctnrBirthCertificate = this.ct.createDiv(['ctnr-birth-certificate']);
    const ctnrCenterLine = this.ct.createDiv(['ctnr-center-line']);
    this.ctnrMarriageCertificate = this.ct.createDiv(['ctnr-marriage-certificate']);
    const line = this.ct.createDiv(['center-line-box2']);
    const msgFiles = 'Inserir arquivo da certidão (opcional)';
    const tooltiptextBirth = containerDoubt('Selecione uma opção', 'tooltiptextBirth', 'right');
    const tooltiptextMarriage = containerDoubt('Selecione uma opção', 'tooltiptextMarriage', 'left');

    // Select informações do Nascimento
    this.lblSelectInfsBirthCertificate = this.ct.createLabel('infos-birth-certificate');
    this.lblSelectInfsBirthCertificate.classList.add('lbl-certificates', 'birth');

    // Input arquivo Nascimento
    this.inptFileBirthCertificate = this.ct.createInputFile(['file-input'], 'docs-birth-certificate');
    this.lblInptFileBirthCertificate = this.ct.createLabel('docs-birth-certificate');
    this.lblInptFileBirthCertificate.classList.add('lbl-file-input');
    this.lblInptFileBirthCertificate.innerHTML = '<p>clique para selecionar</br>ou</br>arraste os arquivos</p>';
    this.lblInptFileBirthCertificate.title = msgFiles;

    // Select informações do Casamento
    this.lblSelectInfsMarriageCertificate = this.ct.createLabel('infos-marriage-certificate');
    this.lblSelectInfsMarriageCertificate.classList.add('lbl-certificates', 'marriage');

    this.lblSelectInfsBirthCertificate.innerText = 'certidão nascimento';
    this.lblSelectInfsMarriageCertificate.innerText = 'certidão casamento';

    // Input arquivo Casamento
    this.inptFileMarriageCertificate = this.ct.createInputFile(['file-input'], 'docs-marriage-certificate');
    this.lblInptFileMarriageCertificate = this.ct.createLabel('docs-marriage-certificate');
    this.lblInptFileMarriageCertificate.classList.add('lbl-file-input');
    this.lblInptFileMarriageCertificate.innerHTML = '<p>clique para selecionar</br>ou</br>arraste os arquivos</p>';
    this.lblInptFileMarriageCertificate.title = msgFiles;

    this.ctnrBirthCertificate.appendChild(this.lblSelectInfsBirthCertificate);
    this.ctnrBirthCertificate.appendChild(tooltiptextBirth);

    this.ctnrBirthCertificate.appendChild(this.inptFileBirthCertificate);
    this.ctnrBirthCertificate.appendChild(this.lblInptFileBirthCertificate);

    this.ctnrMarriageCertificate.appendChild(this.lblSelectInfsMarriageCertificate);
    this.ctnrMarriageCertificate.appendChild(tooltiptextMarriage);

    this.ctnrMarriageCertificate.appendChild(this.inptFileMarriageCertificate);
    this.ctnrMarriageCertificate.appendChild(this.lblInptFileMarriageCertificate);

    ctnrCenterLine.appendChild(line);
    boxInfosModal.appendChild(this.ctnrBirthCertificate);
    boxInfosModal.appendChild(ctnrCenterLine);
    boxInfosModal.appendChild(this.ctnrMarriageCertificate);
    ctnrBox2.appendChild(boxInfosModal);
    ctnrButtons.appendChild(btnBack);
    ctnrButtons.appendChild(btnIncludeOrEdit);
    ctnrBox2.appendChild(ctnrButtons);

    this.inptFileBirthCertificate.addEventListener('change', (e) => {
      const { files } = e.target;
      const valid = this.validFiles(files);
      if (!valid) {
        window.alert('Arquivo inválido');
      } else {
        this.updateFiles(files, 'birth', true);
      }
    });

    this.inptFileMarriageCertificate.addEventListener('change', (e) => {
      const { files } = e.target;
      const valid = this.validFiles(files);
      if (!valid) {
        this.inptFileMarriageCertificate.value = '';
        window.alert('Arquivo inválido');
      } else {
        this.updateFiles(files, 'marriage', true);
      }
    });
    this.loadSelectInfosCertificates(this.selectBirthPlace.value);
    this.dropListeners();
    this.form.appendChild(ctnrBox2);
  }

  dropListeners() {
    // LABEL BIRTH CERTIFICATE
    this.lblInptFileBirthCertificate.ondragenter = (e) => e.preventDefault();

    this.lblInptFileBirthCertificate.ondragover = (e) => {
      e.preventDefault();
      this.lblInptFileBirthCertificate.style.backgroundColor = '#F2F2F2';
    };

    this.lblInptFileBirthCertificate.ondragleave = (e) => {
      e.preventDefault();
      this.lblInptFileBirthCertificate.style.backgroundColor = 'white';
    };

    this.lblInptFileBirthCertificate.addEventListener('drop', (e) => {
      e.preventDefault();
      const { files } = e.dataTransfer;
      const valid = this.validFiles(files);
      if (!valid) {
        window.alert('Arquivo inválido');
      } else {
        this.dropFiles(files, 'birth', false);
      }
      this.lblInptFileBirthCertificate.style.backgroundColor = 'white';
    });

    // LABEL MARRIAGE CERTIFICATE
    this.lblInptFileMarriageCertificate.ondragenter = (e) => e.preventDefault();

    this.lblInptFileMarriageCertificate.ondragover = (e) => {
      e.preventDefault();
      this.lblInptFileMarriageCertificate.style.backgroundColor = '#F2F2F2';
    };

    this.lblInptFileMarriageCertificate.ondragleave = (e) => {
      e.preventDefault();
      this.lblInptFileMarriageCertificate.style.backgroundColor = 'white';
    };

    this.lblInptFileMarriageCertificate.addEventListener('drop', (e) => {
      e.preventDefault();
      this.lblInptFileMarriageCertificate.style.backgroundColor = 'white';
      const { files } = e.dataTransfer;
      const valid = this.validFiles(files);
      if (!valid) {
        window.alert('Arquivo inválido');
      } else {
        this.dropFiles(files, 'marriage', false);
      }
    });
  }

  formListerners() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btnSubmitter = e.submitter;
      const classes = btnSubmitter.classList;
      if (!this.isValidFirstPartForm()) return;
      if (classes.contains('next')) {
        const localBirth = document.querySelector('#select-birth-place').value;
        localStorage.setItem('locBirth', localBirth);
        const prevLocalBirth = localStorage.getItem('prevLocBirth');
        const box2 = document.querySelector('.container-box-2');

        if (!box2) {
          this.secondPartForm();
        } else {
          if (!(localBirth === prevLocalBirth)) {
            this.loadSelectInfosCertificates(this.selectBirthPlace.value);
          }
        }
        this.tabindexOfFirstBox('disable');
        this.tabindexOfSecondBox('enable');
        window.blur();
        setTimeout(() => {
          this.translateBoxes('left');
        }, 15);
      }
      if (classes.contains('back')) {
        const loc = localStorage.getItem('locBirth');
        localStorage.setItem('prevLocBirth', loc);
        this.tabindexOfSecondBox('disable');
        this.tabindexOfFirstBox('enable');
        this.translateBoxes('right');
      }
      if (classes.contains('add')) {
        if (this.isValidSecondPartForm()) {
          const infos = {
            fullName: this.inptName.value.trim(),
            birthPlace: this.selectBirthPlace.value,
            birthPlaceComplete: this.selectBirthPlace.selectedOptions[0].label,
            birthDate: this.inptBirthDate.value,
            gender: this.inptManRadio.checked ? 'man' : 'woman',
            applicant: !!this.inptYesApplicant.checked,
            valueBirthCertificate: this.inptSelectInfBirthCertificate.value,
            textBirthCertificate: this.inptSelectInfBirthCertificate.selectedOptions[0].label,
            valueMarriageCertificate: this.inptSelectInfMarriageCertificate.value,
            textMarriageCertificate: this.inptSelectInfMarriageCertificate.selectedOptions[0].label,
            docsBirthCertificate: this.inptFileBirthCertificate.files,
            docsMarriageCertificate: this.inptFileMarriageCertificate.files,
          };
          this.createMember(infos, this.selectorCSS, this.modeEntry);
        }
      }
      if (classes.contains('edit')) {
        if (!this.isValidFirstPartForm()) return;
        if (!this.isValidSecondPartForm()) return;
        const infos = {
          fullName: this.inptName.value.trim(),
          birthPlace: this.selectBirthPlace.value,
          birthPlaceComplete: this.selectBirthPlace.selectedOptions[0].label,
          birthDate: this.inptBirthDate.value,
          gender: this.inptManRadio.checked ? 'man' : 'woman',
          applicant: !!this.inptYesApplicant.checked,
          valueBirthCertificate: this.inptSelectInfBirthCertificate.value,
          textBirthCertificate: this.inptSelectInfBirthCertificate.selectedOptions[0].label,
          valueMarriageCertificate: this.inptSelectInfMarriageCertificate.value,
          textMarriageCertificate: this.inptSelectInfMarriageCertificate.selectedOptions[0].label,
          docsBirthCertificate: this.inptFileBirthCertificate.files,
          docsMarriageCertificate: this.inptFileMarriageCertificate.files,
        };
        this.editMember(infos, this.selectorCSS, this.modeEntry);
      }
      btnSubmitter.blur();
    });
  }

  isValidFirstPartForm() {
    let valid = true;
    const valueIput = this.inptBirthDate.value;
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const currentday = date.getDate();
    const inputs = document.querySelectorAll('.inptValidate');
    const invalids = document.querySelectorAll('.invalidItem');
    let year;
    let month;
    let day;
    if (valueIput.length <= 4) {
      year = Number(valueIput);
    } else {
      year = Number(valueIput.slice(6));
      month = Number(valueIput.slice(3, 5));
      day = Number(valueIput.slice(0, 2));
    }

    const invalidYear = year < 1700
    || Number.isNaN(year)
    || String(year).length < 4 || year > currentYear;
    const invalidMonth = month > 12
    || (year >= currentYear && month > currentMonth) || Number.isNaN(month);
    const invalidDay = day > 31
    || ((day > currentday && month >= currentMonth) && year >= currentYear);
    const emptyDate = this.inptBirthDate.value === '';
    let invalidDate = false;
    const monthAndDays = [
      { month: 1, maxDays: 31 },
      { month: 2, maxDays: 29 },
      { month: 3, maxDays: 31 },
      { month: 4, maxDays: 30 },
      { month: 5, maxDays: 31 },
      { month: 6, maxDays: 30 },
      { month: 7, maxDays: 31 },
      { month: 8, maxDays: 31 },
      { month: 9, maxDays: 30 },
      { month: 10, maxDays: 31 },
      { month: 11, maxDays: 30 },
      { month: 12, maxDays: 31 },
    ];

    monthAndDays.forEach((object) => {
      if (object.month === month && object.maxDays < day) invalidDate = true;
    });

    if (invalids.length > 0) {
      invalids.forEach((el) => {
        el.remove();
      });
    }
    inputs.forEach((element) => {
      if (element.value === '' || element.value === 'pd') {
        const div = this.ct.createDiv(['invalidItem']);
        div.innerText = 'Campo obrigatório';
        element.insertAdjacentElement('afterend', div);
        valid = false;
        element.focus();
      }
    });
    if (this.selectBirthPlace.value === 'pd') {
      const div = this.ct.createDiv(['invalidItem']);
      div.innerText = 'Escolha uma opção';
      this.selectBirthPlace.insertAdjacentElement('afterend', div);
      valid = false;
      this.selectBirthPlace.focus();
    }
    if (emptyDate || invalidYear || invalidMonth || invalidDay || invalidDate) {
      const container = document.querySelector('.container-birth-date');
      const div = this.ct.createDiv(['invalidItem']);
      if (invalidYear) div.innerText = 'Ano inválido';
      if (invalidMonth) div.innerText = 'Mês inválido';
      if (invalidDay) div.innerText = 'Dia inválido';
      if (invalidDate) div.innerText = 'Data inválida';
      container.appendChild(div);
      valid = false;
      this.inptBirthDate.focus();
    }
    if ((!this.inptManRadio.checked) && (!this.inptWomanRadio.checked)) {
      const containeInptRadio = document.querySelector('.container-sex');
      const div = this.ct.createDiv(['invalidItem']);
      div.innerText = 'Escolha uma opção';
      containeInptRadio.appendChild(div);
      valid = false;
      this.inptManRadio.focus();
    }
    if ((!this.inptYesApplicant.checked) && (!this.inptNoApplicant.checked)) {
      const containerApp = document.querySelector('.container-applicant');
      const div = this.ct.createDiv(['invalidItem']);
      div.innerText = 'Escolha uma opção';
      containerApp.appendChild(div);
      valid = false;
      this.inptNoApplicant.focus();
    }
    return valid;
  }

  isValidSecondPartForm() {
    let valid = true;
    const inptBirthSelection = document.querySelector('#infos-birth-certificate');
    const inptMarriageSelection = document.querySelector('#infos-marriage-certificate');
    if (inptBirthSelection.value === 'pd') {
      const div = this.ct.createDiv(['invalidItem']);
      div.innerText = 'Escolha uma opção';
      inptBirthSelection.nextElementSibling.insertAdjacentElement('afterend', div);
      valid = false;
      inptBirthSelection.focus();
    }

    if (inptMarriageSelection.value === 'pd') {
      const div = this.ct.createDiv(['invalidItem']);
      div.innerText = 'Escolha uma opção';
      inptMarriageSelection.nextElementSibling.insertAdjacentElement('afterend', div);
      valid = false;
      inptMarriageSelection.focus();
    }

    return valid;
  }

  tabindexOfSecondBox(mode) {
    if (mode === 'disable') {
      this.btnBackPartForm.setAttribute('tabindex', '-1');
      this.btnBackPartForm.blur();
      this.btnAddPartForm.setAttribute('tabindex', '-1');
      this.btnAddPartForm.blur();
      this.inptSelectInfBirthCertificate.setAttribute('tabindex', '-1');
      this.inptSelectInfBirthCertificate.blur();
      this.inptSelectInfMarriageCertificate.setAttribute('tabindex', '-1');
      this.inptSelectInfMarriageCertificate.blur();
      return;
    }
    this.btnBackPartForm.setAttribute('tabindex', '');
    this.btnAddPartForm.setAttribute('tabindex', '');
    this.inptSelectInfBirthCertificate.setAttribute('tabindex', '1');
    this.inptSelectInfMarriageCertificate.setAttribute('tabindex', '2');
  }

  tabindexOfFirstBox(mode) {
    if (mode === 'disable') {
      this.inptName.setAttribute('tabindex', '-1');
      this.inptName.blur();
      this.selectBirthPlace.setAttribute('tabindex', '-1');
      this.selectBirthPlace.blur();
      this.inptBirthDate.setAttribute('tabindex', '-1');
      this.inptBirthDate.blur();
      this.btnNextPartForm.setAttribute('tabindex', '-1');
      this.btnNextPartForm.blur();
      this.inptNoApplicant.setAttribute('tabindex', '-1');
      this.inptNoApplicant.blur();
      this.inptYesApplicant.setAttribute('tabindex', '-1');
      this.inptYesApplicant.blur();
      this.inptManRadio.setAttribute('tabindex', '-1');
      this.inptManRadio.blur();
      this.inptWomanRadio.setAttribute('tabindex', '-1');
      this.inptWomanRadio.blur();
      return;
    }
    this.inptName.setAttribute('tabindex', '');
    this.selectBirthPlace.setAttribute('tabindex', '');
    this.inptBirthDate.setAttribute('tabindex', '');
    this.btnNextPartForm.setAttribute('tabindex', '');
    this.inptNoApplicant.setAttribute('tabindex', '');
    this.inptYesApplicant.setAttribute('tabindex', '');
    this.inptManRadio.setAttribute('tabindex', '');
    this.inptWomanRadio.setAttribute('tabindex', '');
  }

  loadSelectInfosCertificates(localBirth) {
    const inptBirthExists = document.querySelector('#infos-birth-certificate');
    const inptMarriageExists = document.querySelector('#infos-marriage-certificate');
    if (!this.lblSelectInfsBirthCertificate) {
      this.lblSelectInfsBirthCertificate = document.querySelector('.lbl-certificates.birth');
      this.lblSelectInfsMarriageCertificate = document.querySelector('.lbl-certificates.marriage');
    }
    if (inptBirthExists) inptBirthExists.remove();
    if (inptMarriageExists) inptMarriageExists.remove();
    if (localBirth === 'br') {
      // eslint-disable-next-line max-len
      this.inptSelectInfBirthCertificate = this.ct.createSelectInput(this.optsBrazilBirthCertificate);
      // eslint-disable-next-line max-len
      this.inptSelectInfMarriageCertificate = this.ct.createSelectInput(this.optsBrazilMarriageCertificate);
    } else if (localBirth === 'it') {
      // eslint-disable-next-line max-len
      this.inptSelectInfBirthCertificate = this.ct.createSelectInput(this.optsItalyBirthCertificate);
      // eslint-disable-next-line max-len
      this.inptSelectInfMarriageCertificate = this.ct.createSelectInput(this.optsItalyMarriageCertificate);
    } else {
      this.optsOtherBirthCertificate = [
        { optionValue: 'pd', optionText: 'Selecione uma opção' },
        {
          optionValue: 'a',
          setA: this.optsOtherText.a = this.selectBirthPlace.selectedOptions[0].label,
          optionText: this.optsOtherText.a,
          optionTip: this.optsOtherTips.a,
        },
        { optionValue: 'b', optionText: this.optsOtherText.b, optionTip: this.optsOtherTips.b },
        { optionValue: 'c', optionText: this.optsOtherText.c, optionTip: this.optsOtherTips.c },
        {
          optionValue: 'd',
          setD: this.optsOtherText.d = this.selectBirthPlace.selectedOptions[0].label,
          optionText: this.optsOtherText.d,
          optionTip: this.optsOtherTips.d,
        },
        { optionValue: 'e', optionText: this.optsOtherText.e, optionTip: this.optsOtherTips.e },
        { optionValue: 'm', optionText: this.optsOtherText.m, optionTip: this.optsOtherTips.m },
      ];
      this.optsOtherMarriageCertificate = [
        { optionValue: 'pd', optionText: 'Selecione uma opção' },
        { optionValue: 'f', optionText: this.optsOtherText.f, optionTip: this.optsOtherTips.f },
        { optionValue: 'm', optionText: this.optsOtherText.m, optionTip: this.optsOtherTips.m },
        {
          group: true,
          label: `celebrado em: ${this.selectBirthPlace.selectedOptions[0].label.toUpperCase()}`,
          optionsOfGroup: [
            { optionValue: 'a', optionText: this.optsOtherText.a, optionTip: this.optsOtherTips.a },
            { optionValue: 'b', optionText: this.optsOtherText.b, optionTip: this.optsOtherTips.b },
            { optionValue: 'c', optionText: this.optsOtherText.c, optionTip: this.optsOtherTips.c },
            { optionValue: 'd', optionText: this.optsOtherText.d, optionTip: this.optsOtherTips.d },
            { optionValue: 'e', optionText: this.optsOtherText.e, optionTip: this.optsOtherTips.e },
          ],
        },
        {
          group: true,
          label: 'celebrado em: BRASIL',
          optionsOfGroup: [
            { optionValue: 'g', optionText: this.optsOtherText.g, optionTip: this.optsOtherTips.g },
            { optionValue: 'h', optionText: this.optsOtherText.h, optionTip: this.optsOtherTips.h },
            { optionValue: 'i', optionText: this.optsOtherText.i, optionTip: this.optsOtherTips.i },
            { optionValue: 'j', optionText: this.optsOtherText.j, optionTip: this.optsOtherTips.j },
          ],
        },
        {
          group: true,
          label: 'celebrado em: OUTRO PAÍS',
          optionsOfGroup: [
            { optionValue: 'k', optionText: this.optsOtherText.k, optionTip: this.optsOtherTips.k },
            { optionValue: 'l', optionText: this.optsOtherText.l, optionTip: this.optsOtherTips.l },
          ],
        },
      ];
      // eslint-disable-next-line max-len
      this.inptSelectInfBirthCertificate = this.ct.createSelectInput(this.optsOtherBirthCertificate);
      // eslint-disable-next-line max-len
      this.inptSelectInfMarriageCertificate = this.ct.createSelectInput(this.optsOtherMarriageCertificate);
    }
    this.inptSelectInfMarriageCertificate.id = 'infos-marriage-certificate';
    this.inptSelectInfBirthCertificate.id = 'infos-birth-certificate';
    this.lblSelectInfsBirthCertificate.insertAdjacentElement('afterend', this.inptSelectInfBirthCertificate);
    this.lblSelectInfsMarriageCertificate.insertAdjacentElement('afterend', this.inptSelectInfMarriageCertificate);
    const optDefatultBirth = this.inptSelectInfBirthCertificate.options[0];
    const optDefatultMarriage = this.inptSelectInfMarriageCertificate.options[0];
    optDefatultBirth.defaultSelected = 'true';
    optDefatultMarriage.defaultSelected = 'true';
    optDefatultBirth.disabled = 'true';
    optDefatultMarriage.disabled = 'true';
    this.inptSelectInfBirthCertificate.addEventListener('change', () => {
      this.inptSelectInfBirthCertificate.style.opacity = '1';
      this.loadTipesInformations(this.inptSelectInfBirthCertificate.value, 'tooltiptextBirth', localBirth);
    });
    this.inptSelectInfMarriageCertificate.addEventListener('change', () => {
      this.inptSelectInfMarriageCertificate.style.opacity = '1';
      this.loadTipesInformations(this.inptSelectInfMarriageCertificate.value, 'tooltiptextMarriage', localBirth);
    });
  }

  loadTipesInformations(optionSelected, idTooltip, localBirth) {
    const tooltip = document.querySelector(`#${idTooltip}`);

    if (localBirth === 'br') {
      if (idTooltip === 'tooltiptextBirth') {
        this.optsBrazilBirthCertificate.forEach((option) => {
          if (option.group) {
            option.optionsOfGroup.forEach((optionGroup) => {
              if (
                optionGroup.optionValue === optionSelected
              ) tooltip.innerHTML = optionGroup.optionTip;
            });
            return;
          }
          if (option.optionValue === optionSelected) tooltip.innerHTML = option.optionTip;
        });
      } else {
        this.optsBrazilMarriageCertificate.forEach((option) => {
          if (option.group) {
            option.optionsOfGroup.forEach((optionGroup) => {
              if (
                optionGroup.optionValue === optionSelected
              ) tooltip.innerHTML = optionGroup.optionTip;
            });
          }
          if (option.optionValue === optionSelected) tooltip.innerHTML = option.optionTip;
        });
      }
      return;
    }

    if (localBirth === 'it') {
      if (idTooltip === 'tooltiptextBirth') {
        this.optsItalyBirthCertificate.forEach((option) => {
          if (option.group) {
            option.optionsOfGroup.forEach((optionGroup) => {
              if (
                optionGroup.optionValue === optionSelected
              ) tooltip.innerHTML = optionGroup.optionTip;
            });
            return;
          }
          if (option.optionValue === optionSelected) tooltip.innerHTML = option.optionTip;
        });
      } else {
        this.optsItalyMarriageCertificate.forEach((option) => {
          if (option.group) {
            option.optionsOfGroup.forEach((optionGroup) => {
              if (
                optionGroup.optionValue === optionSelected
              ) tooltip.innerHTML = optionGroup.optionTip;
            });
          }
          if (option.optionValue === optionSelected) tooltip.innerHTML = option.optionTip;
        });
      }
      return;
    }

    if (idTooltip === 'tooltiptextBirth') {
      this.optsOtherBirthCertificate.forEach((option) => {
        if (option.group) {
          option.optionsOfGroup.forEach((optionGroup) => {
            if (
              optionGroup.optionValue === optionSelected
            ) tooltip.innerHTML = optionGroup.optionTip;
          });
          return;
        }
        if (option.optionValue === optionSelected) tooltip.innerHTML = option.optionTip;
      });
    } else {
      this.optsOtherMarriageCertificate.forEach((option) => {
        if (option.group) {
          option.optionsOfGroup.forEach((optionGroup) => {
            if (
              optionGroup.optionValue === optionSelected
            ) tooltip.innerHTML = optionGroup.optionTip;
          });
        }
        if (option.optionValue === optionSelected) tooltip.innerHTML = option.optionTip;
      });
    }
  }

  createContainerDataFiles(files, certificate) {
    const containter = this.ct.createDiv(['container-all-files', certificate]);
    const closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#D92525" class="bi bi-x-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
    let i = 1;
    Array.from(files).forEach((file) => {
      const containerDelete = this.ct.createDiv(['container-btn-delete-file', `container-btn-delete-file-${i}`, certificate]);
      const containerFile = this.ct.createDiv(['container-file', `container-file-${i}`]);
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
      containerDelete.title = 'Excluir arquivo';
      image.src = `../../frontend/assets/img/${type}.svg`;
      image.classList.add('img-file-upload');
      containerDelete.innerHTML = closeIcon;
      containerDivImgAndInfosFiles.appendChild(image);
      containerDivImgAndInfosFiles.appendChild(containerInfos);
      containerFile.appendChild(containerDivImgAndInfosFiles);
      containerFile.appendChild(containerDelete);
      containerInfos.appendChild(pName);
      containerInfos.appendChild(pSize);
      containter.appendChild(containerFile);
      containerDelete.addEventListener('click', (e) => this.removeFile(e));
      i += 1;
    });
    return containter;
  }

  dropFiles(files, certificate) {
    this.updateFiles(files, certificate, false);
  }

  validFiles(files) {
    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];
      const image = (file.type === 'image/jpeg') || (file.type === 'image/png');
      const pdf = file.type === 'application/pdf';
      if ((!image) && (!pdf)) return false;
    }
    return true;
  }

  removeFile(e) {
    const fileIndex = Number(e.currentTarget.classList[1].slice(-1)) - 1;
    const certificate = e.currentTarget.classList[2];
    const dt = new DataTransfer();
    let input;
    let files;

    if (certificate === 'birth') {
      input = this.inptFileBirthCertificate;
      files = input.files;
    } else {
      input = this.inptFileMarriageCertificate;
      files = input.files;
    }

    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];
      if (fileIndex !== i) { dt.items.add(file); }
    }
    input.files = dt.files;
    const containeFiles = document.querySelector(`.container-all-files.${certificate}`);
    containeFiles.remove();

    if (input.files.length > 0) {
      if (certificate === 'birth') {
        this.ctnrBirthCertificate.appendChild(
          this.createContainerDataFiles(input.files, certificate),
        );
      } else {
        this.ctnrMarriageCertificate.appendChild(
          this.createContainerDataFiles(input.files, certificate),
        );
      }
    }
  }

  updateFiles(files, certificate, eventChange) {
    const newFileList = new DataTransfer();
    const containerExists = document.querySelector(`.container-all-files.${certificate}`);
    let oldfFleList;
    if (containerExists) containerExists.remove();

    if (certificate === 'birth') {
      oldfFleList = this.inptFileBirthCertificate.files;
    } else {
      oldfFleList = this.inptFileMarriageCertificate.files;
    }

    if (oldfFleList.length > 0 && !eventChange) {
      Array.from(oldfFleList).forEach((item) => {
        newFileList.items.add(item);
      });
    }
    Array.from(files).forEach((item) => {
      newFileList.items.add(item);
    });

    if (certificate === 'birth') {
      this.ctnrBirthCertificate.appendChild(
        this.createContainerDataFiles(newFileList.files, certificate),
      );
      this.inptFileBirthCertificate.files = newFileList.files;
    } else {
      this.ctnrMarriageCertificate.appendChild(
        this.createContainerDataFiles(newFileList.files, certificate),
      );
      this.inptFileMarriageCertificate.files = newFileList.files;
    }
  }

  createBtnTypeAction(action) {
    const containerBtnAction = this.ct.createDiv(['container-btn-action']);
    if (action === 'nextPartForm') {
      const icon = this.ct.createIconTag(['fa-solid', 'fa-chevron-right', 'fa-2xl']);
      this.btnNextPartForm = this.ct.createButton();
      this.btnNextPartForm.classList.add('btn-action');
      this.btnNextPartForm.classList.add('next');
      this.btnNextPartForm.appendChild(icon);
      containerBtnAction.appendChild(this.btnNextPartForm);
      containerBtnAction.title = 'Próximas informações';
      return containerBtnAction;
    }
    if (action === 'backPartForm') {
      const icon = this.ct.createIconTag(['fa-solid', 'fa-chevron-left', 'fa-2xl']);
      this.btnBackPartForm = this.ct.createButton();
      this.btnBackPartForm.classList.add('btn-action');
      this.btnBackPartForm.classList.add('back');
      this.btnBackPartForm.appendChild(icon);
      containerBtnAction.appendChild(this.btnBackPartForm);
      containerBtnAction.title = 'Informações anteriores';
      return containerBtnAction;
    }

    const addText = this.ct.createSpan([]);
    this.btnAddPartForm = this.ct.createButton();
    this.btnAddPartForm.classList.add('btn-action');

    if (action === 'edit') {
      this.btnAddPartForm.classList.add('edit');
      addText.innerText = 'editar';
    } else {
      this.btnAddPartForm.classList.add('add');
      addText.innerText = 'adicionar';
    }

    this.btnAddPartForm.appendChild(addText);
    containerBtnAction.appendChild(this.btnAddPartForm);
    return containerBtnAction;
  }

  createNameOfAdding(name = this.nameAdding) {
    const nameInfoContainer = document.querySelector('.name-info-container');
    const nameSelected = this.ct.createDiv(['name-selected']);
    const line = this.ct.createDiv(['line-name-modal']);
    const span = this.ct.createSpan(['name-span']);
    nameInfoContainer.appendChild(nameSelected);
    nameInfoContainer.appendChild(line);

    if (this.modeEntry === 'edit') {
      span.innerText = name;
      nameSelected.innerText += 'Editar informações de ';
      nameSelected.appendChild(span);
      return nameSelected;
    }
    if (name === 'Dante Causa (Italiano)') {
      span.innerText = 'Dante Causa (Italiano)';
      nameSelected.innerText += 'Adicionar ';
    } else {
      span.innerText = name;
      nameSelected.innerText += 'Adicionar filho(a) de ';
    }
    nameSelected.appendChild(span);
    return nameSelected;
  }

  formValidateBox1() {
    let valid = true;
    const inputs = document.querySelectorAll('.inptValidate');
    const invalids = document.querySelectorAll('.invalidItem');
    const year = Number(this.inptBirthDate.value.slice(0, -6));
    const month = Number(this.inptBirthDate.value.slice(-5, -3));
    const day = Number(this.inptBirthDate.value.slice(-2));
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const currentday = date.getDate();
    const invalidYear = year > currentYear;
    const invalidMonth = (year >= currentYear && month > currentMonth);
    const invalidDay = ((day > currentday && month >= currentMonth) && year >= currentYear);
    const emptyDate = this.inptBirthDate.value === '';

    if (invalids.length > 0) {
      invalids.forEach((el) => {
        el.remove();
      });
    }
    inputs.forEach((element) => {
      if (element.value === '' || element.value === 'pd') {
        const div = this.ct.createDiv(['invalidItem']);
        div.innerText = 'Campo obrigatório';
        element.insertAdjacentElement('afterend', div);
        valid = false;
        element.focus();
      }
    });
    if (this.selectBirthPlace.value === 'pd') {
      const div = this.ct.createDiv(['invalidItem']);
      div.innerText = 'Escolha uma opção';
      this.selectBirthPlace.insertAdjacentElement('afterend', div);
      valid = false;
      this.selectBirthPlace.focus();
    }
    if (emptyDate || invalidYear || invalidMonth || invalidDay) {
      const container = document.querySelector('.container-birth-date');
      const div = this.ct.createDiv(['invalidItem']);
      div.innerText = 'Data inválida';
      container.appendChild(div);
      valid = false;
      this.inptBirthDate.focus();
    }
    if ((!this.inptManRadio.checked) && (!this.inptWomanRadio.checked)) {
      const containeInptRadio = document.querySelector('.container-sex');
      const div = this.ct.createDiv(['invalidItem']);
      div.innerText = 'Escolha uma opção';
      containeInptRadio.appendChild(div);
      valid = false;
      this.inptManRadio.focus();
    }
    if ((!this.inptYesApplicant.checked) && (!this.inptNoApplicant.checked)) {
      const containerApp = document.querySelector('.container-applicant');
      const div = this.ct.createDiv(['invalidItem']);
      div.innerText = 'Escolha uma opção';
      containerApp.appendChild(div);
      valid = false;
      this.inptNoApplicant.focus();
    }

    return valid;
  }

  translateBoxes(way) {
    const box1 = document.querySelector('.container-box-1');
    const box2 = document.querySelector('.container-box-2');
    if (way === 'left') {
      if (box1.classList.contains('right')) {
        box1.classList.remove('rigth');
        box2.classList.remove('rigth');
      }
      box1.classList.add('left');
      box2.classList.add('left');
      return;
    }
    box1.classList.remove('left');
    box2.classList.remove('left');
  }

  createMember(infos, selectorCSS, modeEntry) {
    const addMemberOnTree = new Tree(infos, selectorCSS, modeEntry);
    addMemberOnTree.add();
  }

  editMember(infos, selectorCSS) {
    const tree = new Tree({}, '', '');
    tree.editMember(infos, selectorCSS);
  }
}
