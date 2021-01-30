class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header>
        <div class="logo-and-button-container">
          <div class="brand-logo">
            <a href="#/home">
              <img src="icons/restaurant.svg" alt="Primary Logo Website" />
              Restobook
            </a>
          </div>
          <button class="toggle-button" aria-label="Navigation Menu">
            <img src="icons/menu-hamburger.svg" alt="Icon Menu" />
          </button>
        </div>
        <nav>
          <ul>
            <li><a href="#/home">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li>
              <a
                href="https://www.linkedin.com/in/galih-redha-saputra/"
                target="__blank"
                rel="noreferrer"
                >About Us</a
              >
            </li>
          </ul>
        </nav>
      </header>
    `;
  }
}
customElements.define('custom-header', Header);
