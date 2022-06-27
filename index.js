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
        answer: 'Aliens',
        options:[
            'Serial killers',
            'Ghosts',
            'Aliens',
            'Time travelers'
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
var seconds= 5;
var timerText=document.createElement('p')
var quizQuestion=0
var questionEl=document.createElement('p')
var optionDivEl=document.createElement('div')
var option
var questionText
var question
var choices
var quizAnswer
var score=0
var intervalId
var startButton

//load start button
createStartButton();

function createStartButton(){
    var buttonText=document.createTextNode("Start Quiz!")
    startButton=document.createElement("button")
    startButton.appendChild(buttonText);
    startButton.setAttribute('id', 'start-quiz')
    quiz.appendChild(startButton)
}
function removeStartButton(){
    quiz.removeChild(startButton)
}

quiz.addEventListener('click', function(e){
    e.stopPropagation()
    if (e.target.id==='start-quiz') {
        removeStartButton()
        option=0
        questionText=document.createTextNode(question);
        questionEl.appendChild(questionText)
        quiz.appendChild(questionEl);
        quiz.appendChild(optionDivEl);
        startTimer(seconds);
        newQuestion(option);
    }
    else if(e.target.textContent===quizAnswer){
        score++
        option++
        clearInterval(intervalId);
        startTimer(seconds)
        newQuestion(option);
    }
    else{
        option++
        clearInterval(intervalId);
        startTimer(seconds)
        newQuestion(option);
    }
})

//Timer
function startTimer(seconds){
    let counter = seconds;
    intervalId = setInterval(() => {
        if (counter == -1) {
            clearInterval(intervalId);
            option++
            newQuestion(option)
            startTimer(seconds)
        } else{
            timerText.textContent=counter
            quiz.appendChild(timerText)
            counter--
        }
    }, 1000);
}

//Get Question
function newQuestion(option){
    //end of quiz option
    if (option>=questionsArr.length) {
        quiz.removeChild(optionDivEl)
        quiz.removeChild(questionEl)
        quiz.removeChild(timerText);
        clearInterval(intervalId);
        createStartButton();
        score=Math.round((score/questionsArr.length)*100); 
        localStorage.setItem(PREVIOUS_SCORE, score)
    }
    else{
        questionEl.textContent=''
        optionDivEl.textContent=''
        question=questionsArr[option].question
        choices=questionsArr[option].options
        quizAnswer=questionsArr[option].answer
        questionEl.textContent=question
        for (let j = 0; j < choices.length; j++) {
            var optionText=document.createTextNode(choices[j])
            var optionButton=document.createElement('button')
            optionButton.appendChild(optionText)
            optionDivEl.appendChild(optionButton)
        }
    }
    
}


//local storage code
var PREVIOUS_SCORE = 'previous-score'
var previousScore = localStorage.getItem(PREVIOUS_SCORE)
var prevScoreText= document.createTextNode("Previous Score: " +previousScore)
var prevScoreEl=document.createElement('p')

if (previousScore) {
    prevScoreEl.appendChild(prevScoreText)
    quiz.appendChild(prevScoreEl)
}


