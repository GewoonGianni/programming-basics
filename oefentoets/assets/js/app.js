// deze code is geschreven door Gianni Meesters
window.addEventListener('load', init);

function init() {
    const sumbitButton = document.getElementById('submit');
    sumbitButton.addEventListener('click', submit);
}

// these wil become the questions
const questionArray = ['01101000 01100101 01101100 01101100 01101111','01010111 01100101 01101100 01101011 01101111 01101101', '01010100 01101111 01110100 00100000 01111010 01101001 01100101 01101110 01110011', '01000111 01110010 01101111 01100101 01110100 01101010 01100101 01110011', 'je hebt alle antwoorden goed!']
let index = 1

function submit (event) {
    event.preventDefault();

    // create answer control 
    let correctAnswer = '';
    let questionText = document.getElementById('questionText').innerHTML;
    if (questionText == questionArray[0]) {
        correctAnswer = 'Hello';
    } else if (questionText == questionArray[1]) {
        correctAnswer = 'Welkom';
    } else if (questionText == questionArray[2]) {
        correctAnswer = 'Tot ziens';
    } else if (questionText == questionArray[3]) {
        correctAnswer = 'Groetjes';
    }

    // get answer
    let answer = document.getElementById('inputAnswer').value;

    // create result
    if (answer == correctAnswer) {
        // make sure old text get removed 
        if (document.getElementById('answer').contains(document.getElementById('answerText'))) {
            document.getElementById('answerText').remove()
        }
        // get place to put new text and create it
        let answerDiv = document.getElementById('answer');
        let newAnswerText = document.createElement('p');
        newAnswerText.id = 'answerText';

        // create answer with color
        let answerSpan = document.createElement('span');
        answerSpan.classList.add('bg-green');
        answerSpan.textContent = answer;
        
        // place new answer text
        answerDiv.appendChild(newAnswerText);

        // create content for new answer text
        let yourAnswer = document.createElement('span');
        yourAnswer.innerHTML = 'Je antwoord ';
        let textRight = document.createElement('span');
        textRight.innerHTML = ' is helemaal goed!';
        
        // fill new answer text
        document.getElementById('answerText').appendChild(yourAnswer);
        document.getElementById('answerText').appendChild(answerSpan);
        document.getElementById('answerText').appendChild(textRight);

        // get next question
        let nextQuestion = questionArray[index];

        // create the question tag stuff
        let newQuestion = document.createElement('p');
        newQuestion.id = 'questionText';
        newQuestion.innerHTML = nextQuestion;

        // remove and replace the text
        document.getElementById('questionText').remove();
        document.getElementById('question').appendChild(newQuestion)

        // set index ready for next question
        index = index + 1
    } else {
        // make sure old text get removed 
        if (document.getElementById('answer').contains(document.getElementById('answerText'))) {
            document.getElementById('answerText').remove()
        }
        // get place to put new text and create it
        let answerDiv = document.getElementById('answer');
        let newAnswerText = document.createElement('p');
        newAnswerText.id = 'answerText';

        // create answer with color
        let answerSpan = document.createElement('span');
        answerSpan.classList.add('bg-red');
        answerSpan.textContent = answer;
        
        // place new answer text
        answerDiv.appendChild(newAnswerText);

        // create content for new answer text
        let yourAnswer = document.createElement('span');
        yourAnswer.innerHTML = 'Je antwoord ';
        let textWrong = document.createElement('span');
        textWrong.innerHTML = ' is helaas niet goed';
        
        // fill new answer text
        document.getElementById('answerText').appendChild(yourAnswer);
        document.getElementById('answerText').appendChild(answerSpan);
        document.getElementById('answerText').appendChild(textWrong);
    }
    // remove old text from the box
    document.getElementById('inputAnswer').value = '';

    // remove everything because test is finished
    if (index == 5) {
        document.getElementById('answer').remove()
        document.getElementById('answerForm').remove()
    }
}