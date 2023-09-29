const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ",
 "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ", 
   "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
   "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"]
let candidateAnswers = []


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Please enter your name");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 
  for (let i = 0; i < questions.length; i++) {
  let answeredQuestions = input.question(questions[i]);
  
  candidateAnswers.push(answeredQuestions);
 }

 }


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly// 
console.log(`${candidateName} 
1) ${questions[0]} you answered: ${candidateAnswers[0]} the correct answer is ${correctAnswers[0]}
2) ${questions[1]} you answered: ${candidateAnswers[1]} the correct answer is ${correctAnswers[1]}
3) ${questions[2]} you answered: ${candidateAnswers[2]} the correct answer is ${correctAnswers[2]}
4) ${questions[3]} you answered: ${candidateAnswers[3]} the correct answer is ${correctAnswers[3]}
5) ${questions[4]} you answered: ${candidateAnswers[4]} the correct answer is ${correctAnswers[4]}`);

  let numCorrect = [];
  let grade = 0;  //TODO 3.2 use this variable to calculate the candidates score.
  

  
  for (let i = 0; i < questions.length; i++){
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      numCorrect.push(candidateAnswers[i]);
      grade = numCorrect.length / questions.length * 100
    }
     console.log(`>>> Overall Grade: ${grade}%  ( ${numCorrect.length} of ${questions.length}) responses correct <<<`); 
}
  if(grade >= 80){
    console.log(">>> Status: Passed <<<");
  } else{
    console.log(">>> Status: Failed <<<");
  }
  return grade;
}

function runProgram() {
  console.log(questions[0]);
  askForName();
  // TODO 1.1c: Greet candidate using their name update //
   console.log(`Hello ${candidateName} !`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};