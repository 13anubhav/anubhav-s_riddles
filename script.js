function run() {
    const apiUrl =
      "https://riddles-by-api-ninjas.p.rapidapi.com/v1/riddles";
    const headers = {
      "x-rapidapi-host": "riddles-by-api-ninjas.p.rapidapi.com",
      "x-rapidapi-key": "5e937b4952msh0cd60cae124352dp1bd119jsna9ca7300a732",
    };

    fetch(apiUrl, { headers })
      .then((response) => response.json())
      .then((data) => {
        const riddlesDiv = document.getElementById("riddles");
        riddlesDiv.innerHTML = "";
        data.forEach((riddle) => {
          const riddleDiv = document.createElement("div");
          riddleDiv.classList.add("riddle");
          riddleDiv.innerHTML = `
            <h2>${riddle.question}</h2>
            <p class="answer">${riddle.answer}</p>
            <button class="show-answer-btn">Show Answer</button>
          `;
          riddlesDiv.appendChild(riddleDiv);

          const showAnswerBtn = riddleDiv.querySelector(".show-answer-btn");
          const answerPara = riddleDiv.querySelector(".answer");
          showAnswerBtn.addEventListener('click', () => {
    answerPara.style.display = 'block';
    showAnswerBtn.style.display = 'none';
  });
});
})
.catch(error => console.error(error));
    }
    
run();
