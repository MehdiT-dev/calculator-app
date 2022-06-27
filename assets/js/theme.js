const theme = window.localStorage.currentTheme;

const body = document.querySelector('body');
const inputs = document.querySelectorAll('input');
const toggleBtn = document.querySelector('.toggle-btn');

const switchToBlue = () => {
    body.classList.remove('light', 'purple');
    body.classList.add('blue');
    toggleBtn.style.margin = '5px';
    toggleBtn.style.float = 'left';
}
const switchToLight = () => {
    body.classList.remove('blue', 'purple');
    body.classList.add('light');
    toggleBtn.style.margin = '5px auto';
    toggleBtn.style.float = 'none';
}
const switchToPurple = () => {
    body.classList.remove('light', 'blue');
    body.classList.add('purple');
    toggleBtn.style.margin = '5px';
    toggleBtn.style.float = 'right';
}

window.addEventListener('load', () => {
    if (theme === 'blue') {
        switchToBlue();
    } else if (theme === 'light') {
        switchToLight();
    } else if (theme === 'purple') {
        switchToPurple();
    }
})

inputs.forEach(input => {
    input.addEventListener('click', (e) => {
        switch (e.target.id) {
            case '1':
                switchToBlue();
                localStorage.removeItem('currentTheme');
                localStorage.setItem('currentTheme', 'blue');
                break;
            case '2':
                switchToLight();
                localStorage.removeItem('currentTheme');
                localStorage.setItem('currentTheme', 'light');
                break;
            case '3':
                switchToPurple();
                localStorage.removeItem('currentTheme');
                localStorage.setItem('currentTheme', 'purple');
                break;
        }
    })
})