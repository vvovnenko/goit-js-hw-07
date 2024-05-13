const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

function onInputChange(event) {
    output.textContent = event.currentTarget.value.trim() || 'Anonymous';
}

input.addEventListener('input', onInputChange);
