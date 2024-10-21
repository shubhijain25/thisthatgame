const questions = [
    {
        answers : [
            { text: "Have some good friends", correct: true },
            { text: "Have many friends", correct: false },
        ]
    },
    {
        answers : [
            { text: "Be your own boss", correct: true },
            { text: "Work for someone else", correct: false },
        ]
    },
    {
        answers : [
            { text: "Hill side cottage", correct: false },
            { text: "Beach side resort", correct: true },
        ]
    },
    {
        answers : [
            { text: "Ability to read minds", correct: false },
            { text: "Ability to travel free", correct: true },
        ]
    },
    {
        answers : [
            { text: "Live in LA", correct: false },
            { text: "Live in NYC", correct: true },
        ]
    },
    {
        answers : [
            { text: "New phone", correct: true },
            { text: "New laptop", correct: false },
        ]
    },
    {
        answers : [
            { text: "Chocolate icecream", correct:true },
            { text: "Vanilla icecream", correct: false },
        ]
    },
    {
        answers : [
            { text: "Soda", correct: true },
            { text: "Milkshakes", correct: false },
        ]
    },
    {
        answers : [
            { text: "Travel Alone", correct: false },
            { text: "Travel with friends", correct: true },
        ]
    },
    {
        answers : [
            { text: "Snowfall at night", correct: true },
            { text: "Rain in the morning", correct: false },
        ]
    },
    {
        answers : [
            { text: "Getting the periods", correct: true },
            { text: "Stubbing the toe", correct: false },
        ]
    },
    {
        answers : [
            { text: "Hair up", correct: false },
            { text: "Hair down", correct: true },
        ]
    },
    {
        answers : [
            { text: "Shopping online", correct: false },
            { text: "Shopping in-store", correct: true },
        ]
    },
    {
        answers : [
            { text: "Always late", correct: true },
            { text: "Always early", correct: false },
        ]
    },
    {
        answers : [
            { text: "Planner", correct: false },
            { text: "Spontaneous", correct: true },
        ]
    },
    {
        answers : [
            { text: "Early bird", correct: false },
            { text: "Night owl", correct: true },
        ]
    },
    {
        answers : [
            { text: "Studs", correct: true },
            { text: "Hoops", correct: false },
        ]
    },
    {
        answers : [
            { text: "Scrunchie", correct: false },
            { text: "Head Band", correct: true },
        ]
    },
    {
        answers : [
            { text: "Hopeless Romantic", correct: true },
            { text: "Hopeful Romantic", correct: false },
        ]
    },
    {
        answers : [
            { text: "Skipping sleep", correct: false },
            { text: "Skipping a meal", correct: true },
        ]
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    questionElement.innerHTML = "";
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    // let questionNo = currentQuestionIndex + 1;
    // questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;    
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextQuestion(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length  ) {
        handleNextQuestion();
    } else {
        startQuiz();
    }
});

startQuiz();