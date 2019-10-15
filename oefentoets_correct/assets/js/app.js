window.addEventListener('load', init);

function init() {
    // console.log('DOM is loaded');
    const button = document.getElementById('submit');
    button.addEventListener('click', submitAnswer);
}

// questions and their answers
const questionAndAnswer = [
    {
        'vraag': '01101000 01100101 01101100 01101100 01101111',
        'antwoord': 'Hello'
    },
    {
        'vraag': '01010111 01100101 01101100 01101011 01101111 01101101',
        'antwoord': 'Welkom'
    },
    {
        'vraag': '01010100 01101111 01110100 00100000 01111010 01101001 01100101 01101110 01110011',
        'antwoord': 'Tot ziens'
    },
    {
        'vraag': '01000111 01110010 01101111 01100101 01110100 01101010 01100101 01110011',
        'antwoord': 'Groetjes'
    }
];

function submitAnswer (event) {
    event.preventDefault();

    const answer = document.getElementById('inputAnswer').value;
    // console.log(answer);

    const question = document.getElementById('questionText').innerText;
    // console.log(question);

    checkAnswer(question, answer);
}

function checkAnswer (question, answer) {
    for (let i = 0; i < questionAndAnswer.length; i++) {
        const element = questionAndAnswer[i];
        
        // check the question and answer
        if (question == element.vraag) {
            if (answer == element.antwoord) {
                // console.log('Lekker bezig');
                writeFeedback(answer, true);
            } else {
                // console.log('niet zo lekker bezig');
                writeFeedback(answer, false);
            }
        }
    }
}

function writeFeedback(answer, status) {
    let paragraph = document.getElementById('answerText');
    if (status == true) {
        feedback = 'helemaal goed!';
        bg = 'bg-green';
    } else {
        feedback = 'fout.';
        bg = 'bg-red';
    }
    paragraph.innerHTML = `Je antwoord <span class='${bg}'>${answer}</span> is ${feedback}`;
}