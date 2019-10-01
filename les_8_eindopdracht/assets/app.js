// 1
const lapRounds = {
    lapOne: 55.99,
    lapTwo: 63.00,
    lapThree: 63.01,
    lapFour: 54.01,
    lapFive: 62.79,
    lapSix: 52.88,
    lapSeven: 53.10,
    lapEight: 54.12,
}

// 2

const teachers = [
    {
        name: 'Loek',
        profession: 'Teacher',
        brand: "Linux",

        salary: 1000,
        hoursPerWeek: 17,
    },
    {
        name: 'Daan',
        profession: 'Teacher',
        brand: 'Arduino',

        salary: 1000,
        hoursPerWeek: 18,
    },
    {
        name: 'Rimmert',
        profession: 'Teacher',
        brand: 'Apple',

        salary: 1000,
        hoursPerWeek: 16,
    },
]


for (let i = 0; i < teachers.length; i++) {
    console.log(`I have a ${teachers[i].profession} named ${teachers[i].name} and he likes to work on a ${teachers[i].brand} computer`)
}

// 3
function whatBeTheSalary() {
    for (let i = 0; i < teachers.length; i++) {
    let theSalaryPerHour = teachers[i].salary / teachers[i].hoursPerWeek;
    console.log(`${teachers[i].name} makes ${theSalaryPerHour} every hour.`);
    }
}

whatBeTheSalary();