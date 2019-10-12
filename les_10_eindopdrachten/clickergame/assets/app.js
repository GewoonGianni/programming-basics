window.addEventListener('load', init);

function init() {
    const poolButton = document.getElementById('clicker');
    poolButton.addEventListener('click', clickPool);
}

// initialize the counted number
let countedNumber = 0;

// initialize the element for size change
let image = document.getElementById('clicker');
console.log(image);

function clickPool (event) {
    event.preventDefault();
    let clicks = document.getElementById('counterdiv');
    let number = document.createElement('h2');
    const start = document.getElementById('counter');

    // count 1 up on the old displayed number
    countedNumber= countedNumber + 1;
    number.innerText = countedNumber;
    number.id = number;
    console.log(countedNumber);
    console.log(number);

    // when there is a number displayed, remove it.
    if(countedNumber !== 1) {
       document.getElementById(number).remove();
    }

    // display the number after counting
    clicks.appendChild(number);

    // change size
    if(number.innerText == 10) {
        image.style.width = '90%';
    } else if (number.innerText == 20) {
        image.style.width = "80%";
    } else if (number.innerText == 30) {
        image.style.width = "70%";
    } else if (number.innerText == 40) {
        image.style.width = "60%";
    } else if (number.innerText == 50) {
        image.style.width = "50%";
    } else if (number.innerText == 60) {
        image.style.width = "40%";
    } else if (number.innerText == 70) {
        image.style.width = "30%";
    } else if (number.innerText == 80) {
        image.style.width = "20%";
    } else if (number.innerText == 90) {
        image.style.width = "10%";
    } else if (number.innerText == 100) {
        document.getElementById('mainOfPage').remove();
        alert(`pool's closed`)
    }
}