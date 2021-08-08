import cardMenu from '../templates/card.hbs';
import menuArr from '../menu.json';

const cardsMarcup = createMenuCards(menuArr);
const menuEl = document.querySelector('.js-menu');

function createMenuCards(menuArr) {
  return cardMenu(menuArr);
}
menuEl.insertAdjacentHTML('beforeend', cardsMarcup);