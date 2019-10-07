// document.getElementById('groceryList');

// document.getElementById('item1').style.color = 'red';

// const ph = document.getElementById('groceryList');
// const newListItem = document.createElement('li');
// newListItem.innerText = 'Krop sla';
// ph.appendChild(newListItem);

const groceryList = [
    [
        product = 'tandenborstel',
        price = '1.69',
    ], 
    [
        product = 'deoderant',
        price = '3.69',
    ],
    [
        product = 'bakmeel',
        price = '2.69'
    ],
    [
        product = 'wortels',
        price = '0.69'
    ]
];

function writeTitel () {
    // waar
    const bodyTag = document.getElementById('body');
    // h1 tag + text
    let h1Tag = document.createElement('h1');
    h1Tag.innerText = 'Mooi spul nie';
    bodyTag.prepend(h1Tag);

}

writeTitel();

function makeTable (groceryList) {
    const tableTag = document.getElementById('groceryList');
        for (let i = 0; i < groceryList.length; i++) {
            const element = groceryList[i];
            let trTag = document.createElement('tr');
            tableTag.appendChild(trTag);
                for (let j = 0; j < element.length; j++) {
                    const elementTwo = element[j];
                    let tdTag = document.createElement('td');
                    tdTag.innerText = elementTwo;
                    trTag.appendChild(tdTag);
                }
            
        }
}

makeTable(groceryList);