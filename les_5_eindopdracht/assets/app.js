// 1
for (let a = 0; a <= 100; a++) {
    if (a % 4 == 0) {
        console.log(a + ' is deelbaar door 4!')
    }
}

// 2
let b = 0;
let c = 1;

while (b < 1000) { 
    c = (c + b); 
    console.log(c); 
    b = b + c; 
    console.log(b)
}

console.log(' ') // voor de leesbaarheid in de console
// 3
let array = [2,4,8,9,12,13];

let total = 0;

for (let i in array) {
    total += array[i]
}

console.log(total);