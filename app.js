const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');



const getRandomNumber = () => {
    return Math.floor(Math.random()*colors.length);
}

btn.addEventListener('click', () => {
    // get random number between 0 - 3;
    const randomNumber = getRandomNumber();
    colorUni = colors[randomNumber];
    document.body.style.backgroundColor = colorUni;
    color.textContent = colorUni;
    localStorage.setItem('simpleColor', colorUni);
});


if (localStorage.getItem('simpleColor')) {
    document.body.style.backgroundColor = localStorage.getItem('simpleColor');
};

