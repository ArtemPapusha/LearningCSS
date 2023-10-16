const $openButton = document.querySelector('#btnOpenModalNotifications');
const $closeButton = document.querySelector('#btnCloseModalNotifications');
const modal = document.querySelector('.modal_notifications');
const overlay = document.querySelector('.overlay');

const handleClickOpenButton = () => {
  modal.classList.add("open");
  overlay.classList.add("open");
}

const handleClickCloseButton = () => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
}
