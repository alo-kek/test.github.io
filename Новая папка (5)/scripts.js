document.addEventListener("DOMContentLoaded", () => {
    const correctAnswers = ["Париж", "JavaScript", "7", "Нил", "HyperText Markup Language"];
    const submitBtn = document.querySelector(".submit-btn");
    const modalOverlay = document.querySelector(".modal-overlay");
    const closeBtn = document.querySelector(".close-btn");
    const summaryDiv = document.querySelector(".answer-summary");
  
    submitBtn.addEventListener("click", () => {
      let resultHTML = "";
      let correctCount = 0;
  
      correctAnswers.forEach((answer, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
  
        if (selected) {
          const isCorrect = selected.value === answer;
          resultHTML += `<p><strong>Вопрос ${index + 1}:</strong> ${isCorrect ? '✔️ Правильно' : `❌ Неправильно (Ваш ответ: ${selected.value}, Правильный: ${answer})`}</p>`;
          if (isCorrect) correctCount++;
        } else {
          resultHTML += `<p><strong>Вопрос ${index + 1}:</strong> ❌ Без ответа (Правильный: ${answer})</p>`;
        }
      });
  
      resultHTML += `<hr><p><strong>Итого: ${correctCount} из ${correctAnswers.length}</strong></p>`;
      summaryDiv.innerHTML = resultHTML;
      modalOverlay.style.display = "flex";
    });
  
    closeBtn.addEventListener("click", () => {
      modalOverlay.style.display = "none";
    });
  });
  