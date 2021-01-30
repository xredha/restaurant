class EmptyFavorite extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="error-page" id="empty-favorite">
        <h2>Anda Belum Mempunyai Restaurant Favorit Manapun, Silahkan Pilih Terlebih Dahulu.</h2>
      </div>
    `;
  }
}
customElements.define('empty-favorite', EmptyFavorite);
