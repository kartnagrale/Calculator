function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        let expression = document.getElementById('display').value + ' = ' + result;
        document.getElementById('display').value = result;
        addToHistory(expression);
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

function addToHistory(expression) {
    let historyList = document.getElementById('history-list');
    let historyItem = document.createElement('li');
    historyItem.textContent = expression;
    historyList.appendChild(historyItem);
}
