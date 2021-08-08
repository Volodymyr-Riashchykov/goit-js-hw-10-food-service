const checkbox = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

currentTheme();

checkbox.addEventListener('change', onChange);

function onChange(e) {
    if(e.target.checked) {
        localStorage.setItem('Them', Theme.DARK);
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
  } else {
        localStorage.setItem('Them', Theme.LIGHT);
        body.classList.remove(Theme.DARK);
        body.classList.add(Theme.LIGHT);
        
  }
}

function currentTheme() {
    if (localStorage.getItem('Them')===Theme.DARK) {
        body.classList.add(Theme.DARK);
        checkbox.checked = true;
    } else {
        localStorage.setItem('Them', Theme.LIGHT);
        body.classList.add(Theme.LIGHT);
    }

}
