allQues = [
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
allChoice = [["1C1","1C2","1C3","1C4"],["2C1","2C2","2C3","2C4"],["3C1","3C2","3C3","3C4"],
            ["4C1","4C2","4C3","4C4"],["5C1","5C2","5C3","5C4"],["6C1","6C2","6C3","6C4"],
            ["7C1","7C2","7C3","7C4"],["8C1","8C2","8C3","8C4"],["9C1","9C2","9C3","9C4"],
            ["10C1","10C2","10C3","10C4"],["11C1","11C2","11C3","11C4"],["12C1","12C2","12C3","12C4"],
            ["13C1","13C2","13C3","13C4"],["14C1","14C2","14C3","14C4"],["15C1","15C2","15C3","15C4"],
            ["16C1","16C2","16C3","16C4"],["17C1","17C2","17C3","17C4"],["18C1","18C2","18C3","18C4"],
            ["19C1","19C2","19C3","19C4"],["20C1","20C2","20C3","20C4"]]
quesSelect = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
allAnswer = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
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


function finalResult () {
    $('.c4').after('<div class= "score">inincr</div>')
    document.querySelector(".score").innerHTML = "Final score: " + calculatedScore() + "/20"
    document.querySelector(".submit").disabled = true;
}


function SetQuestion(){
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

document.querySelector(".submit").addEventListener("click", function(){
    const answerPicked = document.querySelector('input[type="radio"]:checked');

    if (answerPicked == null){
        alert("Please choose an answer choice before clicking next.")
    }
    else{
    console.log(answerPicked.id)
    answerSubmitted.push(answerPicked.id)
    SetQuestion()}
})