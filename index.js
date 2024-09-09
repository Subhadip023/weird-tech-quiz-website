
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

const submit = document.querySelectorAll(".submit-btn")[0];

let currentQuiz=0
let score=0

function loadQuiz () {
    currentQuiz = 0;
    score = 0;
    submit.innerHTML = "next";
    
    showQuestion(currentQuiz);

    
}
submit.addEventListener('click', (e) => {
    currentQuiz++;
    if (currentQuiz < quizQuestions.length) {
        showQuestion(currentQuiz);
    } else {
        
        document.querySelectorAll('.question-div')[0].innerHTML="Your score is " + score + " out of " + quizQuestions.length;
        document.querySelector(".answer-div").innerHTML=''
        
        submit.innerHTML=''
        submit.classList.remove('submit-btn')
        
    }
})

function showQuestion (currentQuiz){
    let currentQuestion = quizQuestions[currentQuiz];
    let qNo = currentQuiz + 1;
    changingQuestions[0].innerHTML = qNo + ". " + currentQuestion.question;

    

    const optionsContainer = document.querySelector(".answer-div");
    optionsContainer.innerHTML = "";

    let answered = false;  

for (let i = 0; i < 4; i++) {   
    const option = document.createElement("button");
    option.classList.add("ans");
    option.value = currentQuestion.option[i];
    option.innerHTML = currentQuestion.option[i];
    
    option.addEventListener("click", (e) => {
        if (answered) return;  
        
        const isCorrect = e.target.value === quizQuestions[currentQuiz].answer;
        console.log(isCorrect);
        
        if (isCorrect) {
            score++;
            option.classList.add("answer");
        } else {
            option.classList.add("incorrect");
        }
       
        
        answered = true;  
    });
  
    
    optionsContainer.appendChild(option);
}

    
}

function checkAnswerForButton(e){
    const selectedBtn = e.target.value;
    console.log(selectedBtn);
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
        console.log(score)
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