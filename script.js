const questions = [
    {   
        number: "1",
        question: "Which data structure follows the First In, First Out (FIFO) principle?",
        answers: [
            {text:"Stack",correct: true},
            {text:"Queue",correct: false},
            {text:"Linked List",correct: false},
            {text:"Hash Table",correct: false},
        ],
    },
    {        
        number: "2",
        question: "Which programming language is primarily used for building websites?",
        answers: [
            {text: "Python", correct: false},
            {text: "JavaScript", correct: true},
            {text: "C++",correct: false},
            {text: "Java",correct: false},
        ],
    },
    {
        number: "3",
        question:  "Which programming paradigm emphasizes immutability and the use of pure functions?",
        answers: [
            {text: "Object-Oriented Programming",correct:false},               
            {text: "Functional Programming",correct:true},
            {text: "Procedural Programming",correct:false},
            {text: "Imperative Programming",correct:false},
        ],
    },
    {
        number: "4",
        question:  "In Git, what command is used to create a new branch and switch to it?",
        answers: [
            {text: "git branch branch_name",correct:false},               
            {text: "git checkout branch_name",correct:false},
            {text: "git switch branch_name",correct:false},
            {text: "git checkout -b branch_name",correct:true},
        ],
    },
    {
        number: "5",
        question: "What is the time complexity of inserting an element at the end of a dynamic array (e.g., Python list)?",
        answers: [
            { text: "O(1)", correct: true },
            { text: "O(n)", correct: false },
            { text: "O(log n)", correct: false },
            { text: "O(n^2)", correct: false },
        ]
    },
    {
        number: "6",
        question: "In Git, what command is used to view the commit history?",
        answers: [
            { text: "git log", correct: true },
            { text: "git history", correct: false },
            { text: "git commits", correct: false },
            { text: "git show", correct: false },
        ]
    },
    {
        number: "7",
        question: "In Python, which keyword is used to define a function?",
        answers: [
            { text: "func", correct: false },
            { text: "define", correct: false },
            { text: "def", correct: true },
            { text: "function", correct: false }
        ]
    },
    {
        number: "8",
        question: "Which of the following is NOT a valid HTTP method?",
        answers: [
            { text: "GET", correct: false },
            { text: "POST", correct: false },
            { text: "FETCH", correct: true },
            { text: "DELETE", correct: false },
        ]
    },
    {
        number: "9",
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        answers: [
            { text: "It refers to the current function.", correct: false },
            { text: "It refers to the global object.", correct: false },
            { text: "It refers to the object that owns the executing code.", correct: true },
            { text: "It refers to the parent function.", correct: false },
        ]
    },
    {
        number: "10",
        question: "What is the purpose of the 'finally' block in a try-except-finally statement in Python?",
        answers: [
            { text: "To handle exceptions that occur in the try block.", correct: false },
            { text: "To execute code regardless of whether an exception occurs.", correct: true },
            { text: "To define a block of code that should never raise an exception.", correct: false },
            { text: "To replace the try block if an exception occurs.", correct: false },
        ]
    },
];

const score = 0; // increment each correct answer
const count = document.querySelector("#count");
const timer = document.getElementById("timer");
const question = document.getElementById("question");
const nextBtn = document.querySelector(".next");

const answers = document.querySelectorAll(".answers .btn");

function startQuiz() {
    // changeQuestion();
}
nextBtn.addEventListener("click", () => {
    changeQuestion();
})


let q = 0;
let c = 1;
function changeQuestion() {
    if(q < questions.length) {
        let currentQuestion = questions[q];
        question.innerHTML = `${currentQuestion.number}.${currentQuestion.question}`;
        
        answers.forEach((button,i) => {
            button.innerHTML = currentQuestion.answers[i].text;
            button.onclick = () => checkAnswer(button,currentQuestion.answers[i]);
        });

        count.innerHTML = `${c}/10`;
        ++q;
        ++c;
    } else {
        endQuiz();  //! define function 
    }
}

let choosedAnswer;
function checkAnswer (button,answer) {
    // const correctAnswer = questions[q].answers.find(answer => answer.correct);
    if(answer.correct) {
        score++;
    } else {
        // wrong
    }

}





function endQuiz() {
    if(q < 10) {
        alert("No Way");
    }
}

startQuiz();