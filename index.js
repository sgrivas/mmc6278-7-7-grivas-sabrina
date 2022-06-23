// Your code here
var questionsArr=[
    {
        question: 'Which one of these characters is not friends with Harry Potter?',
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
function createStartButton(){
    var buttonText=document.createTextNode("Start Quiz!")
    var startButton=document.createElement("button")
    startButton.appendChild(buttonText);
    startButton.setAttribute('id', 'start-quiz')
    quiz.appendChild(startButton)
}
document.body.onload=createStartButton;

var score

quiz.addEventListener('click', function(e){
    if (e.target.id='start-quiz') {
        for (let i = 0; i < questionsArr.length; i++) {
            var question=questionsArr[i].question
            var options=questionsArr[i].options
            var answer=questionsArr[i].answer
            console.log(answer)
            var questionText=document.createTextNode(question);
            var questionEl=document.createElement('p')
            var optionDivEl=document.createElement('div')
            questionEl.appendChild(questionText)
            for (let j = 0; j < options.length; j++) {
                var optionText=document.createTextNode(options[j])
                var optionButton=document.createElement('button')
                optionButton.appendChild(optionText)
                optionDivEl.appendChild(optionButton)
                console.log(optionDivEl);
            }
            quiz.appendChild(questionEl)
            quiz.appendChild(optionDivEl)
            break;
        }
    }
})