import routes from '../routes/routes.js';
import UrlParser from '../routes/url-parser.js';
import DrawerInitiator from '../utils/drawer-initiator.js';
import '../views/templates/components/error-page.js';

class App {
  constructor({button, drawer, content}) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = routes[url];
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch {
      this._content.innerHTML = `<error-page></error-page>`;
    }
  }
}

export default App;
