const createRestaurantRatingStars = (numberRating) => {
  let ratingStars = '';
  for (let makeStar = 1; makeStar <= 5; makeStar++) {
    // Math.round = membulatkan bilangan
    if (makeStar <= Math.round(numberRating)) {
      ratingStars += `<span class="fa fa-star star-checked"></span>`;
    } else {
      ratingStars += `<span class="fa fa-star"></span>`;
    }
  }
  return ratingStars;
};

const createRestaurantDetailCategories = (restaurant) => {
  const dataArray = [];
  restaurant.categories.forEach((data) => {
    dataArray.push(data.name);
  });
  return dataArray;
};

const createRestaurantDetailMenus = (restaurant, menu) => {
  const data = restaurant.menus;
  let result = '';
  switch (menu) {
    case 'foods':
      const dataFoods = data.foods;
      dataFoods.forEach((food) => {
        result += `<li tabindex="0">${food.name}</li>`;
      });
      break;
    case 'drinks':
      const dataDrinks = data.drinks;
      dataDrinks.forEach((drink) => {
        result += `<li tabindex="0">${drink.name}</li>`;
      });
      break;
    default:
      return;
  }
  return result;
};

const createRestaurantDetailReviews = (restaurant) => {
  const data = restaurant.customerReviews;
  let result = '';
  data.forEach((personReview) => {
    result += `
      <div class="detail-restaurant__review__person">
        <h4 tabindex="0">${personReview.review}</h4>
        <p tabindex="0"><i class="fa fa-user"></i> ${personReview.name}, ${personReview.date}</p>
      </div>
    `;
  });
  return result;
};

const createRestaurantDetailForm = () => {
  return `
    <form method="POST" id="formReview">
      <label for="nameInput">Name</label>
      <input type="text" id="nameInput" name="nameInput" placeholder="Input Nama" aria-label="Masukkan nama anda" required>
      <label for="reviewInput">Review</label>
      <textarea name="reviewInput" id="reviewInput" rows="5" placeholder="Input Review" aria-label="Masukkan review anda" required></textarea>
      <button type="submit" id="submitReview">Kirim Review</button>
    </form>
  `;
};

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="Sukai Restoran Ini" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="Tidak Sukai Restoran Ini" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantRatingStars,
  createRestaurantDetailCategories,
  createRestaurantDetailMenus,
  createRestaurantDetailReviews,
  createRestaurantDetailForm,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
