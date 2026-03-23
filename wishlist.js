const wishIn = document.getElementById('wishIn');
const Dob = document.getElementById('Dob');
const wishList = document.getElementById('wishList');

const wishes = [];

    function addWish() {
        const wishText = wishIn.value; // а что такое value?
        wishes.push(wishText);  // что за wishes?
        console.log(wishes);
        wishList.innerHTML += '<li>' + wishText + '</li>';
        wishIn.value = '';
    };
    Dob.addEventListener('click', addWish);
    