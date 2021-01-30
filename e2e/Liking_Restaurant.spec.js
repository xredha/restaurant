const assert = require('assert');

Feature('Liking Restaurant');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});

Scenario('Likes one restaurant', async ({I}) => {
  I.see('Anda Belum Mempunyai Restaurant Favorit Manapun, Silahkan Pilih Terlebih Dahulu.', 'h2');

  I.amOnPage('/');
  I.seeElement('.restaurant__component a.restaurant__component__anchor');
  const firstRestaurant = locate('.restaurant__component a.restaurant__component__anchor').first();
  const fisrtRestaurantTitleLocate = locate('.restaurant__component__header__name').first();
  const firstRestaurantTitle = await I.grabTextFrom(fisrtRestaurantTitleLocate);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__container');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__component__header__name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unlike that restaurant', async ({I}) => {
  I.see('Anda Belum Mempunyai Restaurant Favorit Manapun, Silahkan Pilih Terlebih Dahulu.', 'h2');

  I.amOnPage('/');
  I.seeElement('.restaurant__component a.restaurant__component__anchor');
  const firstRestaurant = locate('.restaurant__component a.restaurant__component__anchor').first();
  const fisrtRestaurantTitleLocate = locate('.restaurant__component__header__name').first();
  const firstRestaurantTitle = await I.grabTextFrom(fisrtRestaurantTitleLocate);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__container');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__component__header__name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.amOnPage('/');

  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Anda Belum Mempunyai Restaurant Favorit Manapun, Silahkan Pilih Terlebih Dahulu.', 'h2');
});

Scenario('Post Customer Review', async ({I}) => {
  I.amOnPage('/');

  I.seeElement('.restaurant__component a.restaurant__component__anchor');
  I.click(locate('.restaurant__component a.restaurant__component__anchor').first());

  I.seeElement('#formReview');
  I.fillField('#nameInput', 'Galih Redha Saputra');
  I.fillField('#reviewInput', 'Restoran bersih dan makanannya enak');
  I.click('#submitReview');
  I.acceptPopup();

  I.seeElement('.detail-restaurant__review__person');
});
