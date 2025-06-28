const allQues = [
"What is the capital of France?",
"Which planet is known as the Red Planet?",
"Who wrote 'Romeo and Juliet'?",
"What is the chemical symbol for water?",
"Which animal is known as the King of the Jungle?",
"How many continents are there on Earth?",
"What gas do plants absorb from the atmosphere?",
"What is the fastest land animal?",
"Which ocean is the largest?",
"Who painted the Mona Lisa?",
"What is the largest mammal?",
"Which country hosted the 2021 Olympics?",
"What is the square root of 64?",
"Who was the first President of the United States?",
"What do bees produce?",
"Which planet has rings around it?",
"What is the tallest mountain in the world?",
"What is the freezing point of water in Celsius?",
"Which language is most spoken worldwide?",
"How many legs does a spider have?"]

const allChoice = [
  ["Paris", "London", "Berlin", "Madrid"],
  ["Mars", "Earth", "Jupiter", "Venus"],
  ["William Shakespeare", "William Wordsworth", "Mark Twain", "Jane Austen"],
  ["H2O", "H2", "O2", "CO2"],
  ["Lion", "Elephant", "Tiger", "Giraffe"],
  ["7", "5", "6", "8"],
  ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  ["Cheetah", "Lion", "Horse", "Tiger"],
  ["Pacific", "Atlantic", "Indian", "Arctic"],
  ["Leonardo da Vinci", "Pablo Picasso", "Van Gogh", "Michelangelo"],
  ["Blue Whale", "Elephant", "Giraffe", "Great White Shark"],
  ["Japan", "USA", "Brazil", "China"],
  ["8", "6", "10", "9"],
  ["George Washington", "Abraham Lincoln", "John Adams", "Thomas Jefferson"],
  ["Honey", "Wax", "Pollen", "Nectar"],
  ["Saturn", "Mars", "Jupiter", "Uranus"],
  ["Everest", "K2", "Makalu", "Kangchenjunga"],
  ["0°C", "32°C", "100°C", "10°C"],
  ["Mandarin", "Spanish", "English", "Hindi"],
  ["8", "6", "10", "12"]
];

const quesSelect = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
const allAnswer = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
answerSubmitted = []


function calculatedScore() {
score = 0
for (i = 0; i < 20; i++){
if (allAnswer[i] == answerSubmitted[i]){
    score += 1
}
}
return score;
}


function finalResult() {
  document.querySelector(".quiz-container").style.display = "none";
  document.querySelector(".results-container").style.display = "flex";
  document.querySelector(".score-text").innerHTML = "Your final score is " + calculatedScore() + "/19";
}



function SetQuestion(){

document.querySelectorAll(".choices label").forEach(label => {
label.classList.remove("correct", "wrong");
});
      
if (quesSelect.length != 0){
randomIndex = Math.floor(Math.random() * quesSelect.length);
questionNum = quesSelect[randomIndex];
    
document.querySelector(".question").innerHTML = allQues[questionNum];
document.querySelector(".choice1").innerHTML = allChoice[questionNum][0];
document.querySelector(".choice2").innerHTML = allChoice[questionNum][1];
document.querySelector(".choice3").innerHTML = allChoice[questionNum][2];
document.querySelector(".choice4").innerHTML = allChoice[questionNum][3];

document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.checked = false;
})
quesSelect.splice(randomIndex, 1);
}
if (quesSelect.length == 0){
    finalResult()
    return;
}
}


SetQuestion();

document.querySelector(".submit").addEventListener("click", function () {
    const answerPicked = document.querySelector('input[type="radio"]:checked');
  
    if (answerPicked == null) {
      alert("Please choose an answer choice before clicking next.");
      return;
    }
  
    console.log(answerPicked.id);
    answerSubmitted.push(parseInt(answerPicked.id));

  
   
    document.querySelectorAll(".choices label").forEach(label => {
      label.classList.remove("correct", "wrong");
    });
  
    const pickedId = answerPicked.id;
    const correctId = allAnswer[questionNum].toString();
  
    const selectedLabel = document.querySelector(`label.choice${pickedId}`);
  
    if (parseInt(pickedId) === parseInt(correctId))
    {
      selectedLabel.classList.add("correct");
    } else {
      selectedLabel.classList.add("wrong");
      const correctLabel = document.querySelector(`label.choice${correctId}`);
    }
  
    setTimeout(() => {
        if (quesSelect.length > 0) {
          SetQuestion();
        } else {
          finalResult();
        }
      }, 500);

    });
      

  document.querySelectorAll(".restart").forEach(btn => {
  btn.addEventListener("click", function () {
    quesSelect.length = 0;
    for (let i = 0; i < 20; i++) quesSelect.push(i);

    answerSubmitted.length = 0;
    document.querySelector(".quiz-container").style.display = "flex";
    document.querySelector(".results-container").style.display = "none";

    document.querySelector(".submit").disabled = false;

    SetQuestion();
  });
});

  
  