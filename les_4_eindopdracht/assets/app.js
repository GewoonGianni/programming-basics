// 1
var grade = 7;

if (grade < 6) {
    console.log('onvoldoende')
} else if (6 <= grade && grade < 7) {
    console.log('voldoende')
} else if (7 <= grade && grade < 9) {
    console.log('goed')
} else if (9 <= grade && grade <= 10) {
    console.log('uitstekend')
} else {
    console.log('ja dit vind ik knap van je, want je cijfer is boven de 10. dit hoort niet te kunnen.')
}

// 2
var grade = 9;

switch (grade) {
    case 0:
        console.log('onvoldoende');
        break;
    case 1:
        console.log('onvoldoende');
        break;
    case 3:
        console.log('onvoldoende');
        break;
    case 4:
        console.log('onvoldoende');
        break;
    case 5:
        console.log('onvoldoende');
        break;
    case 6:
        console.log('voldoende');
        break;
    case 7:
        console.log('goed');
        break;
    case 8:
        console.log('goed');
        break;
    case 9:
        console.log('uitstekend');
        break;
    case 10:
        console.log('uitstekend');
        break;
    default: 
        console.log('Je cijfer is niet tussen de 0 en de 10.');
        break;
}

// 3
let job = 'teacher';
let purchasedBook = true;
let inTrain= true;

if (job == 'teacher' && purchasedBook == true && inTrain == true) {
    console.log('Finally, I can enjoy my book!')
} else {
    console.log('I cannot yet enjoy my book. :(')
}