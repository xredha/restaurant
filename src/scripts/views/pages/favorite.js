import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.js';
import {createRestaurantItemTemplate} from '../templates/template-creator.js';

const Favorite = {
  async render() {
    return `
    <section class="restaurant" id="mainContent">
      <h2 tabindex="0">Daftar Restoran yang Disukai</h2>
      <div class="restaurant__container"></div>
    </section>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('.restaurant__container');
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
