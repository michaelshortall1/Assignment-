const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';
let questions = "Who was the first American woman in space?" ,
"True or false: 5 kilometer == 5000 meters?", "(5 + 3)/2 * 10 = ?" , 
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", "What is the minimum crew size for the ISS?" ;
let correctAnswers = "Sally Ride", "true", "40", "Trajectory", "3";

let candidateAnswers = "";


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
let candidateName = input.question('What is your name?');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  let candidateAnswer = imput.question(question);
  
while (i < [0, 0 ] {
   candidateAnswer = input.question('Invalid input. Please enter correct answer');
   candidateAnswer= candidateAnswer(i);
   


}
 // Using your question variable, display the question and prompt the candidate for their answer. Store their response in one of the variables you defined just above.//



}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  if (candidateAnswers === correctAnswer);
  console.log("You got the answer correct!");
  else (candidateAnswers ==! "Sally Ride");
  console.log("Invalid answer. Try Again!");
  
  console.log(candidateAnswer[0,0])
while (${candidateAnswer});  {
return (${correctAnswer}; 

}

  //Replace the basic feedback from TODO 1.2c with a template literal that displays each of the candidate's responses in addition to the corresponding correct answers.//



  let grade = 100%;
  if (correctAnswers * quiz questions); 

  while (Number of Correct Answers) / (Number of Quiz Questions) * 100); 


  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Welcome" + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
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