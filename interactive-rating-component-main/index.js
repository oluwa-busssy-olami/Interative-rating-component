const buttons = document.querySelectorAll(".btn");
const submit_button = document.querySelector(".submit-btn");
const container = document.querySelector(".container");
const rating_container = document.querySelector(".rating-container");
const thank_container = document.querySelector(".thank-you-container");
const thanks_button = document.querySelector(".thanks-btn");
const selected_rating = document.querySelector(".selected-rating");

// //adding an event listener to the submit button

submit_button.addEventListener("click", (e) => {
  thank_container.classList.remove("hidden");
  rating_container.style.display = "none";
});

//adding an event listener to the thanks button

thanks_button.addEventListener("click", (e) => {
  thank_container.classList.add("hidden");

  rating_container.style.display = "block";
});

// loop through the buttons and when a button is clicked insert it to the element with the class of selected-rating

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  // console.log(button);
  button.addEventListener("click", (e) => {
    selected_rating.innerHTML = `you selected ${button.innerHTML} out of 5`;
  });
}
