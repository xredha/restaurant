class ErrorPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="error-page">
        <h2>Halaman Gagal Dimuat, Silahkan Cek Koneksi Internet Anda.</h2>
      </div>
    `;
  }
}
customElements.define('error-page', ErrorPage);
