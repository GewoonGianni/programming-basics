var height = 1.8;
var weight = 80;

console.log('hoogte is ' + height + ' meter, ' + 'gewicht is ' + weight + ' kg.');

let bmi = (weight / (height * height))

console.log(bmi.toFixed(1))

if (bmi < 18.5) {
    console.log('ondergewicht')
} else if (18.5 < bmi < 24.9) {
    console.log('normaal gewicht')
} else if (25 < bmi < 29.9) {
    console.log('overgewicht')
} else if (bmi > 30) {
    console.log('obesitas')
} else {
    console.log('er ging iets mis.')
}