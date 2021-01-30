import RestaurantSource from '../../data/restaurant-source.js';
import {createRestaurantItemTemplate} from '../templates/template-creator.js';
import '../templates/components/jumbotron.js';
import '../templates/components/sponsorship.js';

const Home = {
  async render() {
    return `
      <custom-jumbotron></custom-jumbotron>
      <section class="restaurant" id="mainContent">
        <h2 tabindex="0">Daftar Restoran</h2>
        <div class="restaurant__container"></div>
      </section>
      <custom-sponsorship></custom-sponsorship>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('.restaurant__container');
    const restaurants = await RestaurantSource.restaurantList();
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
