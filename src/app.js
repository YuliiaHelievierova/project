import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

export const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  initWelcomePage();
};

window.addEventListener('load', loadApp);