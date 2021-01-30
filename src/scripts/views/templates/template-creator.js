import API_ENDPOINT from '../../globals/api-endpoint.js';
import * as func from './fraction-creator.js';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant__component">
    <img src="${API_ENDPOINT.IMAGE.MEDIUM(restaurant.pictureId)}" alt="Gambar Restaurant ${restaurant.name}" tabindex="0">
    <div class="restaurant__component__header">
      <p class="restaurant__component__header__name" tabindex="0">${restaurant.name}</p>
      <p class="restaurant__component__header__city" tabindex="0">${restaurant.city}</p>
        <div class="restaurant__component__header__rating" tabindex="0" aria-label="Rating ${restaurant.rating}">
          <p class="restaurant__component__header__rating__numbers">${restaurant.rating}</p>
          <div class="restaurant__component__header__rating__stars">
            ${func.createRestaurantRatingStars(restaurant.rating)}
          </div>
        </div>
    </div>
    <div class="restaurant__component__desc" tabindex="0">
      <p>${restaurant.description}</p>
    </div>
    <a href="${`#/detail/${restaurant.id}`}" aria-label="Menuju Detail ${restaurant.name}" class="restaurant__component__anchor">Lihat Detail</a>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 tabindex="0">Detail Restaurant</h2>
  <div class="detail-restaurant__container">
    <img src="${API_ENDPOINT.IMAGE.LARGE(restaurant.pictureId)}" alt="Gambar Restaurant ${restaurant.name}" tabindex="0">
    <div class="detail-restaurant__content">
      <h3 tabindex="0">Nama : </h3>
      <p tabindex="0">${restaurant.name}</p>
      <h3 tabindex="0">Kota : </h3>
      <p tabindex="0">${restaurant.city}</p>
      <h3 tabindex="0">Alamat : </h3>
      <p tabindex="0">${restaurant.address}</p>
      <h3 tabindex="0">Rating : </h3>
      <p tabindex="0">${restaurant.rating} ${func.createRestaurantRatingStars(restaurant.rating)}</p>
      <h3 tabindex="0">Kategori : </h3>
      <p tabindex="0">${func.createRestaurantDetailCategories(restaurant).join(', ')}</p>
      <div class="detail-restaurant__content__menu">
        <div class="detail-restaurant__content__menu__food">
          <h3 tabindex="0">Makanan</h3>
          <ul>
            ${func.createRestaurantDetailMenus(restaurant, 'foods')}
          </ul>
        </div>
        <div class="detail-restaurant__content__menu__drink">
          <h3 tabindex="0">Minuman</h3>
          <ul>
            ${func.createRestaurantDetailMenus(restaurant, 'drinks')}
          </ul>
        </div>
      </div>
    </div>
    <div class="detail-restaurant__desc">
      <h3 tabindex="0">Deskripsi</h3>
      <p tabindex="0">${restaurant.description}</p>
    </div>
    <div class="detail-restaurant__review">
      <h3 tabindex="0">Review</h3>
      <div class="detail-restaurant__review__persons">
        ${func.createRestaurantDetailReviews(restaurant)}
      </div>
    </div>
  </div>
  <h2 tabindex="0">Masukkan Review Customer</h2>
  <div class="detail-restaurant__form">
    ${func.createRestaurantDetailForm(restaurant)}
  </div>
  <div id="likeButtonContainer"></div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
};
