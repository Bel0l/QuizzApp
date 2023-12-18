// const quest = () => {
//     const url = 'https://opentdb.com/api.php?amount=20&category=18&difficulty=easy&type=multiple';
//     fetch(url)
//         .then(data => data.json())
//         .then(result => {
//             // Assuming the questions array is part of the result
//             questions = result.results;
//             showQuestion();
//         });
// }

// const questionElement = document.getElementById("question");
// const answerButton = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     quest(); // Call the quest function to fetch questions
// }

// function showQuestion() {
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement('button');
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButton.appendChild(button);
//     });
// }

// startQuiz();
