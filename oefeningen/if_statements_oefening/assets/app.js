let ageOfChild = 18; // input

// variables
let numberOfPlayers;
let sizeOfPitch;
let teamName;

// if statements
if (ageOfChild <= 7 && ageOfChild > 0) {
    numberOfPlayers = 4;
    sizeOfPitch = '1/4';
    if (ageOfChild <= 6) {
        teamName = 'JO6'
    } else if (ageOfChild == 7) {
        teamName = 'JO7'
    }
} else if (ageOfChild >= 8 && ageOfChild <= 12) {
    numberOfPlayers = 7;
    sizeOfPitch = '1/2';
    if (ageOfChild == 8) {
        teamName = 'JO8';
    } else if (ageOfChild == 9) {
        teamName = 'JO9';
    } else if (ageOfChild == 10) {
        teamName = 'JO10';
    } else if (ageOfChild == 11) {
        teamName = 'JO11';
    } else if (ageOfChild == 12) {
        teamName = 'JO12';
    }
} else if (ageOfChild == 13) {
    numberOfPlayers = 11;
    sizeOfPitch = 'full';
    teamName = 'JO13';
} else if (ageOfChild <= 0 || ageOfChild > 13) {
    console.log('this program does not work with the age you have given as input')
}

// message + console log
let message = `Your kid is in ${teamName}, this team consist of ${numberOfPlayers} players and play on a ${sizeOfPitch} pitch size`;

if (!(ageOfChild <= 0 || ageOfChild > 13)) {
    console.log(message);
}