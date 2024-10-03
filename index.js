
let quizQuestions = [
   {
        question: "What does 'HTTP' stand for?",
        option: ["HyperText Transfer Protocol", "High Text Transfer Protocol", "Hyper Tech Transmission Protocol", "High Transfer Text Protocol",],
        answer: "HyperText Transfer Protocol"
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

const changingQuestions = document.querySelector(".question");
const optionsContainer = document.querySelector(".answer-div");
const submitButton = document.querySelector(".submit-btn");

let currentQuiz = 0;
let score = 0;

// Load initial quiz
function loadQuiz() {
    currentQuiz = 0;
    score = 0;
    submitButton.innerHTML = "Next";
    showQuestion(currentQuiz);
}

submitButton.addEventListener("click", () => {
    currentQuiz++;
    if (currentQuiz < quizQuestions.length) {
        showQuestion(currentQuiz);
    } else {
        showFinalScore();
    }
});

function showQuestion(index) {
    const currentQuestion = quizQuestions[index];
    
    // Update the question text
    changingQuestions.innerHTML = `${index + 1}. ${currentQuestion.question}`;
    
    // Clear previous options
    optionsContainer.innerHTML = "";

     let correctOptionButton;

    // Generate new options
    currentQuestion.option.forEach(optionText => {
        const optionButton = document.createElement("button");
        optionButton.classList.add("ans");
        optionButton.innerHTML = optionText;
        optionButton.value = optionText;

         if (optionText === currentQuestion.answer) {
            correctOptionButton = optionButton;
        }

        optionButton.addEventListener("click", (e) => {
            if (optionButton.disabled) return;

            const isCorrect = e.target.value === currentQuestion.answer;
            optionButton.classList.add(isCorrect ? "answer" : "incorrect");

            disableAllOptions();

            if (!isCorrect) {
                correctOptionButton.classList.add("answer");
            }

            if (isCorrect) {
                score++;
            }
        });

        optionsContainer.appendChild(optionButton);
    });
}

function disableAllOptions() {
    document.querySelectorAll(".ans").forEach(button => {
        button.disabled = true;
    });
}

function showFinalScore() {
    document.querySelector(".question-div").innerHTML = `Your score is ${score} out of ${quizQuestions.length}`;
    optionsContainer.innerHTML = '';
    submitButton.innerHTML = '';
    submitButton.classList.remove("submit-btn");
}

loadQuiz();
