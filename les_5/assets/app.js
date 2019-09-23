// 1
let number = 0;

while (number <= 9) {
    number++;
    console.log(number);
}

// 2
let message = 'Het is maandag :(';

let i = -1;

while (i <= message.length-2) {
    i++;
    console.log(message.charAt(i));
}

// 3
let message2 = 'Geweldig';
let x = message2.length;

while (0 <= x) {
    console.log(message2.charAt(x)) 
    x--;
}

        // for loop
// 1
let a;

for (let a = 1; a <= 10; a++) {
    console.log(a)
}

// 2
for (let b = -1; b < message.length; b++) {
    const element = message[b];
    console.log(message.charAt(b))
}

// 3 
for (let c = 0; c <= 25; c++) {
    if (c % 3 == 0) {
        console.log(c + ' is deelbaar door 3!')
    }
}