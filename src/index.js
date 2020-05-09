import menuItemsTemplate from './templates/productItems.hbs';
import productItems from './menu.json';
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

class CtrlThemes {
  constructor(themes) {
    this.swithInput = document.querySelector('.js-switch-input');
    this.themeSite = document.querySelector('body');
    this.themes = themes;
    this.localThemeDefault = localStorage.getItem('theme');
    this.checkThemeNow();
    this.switchingThemes();
  }

  checkThemeNow() {
    if (this.localThemeDefault === 'dark-theme') {
      this.swithInput.checked = true;
      this.themeSite.classList.add('dark-theme');
    } else {
      this.swithInput.checked = false;
      this.themeSite.classList.add('light-theme');
    }
  }

  switchingThemes() {
    this.swithInput.addEventListener('change', () => {
      if (this.swithInput.checked) {
        this.themeSite.classList.add('dark-theme');
        localStorage.setItem('theme', Theme.DARK);
      } else {
        this.themeSite.classList.remove('dark-theme');
        this.themeSite.classList.add('light-theme');
        localStorage.setItem('theme', Theme.LIGHT);
      }
    });
  }
}

const menuList = document.querySelector('.js-menu');
const creatArrProducts = items =>
  items.map(item => menuItemsTemplate(item)).join('');
menuList.insertAdjacentHTML('beforeend', creatArrProducts(productItems));

new CtrlThemes();
