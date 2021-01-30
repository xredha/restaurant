class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer tabindex="0">
        <p>Copyright © 2020 - Restobook</p>
      </footer>
    `;
  }
}
customElements.define('custom-footer', Footer);
