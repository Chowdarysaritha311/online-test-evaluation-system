let questions = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of France?", answer: "Paris" }
];

function startTest() {
    window.location.href = "test.html";
}

function submitTest() {
    let userAnswers = document.querySelectorAll(".answer");
    let score = 0;

    userAnswers.forEach((input, index) => {
        if (input.value.trim().toLowerCase() === questions[index].answer.toLowerCase()) {
            score++;
        }
    });

    alert("Your Score: " + score + "/" + questions.length);
}

window.onload = function() {
    let container = document.getElementById("question-container");
    if (container) {
        questions.forEach((q, i) => {
            let div = document.createElement("div");
            div.innerHTML = `<p>${q.question}</p><input type='text' class='answer'>`;
            container.appendChild(div);
        });
    }
};
