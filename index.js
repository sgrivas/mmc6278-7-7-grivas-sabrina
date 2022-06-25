// Your code here
var questionsArr=[
    {
        question: 'Which one of these characters is NOT friends with Harry Potter?',
        answer: 'Draco Malfoy',
        options:[
            'Ron Weasley',
            'Neville Longbottom',
            'Draco Malfoy',
            'Hermione Granger'
        ]
    },
    {
        question: "In Pirates of the Caribbean, what was Captain Jack Sparrow's ship's name?",
        answer: 'The Black Pearl',
        options:[
            'The Marauder',
            'The Black Pearl',
            'The Black Python',
            'The Slytherin'
        ]
    },
    {
        question: 'In The Wizard of Oz, the Tin Man wanted to see the Wizard about getting…',
        answer: 'A heart',
        options:[
            'A brain',
            'An oil can',
            'A dog',
            'A heart'
        ]
    },
    {
        question: 'The movie The Social Network is about which social media platform:',
        answer: 'Facebook',
        options:[
            'Facebook',
            'Myspace',
            'Instagram',
            'Twitter'
        ]
    },
    {
        question: 'In Men and Black, what are the two FBI agents hunting?',
        answer: 'aliens',
        options:[
            'serial killers',
            'ghosts',
            'aliens',
            'time travelers'
        ]
    },
    {
        question: 'The movie 10 Things I Hate About You was based on which play by Shakespeare:',
        answer: 'Taming of the Shrew',
        options:[
            'Taming of the Shrew',
            'Hamlet',
            'Romeo and Juliet',
            "A Midsummer Night's Dream"
        ]
    }
]

var quiz = document.getElementById('quiz');

document.body.onload=createStartButton;

function createStartButton(){
    var buttonText=document.createTextNode("Start Quiz!")
    var startButton=document.createElement("button")
    startButton.appendChild(buttonText);
    startButton.setAttribute('id', 'start-quiz')
    quiz.appendChild(startButton)
    localStorage.setItem(PREVIOUS_SCORE, score)
}

quiz.addEventListener('click', function(e){
    e.stopPropagation()
    if (e.target.id==='start-quiz') {
        var intervalId = setInterval(() => {
            if (timer == -1) {
                clearInterval(intervalId);
            } else{
                timerText.textContent=timer
                quiz.appendChild(timerText)
                timer--
            }
        }, 1000);
        startQuiz(option);
    }
    if (e.target===document.querySelector('#quiz > div > button')){
        option++
        nextQuestion(option)
        console.log(option);
    }
})

var timer= 10;
var timerText=document.createElement('p')
var quizQuestion=0
var questionEl=document.createElement('p')
var optionDivEl=document.createElement('div')
var option=0
var questionText
var question
var options
var quizAnswer

//Start quiz game
function startQuiz(option){
    question=questionsArr[option].question
    options=questionsArr[option].options
    quizAnswer=questionsArr[option].answer
    questionText=document.createTextNode(question);
    questionEl.appendChild(questionText)
    for (let j = 0; j < options.length; j++) {
        var optionText=document.createTextNode(options[j])
        var optionButton=document.createElement('button')
        optionButton.appendChild(optionText)
        optionDivEl.appendChild(optionButton)
    }
    quiz.appendChild(questionEl);
    quiz.appendChild(optionDivEl);
}

//New Question
function nextQuestion(option){
    questionEl.textContent=''
    optionDivEl.textContent=''
    question=questionsArr[option].question
    options=questionsArr[option].options
    quizAnswer=questionsArr[option].answer
    questionEl.textContent=question

}

//local storage code
var score=10
var PREVIOUS_SCORE = 'previous-score'
var previousScore = localStorage.getItem(PREVIOUS_SCORE)
if (previousScore) {
    psText=document.createTextNode("Previous Score: " +previousScore)
    psP=document.createElement('p')
    psP.appendChild(psText)
    quiz.appendChild(psP)
}


