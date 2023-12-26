// Array to store questions and answers
const questions = [
    { question: '2 + 2', answer: 4 },
    { question: '5 + 3', answer: 8 },
    { question: '10 + 5', answer: 15 },
    { question:'10+30',answer:40},
    {  question:'20+1',answer:21},
      {  question:'3+7',answer:10}, 
     {  question:'12+5',answer:17},
       {  question:'15+2',answer:17},

  {  question:'20+20',answer:40},
   {  question:'30+34',answer:64},
  {  question:'1x2',answer:3},
   {  question:'2x1',answer:3},
  {  question:'1x3',answer:4},
   {  question:'3x1',answer:4},
  {  question:'0x2',answer:0},
  {  question:'2x4',answer:6},
{ question: '10+15', answer: 25 },
  { question: '25-12', answer: 13 },
  { question: '5x6', answer: 30 },
  { question: '18/2', answer: 9 },
  { question: '8+7', answer: 15 },
  { question: '40/5', answer: 8 },
  { question: '9-4', answer: 5 },
  { question: '3x8', answer: 24 },
  { question: '50-22', answer: 28 },
  { question: '7x9', answer: 63 },
  { question: '24/3', answer: 8 },
  { question: '16+8', answer: 24 },
  { question: '36/4', answer: 9 },
  { question: '15-9', answer: 6 },
  { question: '4x7', answer: 28 },
   { question: '16+24', answer: 40 },
  { question: '50-22', answer: 28 },
  { question: '7x9', answer: 63 },
  { question: '36/4', answer: 9 },
  { question: '15+8', answer: 23 },
  { question: '24/3', answer: 8 },
  { question: '14-6', answer: 8 },
  { question: '5x5', answer: 25 },
 { question: '12+18', answer: 30 },
  { question: '50-25', answer: 25 },
  { question: '4x7', answer: 28 },
  { question: '21/3', answer: 7 },
  { question: '15+9', answer: 24 },
  { question: '36/4', answer: 9 },
  { question: '8-3', answer: 5 },
  { question: '6x5', answer: 30 },
  { question: '12+18', answer: 30 },
  { question: '40-25', answer: 15 },
  { question: '7x9', answer: 63 },
  { question: '24/3', answer: 8 },
  { question: '15+7', answer: 22 },
  { question: '36/6', answer: 6 },
  { question: '8-3', answer: 5 },
  { question: '4x7', answer: 28 },
{ question: '2x3', answer: 6 },
  { question: '5x8', answer: 40 },
  { question: '7x4', answer: 28 },
  { question: '9x6', answer: 54 },
  { question: '3x7', answer: 21 },
  { question: '4x9', answer: 36 },
  { question: '6x5', answer: 30 },
  { question: '8x2', answer: 16 },
     { question: '2x3', answer: 6 },
  { question: '5x8', answer: 40 },
  { question: '7x4', answer: 28 },
  { question: '9x6', answer: 54 },
  { question: '12x5', answer: 60 },
  { question: '10x3', answer: 30 },
  { question: '8x7', answer: 56 },
  { question: '4x9', answer: 36 },
   { question: '2x3', answer: 6 },
  { question: '5x7', answer: 35 },
  { question: '8x4', answer: 32 },
  { question: '6x9', answer: 54 },
  { question: '3x5', answer: 15 },
  { question: '7x2', answer: 14 },
  { question: '4x6', answer: 24 },
  { question: '9x3', answer: 27 },
      { question: '12 / 3', answer: 4 },
  { question: '20 / 5', answer: 4 },
  { question: '15 / 3', answer: 5 },
  { question: '36 / 6', answer: 6 },
  { question: '40 / 8', answer: 5 },
  { question: '24 / 4', answer: 6 },
  { question: '18 / 2', answer: 9 },
  { question: '45 / 9', answer: 5 },
      { question: '15 ÷ 3', answer: 5 },
  { question: '42 ÷ 7', answer: 6 },
  { question: '64 ÷ 8', answer: 8 },
  { question: '27 ÷ 9', answer: 3 },
  { question: '36 ÷ 4', answer: 9 },
  { question: '20 ÷ 5', answer: 4 },
  { question: '45 ÷ 9', answer: 5 },
  { question: '81 ÷ 9', answer: 9 },
    { question: '12/3', answer: 4 },
  { question: '24/4', answer: 6 },
  { question: '36/6', answer: 6 },
  { question: '48/8', answer: 6 },
  { question: '15/3', answer: 5 },
  { question: '18/2', answer: 9 },
  { question: '30/5', answer: 6 },
  { question: '27/9', answer: 3 },



    // Add more questions as needed
];

let currentQuestion = 0;

// Function to display the current question
function displayQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = questions[currentQuestion].question;
}

// Function to check the answer
function checkAnswer() {
    const userAnswer = document.getElementById('answer').value;
    const feedbackElement = document.getElementById('feedback');

    if (userAnswer === '') {
        feedbackElement.textContent = 'Please enter your answer.';
    } else {
        const correctAnswer = questions[currentQuestion].answer;

        if (parseInt(userAnswer) === correctAnswer) {
            feedbackElement.textContent = 'Correct! Well done!';
        } else {
            feedbackElement.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
        }
    }
}

// Function to move to the next question
function nextQuestion() {
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.textContent = '';

    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        alert('Congratulations! You have completed the quiz.');
        resetQuiz();
    }
}

// Function to reset the quiz
function resetQuiz() {
    currentQuestion = 0;
    displayQuestion();
    document.getElementById('answer').value = '';
}

// Initial display
displayQuestion();
