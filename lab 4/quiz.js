const quizQuestions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { question: "What is 5 + 7?", answer: "12" },
    { question: "Who is the President of Russia?", answer: "Vladimir Putin" },
    { question: "Which language is used for web development?", answer: "JavaScript" }
];

function runQuiz() {
    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);

        if (userAnswer === null) {
            alert("Question skipped.");
            continue; 
        }

        let normalizedInput = userAnswer.toLowerCase().trim();
        let normalizedAnswer = quizQuestions[i].answer.toLowerCase().trim();

        if (normalizedInput === normalizedAnswer) {
            score++;
            alert("Correct!");
        } else {
            alert(`Wrong! The correct answer is: ${quizQuestions[i].answer}`);
        }
    }

    alert(`Quiz Over! Your final score is ${score} out of ${quizQuestions.length}`);
}

runQuiz();