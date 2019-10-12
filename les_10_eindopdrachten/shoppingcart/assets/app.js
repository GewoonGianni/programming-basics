window.addEventListener('load', init);

function init() {
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', clickSubmit);
}
// create total for adding up 
let zeroForTotalStart = 0;
let totalTotal = document.getElementById('totalPrice');
let totalPriceNumber = document.createElement('p');
totalPriceNumber.id = 'totalPriceNumber';
totalPriceNumber.innerHTML = zeroForTotalStart.toFixed(2);
totalTotal.appendChild(totalPriceNumber);

function clickSubmit (event) {
    event.preventDefault();
    let submittingProduct = document.getElementById('product').value;
    let submittingPrice = document.getElementById('price').value;

    if ((submittingPrice == '' || submittingProduct == '') && document.getElementById('alertText').contains(document.getElementById('warning')) == false) {
        // create alert when something is not added and there is no alert active
        let alertBox = document.getElementById('alertText');
        let alertText = document.createElement('p');
        alertText.id = 'warning';
        alertText.innerText = 'Vul alstublieft een product en een prijs in';
        alertBox.appendChild(alertText);
    } else if ((submittingPrice == '' || submittingProduct == '') && document.getElementById('alertText').contains(document.getElementById('warning')) == true) {
        // this is for when there is an alert active, this will make sure there won't be a remove button added. if this else if is not here the page will keep adding remove buttons on every click.
    } else {
        // if alert text is showing and item and price are added: remove
        if (document.getElementById('alertText').contains(document.getElementById('warning')) == true && !(submittingPrice == '' || submittingProduct == '')) {
            document.getElementById('alertText').removeChild(document.getElementById('warning'));
        }
        // display the product and price
        let newProduct = document.createElement('p');
        let newPrice = document.createElement('p');
        let productList =  document.getElementById('list');
        let newList = document.createElement('li');
        newList.id = 'items';

        productList.appendChild(newList);
        // set list items to right value
        newProduct.innerText = submittingProduct;
        newPrice.innerText = parseFloat(submittingPrice).toFixed(2);
        newProduct.style = 'text-align: left;'
        newPrice.style = 'text-align: right;'

        // put list items on dom
        newList.appendChild(newProduct);
        newList.appendChild(newPrice);

        // adding remove button
        let removeButton = document.createElement('button')
        removeButton.type = 'button';
        removeButton.id = 'remove'
        removeButton.innerHTML = 'verwijder';
        removeButton.onclick = removeItem;
        newList.appendChild(removeButton);

        // clear old inputs
        document.getElementById('product').value = '';
        document.getElementById('price').value = '';

        // change the total value of the price
        let oldTotalNumber = document.getElementById('totalPriceNumber').innerHTML;

        let newTotalNumber = parseFloat(oldTotalNumber) + parseFloat(submittingPrice);
        document.getElementById('totalPriceNumber').innerHTML = newTotalNumber.toFixed(2);
        
        // the remove function
        function removeItem () {
            
            let oldTotalNumber = document.getElementById('totalPriceNumber').innerHTML;
            let numberToRemove = this.previousElementSibling.innerHTML;
            let newTotalNumber = parseFloat(oldTotalNumber) - parseFloat(numberToRemove);
            document.getElementById('totalPriceNumber').innerHTML = newTotalNumber.toFixed(2);
            newList.remove();
        }
    }
}

