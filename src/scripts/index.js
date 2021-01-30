import "regenerator-runtime"; /* for async await transpile */
import "../styles/style.css";

const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");
const main = document.querySelector("main");
const restaurantContainer = document.querySelector(".restaurant-container");

fetch("DATA.json")
  .then((res) => res.json())
  .then((data) => {
    const restaurants = data.restaurants;
    restaurants.forEach((items) => {
      let ratingStars = "";
      for (let i = 1; i <= 5; i++) {
        if (i <= Math.round(items.rating)) {
          ratingStars += `<span class="fa fa-star star-checked"></span>`;
        } else {
          ratingStars += `<span class="fa fa-star"></span>`;
        }
      }
      let restaurantComponents = `
        <div class="restaurant-item">
          <img src="${items.pictureId}" alt="Gambar Restaurant ${items.name}" tabindex="0">
          <div class="restaurant-item__name">
            <p class="restaurant-name" tabindex="0">${items.name}</p>
            <p class="restaurant-city" tabindex="0">${items.city}</p>
              <div class="restaurant-rating" tabindex="0">
                <p class="restaurant-rating__numbers">${items.rating}</p>
                <div class="restaurant-rating__stars">
                  ${ratingStars}
                </div>
              </div>
          </div>
          <div class="restaurant-item__desc" tabindex="0">
            <p class="restaurant-desc">${items.description}</p>
          </div>
        </div>`;
      restaurantContainer.innerHTML += restaurantComponents;
    });

    const restaurantDesc = document.querySelectorAll(".restaurant-desc");
    restaurantDesc.forEach((e) => {
      e.addEventListener("click", function () {
        e.classList.toggle("show-restaurant-desc");
      });
    });
  });

toggleButton.addEventListener("click", function () {
  navbarLinks.classList.toggle("active");
  event.stopPropagation();
});

main.addEventListener("click", function () {
  navbarLinks.classList.remove("active");
});
