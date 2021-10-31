
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchToggleEl = document.querySelector('#theme-switch-toggle')
const themeBody = document.querySelector('body')


// Установка темы при обновлении страницы
// (localStorage = Theme.LIGHT / Theme.DARK; localStorage = null; localStorage = чтоугодно)

const watchLocalStorage = localStorage.getItem('currentTheme');
    
if (watchLocalStorage === Theme.LIGHT || Theme.DARK) {
    if (themeBody.classList.contains(Theme.LIGHT)) {
        themeBody.classList.remove(Theme.DARK)
    } else {themeBody.classList.remove(Theme.LIGHT)}

    themeBody.classList.add(watchLocalStorage) 
}

if (watchLocalStorage === null) {
    if (themeBody.classList.contains(null)) {
        themeBody.classList.remove(null)
    }

    themeBody.classList.add(Theme.LIGHT); 
    localStorage.setItem('currentTheme', Theme.LIGHT);
    themeSwitchToggleEl.checked = false; 
}

if (watchLocalStorage !== null) {
    if (watchLocalStorage !== Theme.LIGHT) {
        if (watchLocalStorage !== Theme.DARK) {
            themeBody.classList.remove(watchLocalStorage)
            themeBody.classList.add(Theme.LIGHT); 
            localStorage.setItem('currentTheme', Theme.LIGHT);
            themeSwitchToggleEl.checked = false;}
        }  
}
    
// Переключатель темы

themeSwitchToggleEl.addEventListener('change', onThemeBodyChange);

function onThemeBodyChange(event) {
    const isSwitchToggleChecked = event.target.checked;

    if (!isSwitchToggleChecked) {
        localStorage.setItem('currentTheme', Theme.LIGHT),
        themeBody.classList.replace(Theme.DARK, Theme.LIGHT)
           
    } else {
        localStorage.setItem('currentTheme', Theme.DARK)
        themeBody.classList.replace(Theme.LIGHT, Theme.DARK)
    }
}
