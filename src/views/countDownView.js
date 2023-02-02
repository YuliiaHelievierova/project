import { COUNTER_ID } from '../constants.js';
import { nextQuestion } from '../pages/questionPage.js';

export let countdownInterval;
export const initCounter = () => {
  let counter = 15;
  countdownInterval = setInterval(function () {
  let id = document.getElementById(COUNTER_ID);
  if (counter > 0) {
    id.innerHTML = `Last ${counter} seconds for this question!`;
  }
  else if (counter === 0) {
    id.innerHTML = 'Times Up!';
    setTimeout(nextQuestion, 1000)
  }
  counter--;
  }, 1000);
}
