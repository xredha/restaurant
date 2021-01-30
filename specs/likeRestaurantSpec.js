import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import {createLikeButtonPresenterWithRestaurant, sampleRestaurantData} from './helpers/testFactories';

describe('Like a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await createLikeButtonPresenterWithRestaurant(sampleRestaurantData);

    expect(document.querySelector('[aria-label="Sukai Restoran Ini"]'))
        .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await createLikeButtonPresenterWithRestaurant(sampleRestaurantData);

    expect(document.querySelector('[aria-label="Tidak Sukai Restoran Ini"]'))
        .toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await createLikeButtonPresenterWithRestaurant(sampleRestaurantData);

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(sampleRestaurantData.id);

    expect(restaurant).toEqual(sampleRestaurantData);

    FavoriteRestaurantIdb.deleteRestaurant(sampleRestaurantData.id);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await createLikeButtonPresenterWithRestaurant(sampleRestaurantData);

    await FavoriteRestaurantIdb.putRestaurant(sampleRestaurantData);

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([sampleRestaurantData]);

    FavoriteRestaurantIdb.deleteRestaurant(sampleRestaurantData.id);
  });

  it('should not add a restaurant when it has no id', async () => {
    await createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
