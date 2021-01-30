class Loading extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="loading">
        <div class="lds-dual-ring"></div>
      </div>
    `;
  }
}
customElements.define('custom-loading', Loading);
