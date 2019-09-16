// 1 
var number = 9
var oddEven = number % 2;

if (oddEven == 1) {
    alert('The number is odd');
} else {
    alert('the number is even');
}

// 2
var message = ('programming is not so cool');
var replace = message.replace(` not `,` `);
console.log(replace);

// 3
var number2 = 1400;
var message2 = 'Ik woon in Naboo';

console.log(number2 < message2);

// I compare a sentence to a number, it will always be false and there is no reason to ever do this.