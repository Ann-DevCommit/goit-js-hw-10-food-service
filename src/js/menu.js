import dishCardTemplate from '../templates/dish-card.hbs';
import dishData from '../js/menu.json'


const menuContainer = document.querySelector('.js-menu');
menuContainer.insertAdjacentHTML('beforeend', dishCardTemplate(dishData))



