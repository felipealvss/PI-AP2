const linksInternos = document.querySelectorAll('a[href^="#"');
const modalContainer = document.querySelector('[data-modal="container"]');
const botaoFecha = document.querySelector('[data-modal="fecha"]');

function handleClick(event) {
  event.preventDefault();
  modalContainer.classList.toggle('ativo')
}

function cliqueForaModal(event) {
  if (event.target === this) {
    handleClick(event)
  }
}

linksInternos.forEach(link => {
  link.addEventListener('click', handleClick)
})

botaoFecha.addEventListener('click', handleClick);

modalContainer.addEventListener('click', cliqueForaModal)
