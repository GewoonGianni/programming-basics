// 1
const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];

const randomNumber = lapRounds[Math.floor(Math.random() * lapRounds.length)];

console.log(randomNumber);

// 2
const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
 ];
 
function displayRecords () {
    for (let i = 0; i < allMyRecords.length; i++) {
        const element = allMyRecords[i];
        for (let j = 0; j < allMyRecords[i].length; j++) {
            const element = allMyRecords[i][j];
            console.log(element);
        }
    }
}

displayRecords();

// 3
// function filter(){
//     var numbers = [];
//         for (let i = 0; i < lapRounds.length; i++) {
//             const element = lapRounds[i];
//             if (element < 4) {
//             numbers.push(element);
//         }
//     }
//     console.log(numbers)
// }

// filter();

function filter() {
    const filteredNumbers = lapRounds.filter(function(number) {
        return number < 4;
        });
    console.log(filteredNumbers);
}

filter()