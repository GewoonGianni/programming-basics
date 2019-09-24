// naam
function giveMeSomeNiceName(gender) {
    let myNewName;
    if (gender == 'male') {
        myNewName = 'Reinier';
    } else if (gender == 'female') {
        myNewName = 'Weinanda';
    } else {
        myNewName = 'Apache';
    }
    return myNewName;
}

console.log('Je nieuwe gehutste™ naam is: ' + giveMeSomeNiceName('female'))

// emoji
function pig(numberOfPigs) {
    let pigOutput = '';
    for (i = 0; i < numberOfPigs; i++) {
        pigOutput += '\u{1F437}' // pigOutput = pigOutput + (nog een emoji)
    }
    console.log(pigOutput + ' knor!')
}

pig(9)

// factorial
function factorial(number) {
    if (number > 0) {
    let numberStorage = 1;
        for (let x = 1; x <= number; x++) {
            numberStorage = numberStorage*x;
        }
        console.log(numberStorage)
    } else if (number == 0) {
        console.log('Het debat over 0 gaat nu niet gestart worden. >:(')
    } else {
        console.log('Dit programma werkt niet met het door jou gekozen nummer.. :(')
    }
}

factorial(5)