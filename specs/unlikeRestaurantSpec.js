import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import {createLikeButtonPresenterWithRestaurant, sampleRestaurantData} from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant(sampleRestaurantData);
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(sampleRestaurantData.id);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await createLikeButtonPresenterWithRestaurant(sampleRestaurantData);

    expect(document.querySelector('[aria-label="Tidak Sukai Restoran Ini"]'))
        .toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await createLikeButtonPresenterWithRestaurant(sampleRestaurantData);

    expect(document.querySelector('[aria-label="Sukai Restoran Ini"]'))
        .toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await createLikeButtonPresenterWithRestaurant(sampleRestaurantData);

    document.querySelector('[aria-label="Tidak Sukai Restoran Ini"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await createLikeButtonPresenterWithRestaurant(sampleRestaurantData);

    await FavoriteRestaurantIdb.deleteRestaurant(sampleRestaurantData.id);

    document.querySelector('[aria-label="Tidak Sukai Restoran Ini"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
