class Sponsorship extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="sponsorship">
        <h2 tabindex="0">Didukung Oleh</h2>
        <div class="sponsorship__container">
          <img
            class="lazyload"
            src="icons/sponsorship/a&w.svg"
            alt="Logo Sponsor A&W Restaurant"
            tabindex="0"
          />
          <img
            class="lazyload"
            src="icons/sponsorship/baskin-robbins.svg"
            alt="Logo Sponsor Baskin Robbins"
            tabindex="0"
          />
          <img
            class="lazyload"
            src="icons/sponsorship/burger-king.svg"
            alt="Logo Sponsor Burger King"
            tabindex="0"
          />
          <img
            class="lazyload"
            src="icons/sponsorship/domino-pizza.svg"
            alt="Logo Sponsor Domino Pizza"
            tabindex="0"
          />
          <img
            class="lazyload"
            src="icons/sponsorship/kfc.svg"
            alt="Logo Sponsor KFC"
            tabindex="0"
          />
          <img
            class="lazyload"
            src="icons/sponsorship/pizza-hut.svg"
            alt="Logo Sponsor Pizza Hut"
            tabindex="0"
          />
          <img
            class="lazyload"
            src="icons/sponsorship/starbucks.svg"
            alt="Logo Sponsor Starbucks"
            tabindex="0"
          />
          <img
            class="lazyload"
            src="icons/sponsorship/walls.svg"
            alt="Logo Sponsor Walls Ice Cream"
            tabindex="0"
          />
        </div>
      </section>
    `;
  }
}
customElements.define('custom-sponsorship', Sponsorship);
