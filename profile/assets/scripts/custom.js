function setRating(rating) {
    const stars = document.querySelectorAll('.star svg');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.remove('text-gray-400');
            star.classList.add('text-yellow-500');
        } else {
            star.classList.remove('text-yellow-500');
            star.classList.add('text-gray-400');
        }
    });
}



function showNextQuestion(current) {
    const currentQuestion = document.getElementById(`question-${current}`);
    const nextQuestion = document.getElementById(`question-${current + 1}`);


    currentQuestion.classList.add('hidden');

    nextQuestion.classList.remove('hidden');
    nextQuestion.classList.add('fade-in');
}

function showPreviousQuestion(current) {
    const currentQuestion = document.getElementById(`question-${current}`);
    const previousQuestion = document.getElementById(`question-${current - 1}`);


    currentQuestion.classList.add('hidden');

    previousQuestion.classList.remove('hidden');
    previousQuestion.classList.add('fade-in');
}

function submitSurvey() {
    alert('از شرکت در نظر سنجی شما سپاس گذاریم');
}