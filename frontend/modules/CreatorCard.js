import CreatorTags from './CreatorTags';

export default class CreatorCard {
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
  ) {
    this.ct = new CreatorTags();
    this.fullName = fullName;
    this.birthPlace = birthPlace;
    this.birthPlaceComplete = birthPlaceComplete;
    this.birthDate = birthDate;
    this.gender = gender;
    this.applicant = applicant;
    this.valueBirthCertificate = valueBirthCertificate;
    this.textBirthCertificate = textBirthCertificate;
    this.valueMarriageCertificate = valueMarriageCertificate;
    this.textMarriageCertificate = textMarriageCertificate;
    this.docsBirthCertificate = docsBirthCertificate;
    this.docsMarriageCertificate = docsMarriageCertificate;
  }

  calcAge(birthDate) {
    let year;
    if (birthDate.length === 4) year = Number(birthDate);
    year = Number(birthDate.slice(-4));
    const date = new Date();
    const currentYear = date.getFullYear();
    if (currentYear - year >= 65) return '-old';
    if (currentYear - year < 18) return '-minor';
    return '';
  }

  create() {
    if (!this.fullName) return '';

    const container = this.ct.createDiv(['container', 'card-container']);
    const age = this.calcAge(this.birthDate);

    const inptDocsBirthCertificate = this.ct.createInputFile(
      ['inpt-docs-birth'],
    );
    inptDocsBirthCertificate.style.display = 'none';
    inptDocsBirthCertificate.files = this.docsBirthCertificate;

    const inptDocsMarriageCertificate = this.ct.createInputFile(
      ['inpt-docs-marriage'],
    );
    inptDocsMarriageCertificate.style.display = 'none';
    inptDocsMarriageCertificate.files = this.docsMarriageCertificate;

    const spanvalueBirthCertificate = this.ct.createSpan(['infos-birth-certificate']);
    spanvalueBirthCertificate.innerText = this.valueBirthCertificate;
    spanvalueBirthCertificate.style.display = 'none';

    const spanTextBirthCertificate = this.ct.createSpan(['text-infos-birth-certificate']);
    spanTextBirthCertificate.innerText = this.textBirthCertificate;
    spanTextBirthCertificate.style.display = 'none';

    const spanvalueMarriageCertificate = this.ct.createSpan(['infos-marriage-certificate']);
    spanvalueMarriageCertificate.innerText = this.valueMarriageCertificate;
    spanvalueMarriageCertificate.style.display = 'none';

    const spanTextMarriageCertificate = this.ct.createSpan(['text-infos-marriage-certificate']);
    spanTextMarriageCertificate.innerText = this.textMarriageCertificate;
    spanTextMarriageCertificate.style.display = 'none';

    const spanGender = this.ct.createSpan(['info-gender']);
    spanGender.innerText = this.gender;
    spanGender.style.display = 'none';

    const spanApplicant = this.ct.createSpan(['info-applicant']);
    spanApplicant.innerText = this.applicant;
    spanApplicant.style.display = 'none';

    const spanLocalBirth = this.ct.createSpan(['info-local-birth']);
    spanLocalBirth.innerText = this.birthPlaceComplete;
    spanLocalBirth.style.display = 'none';

    const card = `
      <div class="card-img">
        <img
          class="img"
          alt="Avatar"
          src="../../family_tree/frontend/assets/img/${this.gender}${age}${this.applicant ? '.svg' : '-generic.svg'}"
        >
      </div>
      <div class="card-name">
        <div class="name">${this.fullName}</div>
      </div>
      <div class="card-flag-birth-container">
        <span class="acronym-birth-certificate" style="display: none;">${this.birthPlace}</span>
        <div class="container-flag">
          <img
            class="flag"
            src="https://flagcdn.com/${this.birthPlace}.svg"
            alt="Bandeira ${this.birthPlaceComplete}">
        </div>
        <div class="birth-date">${this.birthDate}</div>
      </div>
      <div class="container-card-end-line">
        <div class="card-end-line ${this.applicant ? this.gender : 'generic-person'}"></div>
      </div>
    `;

    container.innerHTML = card;

    container.appendChild(inptDocsBirthCertificate);
    container.appendChild(inptDocsMarriageCertificate);
    container.appendChild(spanvalueBirthCertificate);
    container.appendChild(spanTextBirthCertificate);
    container.appendChild(spanvalueMarriageCertificate);
    container.appendChild(spanTextMarriageCertificate);
    container.appendChild(spanGender);
    container.appendChild(spanApplicant);
    container.appendChild(spanLocalBirth);
    return container;
  }
}
