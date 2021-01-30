import RestaurantSource from '../../data/restaurant-source.js';
import UrlParser from '../../routes/url-parser.js';
import {createRestaurantDetailTemplate} from '../templates/template-creator.js';
import LikeButtonPresenter from '../../utils/like-button-presenter.js';

const Detail = {
  async render() {
    return `
      <section class="detail-restaurant"></section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const detailRestaurant = document.querySelector('.detail-restaurant');
    detailRestaurant.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        categories: restaurant.categories,
        menus: restaurant.menus,
        rating: restaurant.rating,
        customerReviews: restaurant.customerReviews,
      },
    });

    const formReview = document.querySelector('#formReview');
    formReview.addEventListener('submit', (event) => {
      // Mencegah agar tidak refresh halaman saat submit
      event.preventDefault();

      const nameInput = document.querySelector('#nameInput').value;
      const reviewInput = document.querySelector('#reviewInput').value;
      const dataInput = {
        id: url.id,
        name: nameInput,
        review: reviewInput,
      };
      RestaurantSource.postCustomerReviews(dataInput);
      alert('Terimakasih Atas Masukan Anda 😊');
    });
  },
};

export default Detail;
