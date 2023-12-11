const ratingContainer = document.querySelector(".submit-rating");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".score");

submitButton.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden");
  ratingContainer.style.display = "none";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
