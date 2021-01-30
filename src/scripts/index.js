import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css';
import '../styles/responsive.css';
import './views/templates/components/header.js';
import './views/templates/components/footer.js';
import './views/templates/components/loading.js';
import App from './views/app.js';
import swRegister from './utils/sw-register.js';

const app = new App({
  button: document.querySelector('.toggle-button'),
  drawer: document.querySelector('nav'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
  swRegister();
});

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
  swRegister();
});
