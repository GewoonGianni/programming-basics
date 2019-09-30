// shoppinglist
const productList = [];

productList [0] = 'Tandenborstel';
productList [1] = 'Deoderant';
productList [2] = 'Bakmeel';
productList [3] = 'wortels';
productList [4] = 'Tandpasta';
productList [5] = 'Krop Sla';
productList [6] = 'Maggi';
productList [7] = 'Croky Chips';
productList [8] = 'WC papier';
productList [9] = 'Shampoo';

console.table(productList);


for (let i = 0; i < 10; i++) {
    console.log(' ')
}
// add and delete

productList.push('HUTS A nIFFFOOo');

console.table(productList[10]);

productList.pop();

console.log(productList);


for (let i = 0; i < 10; i++) {
    console.log(' ')
}
// for each

productList.forEach(function(val, index, arr){
    console.log(val);
});

for (let i = 0; i < productList.length; i++) {
    const element = productList[i];
    console.log(element);
}


for (let i = 0; i < 10; i++) {
    console.log(' ')
}
// Nieuwe lijsten

// const newProductList = productList.map(function(val, index, arr){
//     return val.toUpperCase();;
// });

// console.log(newProductList);

const newProductList = productList.map(function(val, index, arr){
    return `Product ${index}: ${val}`;
})

console.table(newProductList)


for (let i = 0; i < 10; i++) {
    console.log(' ')
}
// prijzen array
const productPrices = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];

// 1
function totalPrice() {
    let output = 0;
    productPrices.forEach(function(element){
        output += element;
    });
    return output;
}
const theTotalPrice = totalPrice();
console.log(theTotalPrice);

// 2
const average = function(anArray){
    let average = totalPrice(anArray) / anArray.length;
    return average;
}

console.log(average(productPrices));