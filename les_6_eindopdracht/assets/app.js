// 1
function fibonacci (numberLimit) {
    if (numberLimit > 0) {
    let b = 0;
    let c = 1;
    while (b < numberLimit) { 
        c = (c + b); 
        console.log(c); 
        b = b + c; 
        console.log(b)
    }
    } else {
        console.log('met '+ numberLimit + ' verschijnen geen getallen.')
    }
}

fibonacci(1000)

// 2
function countdown (countdownNumber, year) {
    for (let i = countdownNumber; i > 0; i--) {
        console.log(i)
    }
    console.log('happy ' + year + '!')
}

countdown(10, 2020)

// 3
function hoistingVoorbeeldEen () {
    var voorbeeldEen = 'hallo';
    console.log(voorbeeldEen);
}

hoistingVoorbeeldEen() // deze functie werkt naar behoren

function hoistingVoorbeeldTwee () {
    console.log(voorbeeldTwee)
    var voorbeeldTwee = 'hallo twee'
}

hoistingVoorbeeldTwee() // deze werkt niet, want var voorbeeldtwee wordt omhoog gehaald, maar de declaration daarvan ('hallo twee') wordt niet omhoog gehaald, dus deze wordt pas na het loggen gedeclaired wat resulteert in dat er iets 'undifined' geprobeerd wordt te loggen.