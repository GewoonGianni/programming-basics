window.addEventListener('load', init)

function init() {
    // const submitButton = document.getElementById(submitBtn);
    // submitButton.addEventListener('click', clickEventHandler);

    // const button = document.getElementById('submit');
    // button.addEventListener('click', clickEventHandler);

    // const clickableImage = document.getElementById('images');
    // clickableImage.addEventListener('click', imageEventHandler)

    const submitForm = document.getElementById('submitButtonForm');
    submitForm.addEventListener('click', formEventHandler);
}

// // image
// function imageEventHandler(event) {
//     event.preventDefault();
//     console.log(event.target.id);
//     const targetId = event.target.id;
//     const targetinDom = document.getElementById(targetId);
//     targetinDom.style.border = '10px solid black'
//     alert(targetId + ' ãnte ãnte oef boem')
//     alert('WILLEKE WILLEKE WILLEKE')
//     alert('pasajentho')
// }

// // button
// function clickEventHandler(event) {
//     event.preventDefault();
//     console.log(event);
// }

// form
function formEventHandler(event) {
    event.preventDefault();
    const result = document.getElementById('results');
    const listItem = document.createElement('li');
    listItem.innerText = textInput.value;
    if (textInput.value !== '') {
        result.append(listItem);
    }
    console.log(textInput.value)
}

