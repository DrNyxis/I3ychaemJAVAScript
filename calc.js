const namAdd = document.getElementById("add");
const subS = document.getElementById("subtract");
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const rez = document.getElementById('rez');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const resultText = document.getElementById('result');

function addF(a, b) {
    return a + b;
}
function subtractF(a, b) {
    return a - b;
}
function multiplyF(a, b) {
    return a * b;
}
function divideF(a, b) {
    return a / b;
}

namAdd.addEventListener('click', () => {
    const val1 = Number(num1.value);
    const val2 = Number(num2.value);
    const res = addF(val1, val2)
    resultText.textContent = res;
});
subS.addEventListener('click', () => {
    const val1 = Number(num1.value);
    const val2 = Number(num2.value);
    const res = subtractF(val1, val2);
    resultText.textContent = res;
});
multiply.addEventListener('click', () => {
    const val1 = Number(num1.value);
    const val2 = Number(num2.value);
    const res = multiplyF(val1, val2);
    resultText.textContent = res;
});
divide.addEventListener('click', () => {
    const val1 = Number(num1.value);
    const val2 = Number(num2.value);
    const res = divideF(val1, val2);
    resultText.textContent = res;
});