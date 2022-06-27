const buttons = Array.from(document.querySelectorAll('.btn'));
const output = document.querySelector('.output p');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case '.':
                output.innerText += ',';
                break;
            case 'DEL':
                resetOutput();
                output.innerText = output.innerText.slice(0, output.innerText.length-1);
                break;
                case 'RESET':
                    output.innerText = '';
                    break;
                case '=':
                    try {
                        normalizeOutput();
                        output.innerText = eval(output.innerText);
                    } catch {
                        output.innerText = 'ERROR';
                    }
                    break;
                default:
                    resetOutput();
                    output.innerText += e.target.innerText;
        }
    })
});
        
const resetOutput = () => {
    if (output.innerText === 'ERROR' || output.innerText === 'Infinity') {
        output.innerText = '';
    }
}
const normalizeOutput = () => {
    output.innerText = output.innerText.replace(/x/,'*');
    output.innerText = output.innerText.replace(/,/,'.');
}