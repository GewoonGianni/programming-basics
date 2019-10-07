// 1
function averageScore () {
    let total = 0;
    for (let i = 1; i < 5; i++) {
        let a = document.getElementById(`course${i}`);
        let b = Number(a.cells[1].innerText);
        
        total += b;
    }
    total = total / 4;

    console.log(total.toFixed(1));
    
    let textOfTheTotal = document.getElementById('totalText')
    textOfTheTotal.innerText = `Het gemiddelde is ${total.toFixed(1)}.`
}

averageScore();

// 2
function Colors() {
    for (let i = 1; i <= 7; i++) {
        let a = document.getElementsByClassName(`course${i}`)[0].style.backgroundColor = `#${i}${i}${i}${i}${i}${i}`;
    }
}

Colors();

// 3
function createImageElement(imageSrcName) {
    let img = document.createElement('img');
    let body = document.getElementById('body');
    img.setAttribute('src', imageSrcName)
    body.appendChild(img);
}

createImageElement('https://images4.persgroep.net/rcs/C1mawifi6zcYC_1gWfT5_8mG57Q/diocontent/152218512/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.9')