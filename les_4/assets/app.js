console.log('Check check hij werkt hoor.')

const currentAction = 'strings';

// als calculating
if (currentAction == 'calculating') {
    // optellen - delen - aftrekken - vermenigvuldigen
    let x = 5;
    let y = 8;
    console.log('optellen', x + y);
    console.log('delen', x / y);
    console.log('aftrekken', x - y);
    console.log('vermenigvuldigen', x * y);
}

// als strings
else if (currentAction == 'strings') {
    // upercase - match - length - substring - charAt
    let message = 'Huts a niffo';
    let anotherMessage = 'Hats a niffo';

    var uppercase = message.toUpperCase ();
        console.log('grote letters: ' + uppercase);
    
    if (message.match (anotherMessage)){
        console.log ('vergelijken; allebei de zinnen luiden: ' + message);
    } else {
        console.log('vergelijken: ' + message + ' en ' + anotherMessage + ' zijn niet hetzelfde ey.');
    }

    if (message.length == 8) {
        console.log(message + ' is 8 karakters lang');
    } else {
        console.log(message + ' is niet 8 karakters lang');
    }

    var substring = message.substring (0,4);
        console.log(substring);
    
    var charAt = message.charAt (5)
        console.log(charAt)
}

// als booleans
else if (currentAction == Booleans){
    // is het nummer hoog genoeg
    
}

// other thing
else {
    console.log('Deze huidige actie herken ik niet.')
}