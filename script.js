const questions = [
    {   
        number: "1",
        question: "Which data structure follows the First In, First Out (FIFO) principle?",
        answers: [
            {text:"Stack",correct: false},
            {text:"Queue",correct: true},
            {text:"Linked List",correct: false},
            {text:"Hash Table",correct: false},
        ],
        chosenAnswer: null,
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
        chosenAnswer: null,
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
        chosenAnswer: null,
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
        chosenAnswer: null,
    },
    {
        number: "5",
        question: "What is the time complexity of inserting an element at the end of a dynamic array (e.g., Python list)?",
        answers: [
            { text: "O(1)", correct: true },
            { text: "O(n)", correct: false },
            { text: "O(log n)", correct: false },
            { text: "O(n^2)", correct: false },
        ],
        chosenAnswer: null,
    },
    {
        number: "6",
        question: "In Git, what command is used to view the commit history?",
        answers: [
            { text: "git log", correct: true },
            { text: "git history", correct: false },
            { text: "git commits", correct: false },
            { text: "git show", correct: false },
        ],
        chosenAnswer: null,
    },
    {
        number: "7",
        question: "In Python, which keyword is used to define a function?",
        answers: [
            { text: "func", correct: false },
            { text: "define", correct: false },
            { text: "def", correct: true },
            { text: "function", correct: false }
        ],
        chosenAnswer: null,
    },
    {
        number: "8",
        question: "Which of the following is NOT a valid HTTP method?",
        answers: [
            { text: "GET", correct: false },
            { text: "POST", correct: false },
            { text: "FETCH", correct: true },
            { text: "DELETE", correct: false },
        ],
        chosenAnswer: null,
    },
    {
        number: "9",
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        answers: [
            { text: "It refers to the current function.", correct: false },
            { text: "It refers to the global object.", correct: false },
            { text: "It refers to the object that owns the executing code.", correct: true },
            { text: "It refers to the parent function.", correct: false },
        ],
        chosenAnswer: null,
    },
    {
        number: "10",
        question: "What is the purpose of the 'finally' block in a try-except-finally statement in Python?",
        answers: [
            { text: "To handle exceptions that occur in the try block.", correct: false },
            { text: "To execute code regardless of whether an exception occurs.", correct: true },
            { text: "To define a block of code that should never raise an exception.", correct: false },
            { text: "To replace the try block if an exception occurs.", correct: false },
        ],
        chosenAnswer: null,
    },
];
const startBtn = document.querySelector(".start");
const finishBtn = document.querySelector(".finish");
const resetBtn = document.querySelector(".reset");

const startContainer = document.querySelector(".startContainer");
const mainContainer = document.querySelector(".container");
const endContainer = document.querySelector(".endContainer");

const scoreCount = document.getElementById("score");
const count = document.getElementById("count");
const timer = document.getElementById("timer");
let timerText = document.getElementById("timerText");

const question = document.getElementById("question");
const answers = document.querySelectorAll(".answers .btn");
const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

let score = 0;
let q = 0;
let c = 1;
let IntervalId;
let minutes = 0;
let seconds = 0;

function init() {
    startBtn.addEventListener("click", startQuiz);
    nextBtn.addEventListener("click", changeQuestion);
    previousBtn.addEventListener("click", previousQuestion);
    finishBtn.addEventListener("click", endQuiz);
    resetBtn.addEventListener("click",reset);
}
function startQuiz() {
    startContainer.style.display = "none";
    mainContainer.style.display = "block";
    startTimer();                              //!/vghuyhghjuytrfdcfg
    changeQuestion();
}
function previousQuestion() {
    if(q > 1) {
        q-=2, c-=2;
        changeQuestion();
        finishBtn.style.display = "none";
        nextBtn.style.display = "flex";
    }   
}
function changeQuestion() {
    if(q < questions.length) {
        const currentQuestion = questions[q];
        question.innerHTML = `${currentQuestion.number}.${currentQuestion.question}`;
        
        answers.forEach((button,i) => {
            button.innerHTML = currentQuestion.answers[i].text;
            button.style.backgroundColor = "";
            button.disabled = false;
            if(currentQuestion.chosenAnswer !== null){
                button.disabled = true;
                if(currentQuestion.chosenAnswer === i) {
                    button.style.backgroundColor = currentQuestion.answers[i].correct ? "green" : "red";
                }
            }
            button.onclick = () => {
                currentQuestion.chosenAnswer = i;
                checkAnswer(button,currentQuestion.answers[i]);
            };
        });
        count.innerHTML = `${c}/10`;
        ++q, ++c;
        
        if(q === questions.length) {
            nextBtn.style.display = "none";
            finishBtn.style.display = "flex";
        }
    } else {
        endQuiz(); 
    }
}

function checkAnswer (button,answer) {
    (answer.correct) ? (button.style.backgroundColor = "green",score++) : button.style.backgroundColor = "red";
    answers.forEach((btn) => {
        btn.disabled = true;
    });
}   
function endQuiz() {
    scoreCount.innerHTML = score;
    mainContainer.style.display = "none";
    endContainer.style.display = "flex";
    clearInterval(IntervalId);
}
function reset() {
    score = 0, q = 0, c = 1;
    questions.forEach((v) => v.chosenAnswer = null);
    endContainer.style.display = "none";
    startContainer.style.display = "flex";
    finishBtn.style.display = "none";
    nextBtn.style.display = "flex";    
    seconds = 0;
    minutes = 0;
}

function startTimer() {
    clearInterval(IntervalId);
    seconds = 0;
    minutes = 0;

    IntervalId = setInterval(() => {
        seconds++;
        if(seconds === 60) {
            seconds = 0;
            minutes++;
        }
        timer.textContent = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
        timerText.textContent = timer.textContent
    }, 1000);
}

init();