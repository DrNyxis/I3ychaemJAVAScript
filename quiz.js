const ans1 = document.getElementById('ans1');
const ans2 = document.getElementById('ans2');
const ans3 = document.getElementById('ans3');
const result = document.getElementById('result');
const currectAns = 4;


   /* ans2.addEventListener('click', () => {
        if (4 === currectAns){
        result.textContent = 'Верно';
        result.style.color = 'green';
        }
    });
    ans1.addEventListener('click', () => {
        if (3 < currectAns){
        result.textContent = 'Неверно ты шо';
        result.style.color = 'red';
        }else{ 
        result.textContent = 'Верно'
        }
    });
    ans3.addEventListener('click', () => {
        result.textContent = 'Неа'
    });
    */

function checkAns(isCorrect, message) {
    if (isCorrect) {
        result.textContent = 'Верно';
        result.style.color = 'green';
    } else {
        result.textContent = message;
        result.style.color = 'red';
    }
}
ans1.addEventListener('click', () => {
    checkAns(false, 'Неверно ты шо');
});
ans2.addEventListener('click', () => {
    checkAns(true);
});
ans3.addEventListener('click', () => {
    checkAns(false, 'Неа');
});