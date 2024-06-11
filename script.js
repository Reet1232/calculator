let displayValue = '0';

function updateDisplay(newValue) {
    document.querySelector('.display').value = newValue;
}

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = '';
    }
    displayValue += value;
    updateDisplay(displayValue);
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay(displayValue);
}

function calculate() {
    try {
        const result = eval(displayValue);
        if (!isNaN(result)) {
            displayValue = result.toString();
            updateDisplay(displayValue);
        } else {
            displayValue = 'Error';
            updateDisplay(displayValue);
        }
    } catch (error) {
        displayValue = 'Error';
        updateDisplay(displayValue);
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    switch (key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
        case '+':
        case '-':
        case '*':
        case '/':
            appendToDisplay(key);
            break;
        case 'Enter':
            calculate();
            break;
        case 'Escape':
            clearDisplay();
            break;
        default:
            // Do nothing for other keys
            break;
    }
});
