function submitTest() {
    var form = document.getElementById('testForm');
    var answers = {
        q1: form.querySelector('input[name="q1"]:checked')?.value,
        q2: form.querySelector('input[name="q2"]:checked')?.value,
        q3: form.querySelector('input[name="q3"]:checked')?.value,
    };

    if (!answers.q1 || !answers.q2 || !answers.q3) {
        alert('Пожалуйста, ответьте на все вопросы!');
        return;
    }

    var score = 0;
    if (answers.q1 === 'a') score++;
    if (answers.q2 === 'c') score++;
    if (answers.q3 === 'a') score++;

    alert('Ваш результат: ' + score + ' из 3');
}
