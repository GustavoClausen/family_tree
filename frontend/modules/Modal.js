export default class Modal {
  constructor() {
    this.body = document.querySelector('body');
    this.containerModal = document.querySelector('.container-modal');
    this.modal = document.querySelector('.modal');
    this.dialogModal = document.querySelector('.modal-dialog');
  }

  showModal() {
    this.containerModal.style.display = 'block';
    this.body.style.overflow = 'hidden';

    setTimeout(() => {
      this.dialogModal.style.padding = '2rem';
      this.modal.style.opacity = '1';
      this.dialogModal.style.height = '50rem';
    }, 10);
  }

  closeModal() {
    localStorage.clear();
    const form = document.querySelector('form');
    const nameContainer = document.querySelector('.name-info-container');
    const name = document.querySelector('.name-selected');
    const line = document.querySelector('.line-name-modal');
    const allInformations = document.querySelector('.box-infos-all-informations');
    this.modal.style.opacity = '0';
    this.dialogModal.style.opacity = '0';
    this.dialogModal.style.height = '0';
    setTimeout(() => {
      if (form) this.dialogModal.removeChild(form);
      if (allInformations) allInformations.remove();
      nameContainer.removeChild(name);
      nameContainer.removeChild(line);
      this.dialogModal.style.padding = '0';
      this.body.style.overflow = '';
      this.containerModal.style.display = 'none';
      this.dialogModal.style.opacity = '1';
      if (this.dialogModal.classList.contains('infos-member')) {
        this.dialogModal.classList.remove('infos-member');
      }
    }, 350);
  }
}
