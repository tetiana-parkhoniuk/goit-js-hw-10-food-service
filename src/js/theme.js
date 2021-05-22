// Dark/Light Theme change/ Local Storage //

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const LOCALSTORAGE_KEY = 'dark-theme-status';

class SwitchToggleWidget {
    constructor({ selector }) {
        this.refs = {
            themeSwithToggle: document.querySelector(selector),
            body: document.body,
            switchMarker: document.querySelector('.theme-switch__toggle'),
        };

        this._init();
    }

    _init() {
        const persistedThemeState = localStorage.getItem(LOCALSTORAGE_KEY);
        if (persistedThemeState !== null) {
            const shouldSwitchTheme = JSON.parse(persistedThemeState);
            console.log(shouldSwitchTheme);
            if (shouldSwitchTheme) {
                this.setDarkTheme();
                this.removeLightTheme();
                this.refs.themeSwithToggle.checked = true;
            } else {
                this.removeDarkTheme();
                this.setLightTheme();
                this.refs.themeSwithToggle.checked = false;
            }
        }
    }
    
    setDarkTheme() {
        this.refs.body.classList.add(Theme.DARK);
        localStorage.setItem(LOCALSTORAGE_KEY, true)
    }

    setLightTheme() {
        this.refs.body.classList.add(Theme.LIGHT);
        localStorage.setItem(LOCALSTORAGE_KEY, false)
    }

    removeDarkTheme() {
        this.refs.body.classList.remove(Theme.DARK);
    }
    
    removeLightTheme() {
        this.refs.body.classList.remove(Theme.LIGHT);
    }

}

const themeSwithToggle = new SwitchToggleWidget({
    selector: '#theme-switch-toggle',
});

document.
    querySelector('#theme-switch-toggle')
    .addEventListener('change', onToggleSwitcherChange);


function onToggleSwitcherChange(evt) {
    if (!this.checked) {
        console.log("light mode is ON");
        themeSwithToggle.setLightTheme();
        themeSwithToggle.removeDarkTheme();
    } else {
        console.log("Dark mode is ON");
        themeSwithToggle.setDarkTheme();
        themeSwithToggle.removeLightTheme();
    }
}