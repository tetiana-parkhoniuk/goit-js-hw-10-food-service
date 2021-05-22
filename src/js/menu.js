import menu from '../menu.json';
import foodServiceCardTemplate from '../templates/food-card.hbs';
// Food Service Markup / Templating //

const menuEl = document.querySelector('.js-menu');
const menuMarkup = foodServiceCardTemplate(menu);

// function createMenuCardMarkup(menu) {
//     return menu.map(foodServiceCardTemplate).join('');
// }

menuEl.insertAdjacentHTML('beforeend', menuMarkup);

console.log(menuEl);