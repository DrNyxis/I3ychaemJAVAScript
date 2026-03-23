/*const myName = "Моё имя";
const myAge = 24;
const isProgrammer = true;

console.log('Имя:', myName);
console.log("Возраст:", myAge);
console.log('Дождевик', isProgrammer);

let hobby = 'игры';
console.log('Хобби', hobby);

hobby = 'код';
console.log('Новое хобби:', hobby);

const title = document.getElementById('title');
const btn = document.getElementById('myBtn');
const changeTextBtn = document.getElementById('chTex');
const changeColorBtn = document.getElementById('chCol');
const themeBtn = document.getElementById('themeBtn');

let theDark = false;
themeBtn.addEventListener('click', () => {
    if (theDark === false){
        // Включаем темную тему
        document.body.style.background = '#333';
        document.body.style.color = '#fff';
        theDark = true;
    } else {
        // Выключаем светлую тему
        document.body.style.background = '#fff';
        document.body.style.color = '#000';
        theDark = false;
    }
})
    changeTextBtn.addEventListener('click', () => {
        title.textContent = 'Жидкий глаз'
    });
    changeColorBtn.addEventListener('click', () => {
        title.style.color = 'red';
        title.style.fontSize = '60px';
    });
   
    */

    const numb = ["3","5","7","1","9"];
        console.log(numb[3]); 
        console.log(numb.length) 

    const nameS = ['Виктор', "Димон", "Михаил"];
        console.log('Привет', nameS[1]) 

    const fut = ['Яблоко', 'Груша', 'Банан'];
        fut[1] = 'Апельсин';
        console.log(fut);

    const pull = [];
        pull.push('1 фрукт', '2 фрукт', 'Яблоко'); 
        console.log(pull.length) 
