const allQues = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10",
    "Q11", "Q12", "Q13", "Q14", "Q15", "Q16", "Q17", "Q18", "Q19", "Q20"];
  
  const allChoice = [
    ["1C1", "1C2", "1C3", "1C4"], ["2C1", "2C2", "2C3", "2C4"], ["3C1", "3C2", "3C3", "3C4"],
    ["4C1", "4C2", "4C3", "4C4"], ["5C1", "5C2", "5C3", "5C4"], ["6C1", "6C2", "6C3", "6C4"],
    ["7C1", "7C2", "7C3", "7C4"], ["8C1", "8C2", "8C3", "8C4"], ["9C1", "9C2", "9C3", "9C4"],
    ["10C1", "10C2", "10C3", "10C4"], ["11C1", "11C2", "11C3", "11C4"], ["12C1", "12C2", "12C3", "12C4"],
    ["13C1", "13C2", "13C3", "13C4"], ["14C1", "14C2", "14C3", "14C4"], ["15C1", "15C2", "15C3", "15C4"],
    ["16C1", "16C2", "16C3", "16C4"], ["17C1", "17C2", "17C3", "17C4"], ["18C1", "18C2", "18C3", "18C4"],
    ["19C1", "19C2", "19C3", "19C4"], ["20C1", "20C2", "20C3", "20C4"]
  ];
  
  // First choice is correct for all
  const allAnswer = Array(20).fill(0);
  const answerSubmitted = [];
  
  let questionNum = 0;
  
  function calculateScore() {
    let score = 0;
    for (let i = 0; i < answerSubmitted.length; i++) {
      if (parseInt(answerSubmitted[i]) === allAnswer[i]) score++;
    }
    return score;
  }
  
  function finalResult() {
    document.querySelector(".quiz-container").innerHTML = `
      <div class="quiz-title">Quiz Completed!</div>
      <h2 style="margin: 20px;">Final Score: ${calculateScore()} / 20</h2>
      <button class="submit" onclick="location.reload()">Restart</button>
    `;
  }
  
  function setQuestion() {
    if (questionNum >= allQues.length) {
      finalResult();
      return;
    }
  
    document.querySelector(".question").innerText = allQues[questionNum];
    document.querySelector(".question-num").innerText = `Question ${questionNum + 1} of ${allQues.length}`;
  
    // Set choice text
    document.querySelector(".choice1").innerText = allChoice[questionNum][0];
    document.querySelector(".choice2").innerText = allChoice[questionNum][1];
    document.querySelector(".choice3").innerText = allChoice[questionNum][2];
    document.querySelector(".choice4").innerText = allChoice[questionNum][3];
  
    // Reset inputs and labels
    document.querySelectorAll('input[type="radio"]').forEach((radio, i) => {
      radio.checked = false;
      radio.value = i;
    });
    document.querySelectorAll(".choices label").forEach(label => {
      label.classList.remove("correct", "wrong");
    });
  }
  
  document.querySelector(".submit").addEventListener("click", function () {
    const selected = document.querySelector('input[type="radio"]:checked');
  
    if (!selected) {
      alert("Please choose an answer choice before clicking next.");
      return;
    }
  
    const selectedIndex = parseInt(selected.value);
    answerSubmitted.push(selectedIndex);
  
    const labels = document.querySelectorAll(".choices label");
  
    if (selectedIndex === allAnswer[questionNum]) {
      labels[selectedIndex].classList.add("correct");
    } else {
      labels[selectedIndex].classList.add("wrong");
      labels[allAnswer[questionNum]].classList.add("correct");
    }
  
    questionNum++;
  
    setTimeout(() => {
      setQuestion();
    }, 1000); // Wait 1 second to show highlight
  });
  
  setQuestion();
  