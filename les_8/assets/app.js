const me = {
    name: 'Gianni',
    age: 17,
    previousDiploma: 'Havo', 
    isVerySexy: true,
    favoriteClub: {
        name: 'WVV 67',
        city: 'Woensdrecht',
    },
    favoriteVehicle: {
        name: 'Audi',
        wheelsAmount: 4,
    },
    family: [
        {
            name: 'Fleur',
            related: 'girlfriend',
            pronoun: 'she'
        },
        {
            name: 'Damian',
            related: 'brother',
            pronoun: 'he'
        },
        {
            name: 'Natascha',
            related: 'mother',
            pronoun: 'she'
        },
        {
            name: 'Edwin',
            related: 'father',
            pronoun: 'he'
        },
    ],
    familyInfo: function(){
        for (let i = 0; i < me.family.length; i++) {
            console.log(`One of my family members is ${me.family[i].name} and ${me.family[i].pronoun} is my ${me.family[i].related}.`)
        }
    }
};

console.log(me);

me.currentStudy = 'HBO-ICT';
me.hobby = 'Iets met autos ofzo';

console.log(me);

console.table(me.family)

console.log('')

me.familyInfo()

console.log('')

// const productList = [
//     {
//         productName: 'HUTSpot',
//         productPrice: 2.60,
//     },
//     {
//         productName: 'een onsje meer',
//         productPrice: 0.90,
//     },
//     {
//         productName: 'lekkah lekkah vleesje',
//         productPrice: 2.30,
//     },
// ];

// productList.forEach(function(value, index, arr){
//     var total = 0;
//     total += value.productPrice;
//     console.log(total);
// });


console.log(`My favorite mode of transport is the ${me.favoriteVehicle.name} and it has ${me.favoriteVehicle.wheelsAmount} wheels.`)
