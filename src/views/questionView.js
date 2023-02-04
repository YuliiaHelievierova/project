import {
  ANSWERS_LIST_ID,
  CORRECT_ANSWER_RATE_ID,
  USEFUL_LINKS_ID,
  NEXT_QUESTION_BUTTON_ID,
  PROGRESS_ID,
  QUESTION_H1_CLASS,
} from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    
    <div id="question">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <p id="${PROGRESS_ID}"></p>
    <h1 class="${QUESTION_H1_CLASS}">${question}</h1>    
    <ul id="${ANSWERS_LIST_ID}" class="answers-list">
    </ul> 
    <ul id="${USEFUL_LINKS_ID}">Read more: 
    </ul>   
    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
    </div>
  `;

  return element;
};

// <p id="${COUNTER_ID}"></p>     from line 20
