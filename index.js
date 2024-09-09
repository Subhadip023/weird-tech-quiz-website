console.log("quiz app");

let quizQuestions = [
   {
        question: "What does 'HTTP' stand for?",
        option: ["HyperText Transfer Protocol", "High Text Transfer Protocol", "Hyper Tech Transmission Protocol", "High Transfer Text Protocol",],
        answer: "High Transfer Text Protocol"
    },

    {
        question: "Which protocol ensures secure data transmission?",
        option: ["HTTP", "FTP", "HTPPS", "SMTP",],
        answer: "HTPPS"
    },

    {
        question: "Which component is essential for a computer’s processing power?",
        option: ["GPU", "CPU", "SSD", "RAM",],
        answer: "CPU"
    },

    {
        question: "What is cloud computing primarily used for?",
        option: ["Gaming","Data Storage","Web Browsing","Networking",],
        answer: "Data Storage"
    },

    {
        question: "What does HP stand for?",
        option: ["Henry-Packard", "Hewiit-Packard", "Hewlett-Packard", "Henry-Packer",],
        answer: "Henry-Packard"
    },

    {
        question: "Who is the father of computer science?",
        option: ["Charles Babbage", "Ladies Finger", "Charles Angle", "Tomato Finger",],
        answer: "Charles Babbage"
    },

    {
        question: "Who invented the mouse?",
        option: ["Charles Babbage", "Martin Cooper", "Douglas Engelbart", "Bill Gate",],
        answer: "Douglas Engelbart"
    },

    {
        question: "What is the parent company of Google?",
        option: ["Google", "Alphabet Inc", "Apple", "Oracle",],
        answer: "Alphabet Inc"
    },

    {
        question: "Which city is known as the Silicon City of India?",
        option: ["Hyderabad", "Bengaluru", "Delhi", "Gurugram",],
        answer: "Bengaluru"
    },

    {
        question: "Where is the headquarters of Motorola located?",
        option: [ "China", "United Kingdom", "India", "USA",],
        answer: "USA"
    },
]

const changingQuestions = document.querySelectorAll(".question");

const changingAnswerOne = document.querySelectorAll(".ans-one");

const changingAnswerTwo = document.querySelectorAll(".ans-two");

const changingAnswerThree = document.querySelectorAll(".main-ans");

const changingAnswerFour = document.querySelectorAll(".ans-three");

const submit = document.querySelectorAll(".submit-btn");

let currentQuiz = 0;

let score = 0;

function loadQuiz () {
    currentQuiz = 0;
    score = 0;
    submit.innerHTML = "next";
    showQuestion();
}

function showQuestion (){
    let currentQuestion = quizQuestions[currentQuiz];
    let qNo = currentQuiz + 1;
    changingQuestions[0].innerHTML = qNo + ". " + currentQuestion.question;

    changingAnswerOne[0].innerHTML = currentQuestion.option[0];
    changingAnswerTwo[0].innerHTML = currentQuestion.option[1];
    changingAnswerThree[0].innerHTML = currentQuestion.option[2];
    changingAnswerFour[0].innerHTML = currentQuestion.option[3];

    const optionsContainer = document.querySelector(".answer-div");
    optionsContainer.innerHTML = "";

    currentQuestion.option.forEach((optionText, index) => {
        const button = document.createElement("button");
        button.innerHTML = optionText;
        button.classList.add("btn");
        optionsContainer.appendChild(button);
        if(optionText.answer){
          button.dataset.answer = option.answer
        }
        button.addEventListener("click", checkAnswer);
    });
}

function checkAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.answer === answer;
    if(isCorrect){
       selectedBtn.classList.add("answer")
    }else{
        selectedBtn.classList.add("incorrect")
    }
}

function checkAnswer(selectedOption) {
    if (selectedOption === quizQuestions[currentQuiz].answer) {
        score++;
    }
    currentQuiz++;
    if (currentQuiz < quizQuestions.length) {
        showQuestion();
    } else {
        // Show final score or end of quiz message
    }
}

loadQuiz();

// const q1 = changingQuestions[0];

// q1.innerHTML = questions[0].question;

// const a1 = changingAnswerOne[0];

// a1.innerHTML = questions[0].options1[0]

// const a2 = changingAnswerTwo[0];

// a2.innerHTML = questions[0].options1[1]

// const a3 = changingAnswerThree[0];

// a3.innerHTML = questions[0].options1[2]

// const a4 = changingAnswerFour[0];

// a4.innerHTML = questions[0].options1[3]