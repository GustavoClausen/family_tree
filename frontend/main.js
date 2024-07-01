import './assets/css/global.css';
import './assets/css/card.css';
import './assets/css/modal.css';
import './assets/css/medias.css';
import './assets/css/tree.css';
import './assets/css/form.css';
import './assets/css/informations.css';

import Form from './modules/Form';
import Modal from './modules/Modal';
import selectorOfCardSelected from './modules/selectorOfCardSelected';

const btnCloseModal = document.querySelector('.close');
const rootCardInitial = document.querySelector('.container.card-container.add-root-infos');

rootCardInitial.addEventListener('click', async () => {
  const modal = new Modal();
  const selectorCSS = selectorOfCardSelected(rootCardInitial);
  const form = await new Form(
    'Dante Causa (Italiano)',
    selectorCSS,
    'dante',
  ).createForm();
  const modalDialog = document.querySelector('.modal-dialog');
  modalDialog.appendChild(form);
  modal.showModal();
});

btnCloseModal.addEventListener('click', () => {
  const modal = new Modal();
  modal.closeModal();
});
