class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="jumbotron" tabindex="0" aria-label="Gambar Jumbotron">
        <div class="jumbotron__image lazyload">
          <h1 tabindex="0">
            Kemudahan dalam genggaman untuk mendapatkan pilihan restoran terbaik
          </h1>
        </div>
      </section>
    `;
  }
}
customElements.define('custom-jumbotron', Jumbotron);
