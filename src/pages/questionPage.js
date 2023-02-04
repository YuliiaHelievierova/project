import {
  ANSWERS_LIST_ID,
  CORRECT_ANSWER_RATE_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  USEFUL_LINKS_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
//import { initCounter } from '../views/countdownView.js';
//import { countdownInterval } from '../views/countdownView.js';
import { resultPage } from '../pages/resultPage.js';
import { initQuestionProgress } from '../views/progressView.js';
import { createCorrectAnswerViewElement } from '../views/correctAnswerCountView.js';
import { timer } from '../timer.js';
import { createUsefulLinkElement } from '../views/usefulLink.js';

let correctAnswerCount = 0;
let isCurrentAnswerCorrect = false;
let score = 0;

export const initQuestionPage = (correctAnswerCount) => {
  //timer();
  isCurrentAnswerCorrect = false;
  correctAnswerCount = correctAnswerCount ?? 0;
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  function answerSelection(answer) {
    let theAnswer = [];
    if (answer.target.tagName === 'LI') {
      const userAnswer = answer.target.id;

      theAnswer[quizData.currentQuestionIndex] =
        currentQuestion.answers[userAnswer];
      if (userAnswer === currentQuestion.correct) {
        score++;
        answer.target.style.backgroundColor = 'green';
        answersListElement.style.pointerEvents = 'none';
      } else {
        answersListElement.style.pointerEvents = 'none';
        answer.target.style.backgroundColor = 'red';
      }
    }
  }
  console.log(quizData.currentQuestionIndex);
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const correctAnswerElement = createCorrectAnswerViewElement();
  userInterface.appendChild(correctAnswerElement);
  const correctAnswerCountElement = document.getElementById(
    CORRECT_ANSWER_RATE_ID
  );
  correctAnswerCountElement.innerText = `Correct answer: ${score}`;

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [answerLetter, answerText] of Object.entries(
    currentQuestion.answers
  )) {
    const answerElement = createAnswerElement(answerLetter, answerText);
    answerElement.className = 'answer-list-item';
    answersListElement.appendChild(answerElement);
  }
  const usefulLinksElement = document.getElementById(USEFUL_LINKS_ID);
  usefulLinksElement.classList.add('hidden');
  usefulLinksElement.classList.remove('hidden');
  currentQuestion.links.forEach((link) => {
    const linkElement = createUsefulLinkElement(link);
    usefulLinksElement.appendChild(linkElement);
  });

  document
    .getElementById(ANSWERS_LIST_ID)
    .addEventListener('click', answerSelection);

  let timer = document.getElementById('timer');
  timer.style.display = 'none';

  // making answers clickable

  initQuestionProgress();
  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

export const nextQuestion = () => {
  console.log('dag');
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  if (quizData.currentQuestionIndex >= quizData.questions.length) {
    resultPage(correctAnswerCount);
    console.log('hey');
  } else {
    initQuestionPage(correctAnswerCount);
  }
};
