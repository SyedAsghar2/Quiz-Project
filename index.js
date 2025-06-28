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
allChoice = [["London", "Paris", "Berlin", "Madrid"],
["Earth", "Mars", "Jupiter", "Venus"],
["William Wordsworth", "William Shakespeare", "Mark Twain", "Jane Austen"],
["H2", "H2O", "O2", "CO2"],
["Elephant", "Tiger", "Lion", "Giraffe"],
["5", "6", "7", "8"],
["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
["Cheetah", "Lion", "Horse", "Tiger"],
["Atlantic", "Indian", "Arctic", "Pacific"],
["Leonardo da Vinci", "Pablo Picasso", "Van Gogh", "Michelangelo"],
["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
["Japan", "USA", "Brazil", "China"],
["6", "8", "10", "9"],
["Abraham Lincoln", "George Washington", "John Adams", "Thomas Jefferson"],
["Wax", "Honey", "Pollen", "Nectar"],
["Mars", "Jupiter", "Saturn", "Uranus"],
["K2", "Everest", "Makalu", "Kangchenjunga"],
["0°C", "32°C", "100°C", "10°C"],
["Spanish", "English", "Hindi", "Mandarin"],
["6", "8", "10", "12"]]
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