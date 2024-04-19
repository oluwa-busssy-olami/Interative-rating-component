const buttons = document.querySelectorAll(".btn");
const submit_button = document.querySelector(".submit-btn");
const container = document.querySelector(".container");
const rating_container = document.querySelector(".rating-container");
const thank_container = document.querySelector(".thank-you-container");
const thanks_button = document.querySelector(".thanks-btn");
const selected_rating = document.querySelector(".selected-rating");

submit_button.addEventListener("click", (e) => {
    thank_container.classList.remove("hidden");
    rating_container.style.display = "none";
});

thanks_button.addEventListener("click", (e) => {
    thank_container.classList.add("hidden");

    rating_container.style.display = "block";
});

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    // console.log(button);
    button.addEventListener("click", (e) => {
        selected_rating.innerHTML = button.innerHTML;
        //console.log(button.textContent);
    });
}