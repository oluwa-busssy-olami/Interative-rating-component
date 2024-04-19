const buttons = document.querySelectorAll(".btn");
const submit_button = document.querySelector(".submit-btn");
const container = document.querySelector(".container");

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  // console.log(button);
  button.addEventListener("click", (e) => {
    const each = document.querySelector(`.btn-${button.id}`);
    // console.log(each);
    if (button) {
      // console.log(`you selected ${button.id} out of 5`);

      submit_button.addEventListener("click", (e) => {
        console.log(`you selected ${button.id} out of 5`);
      });
    }
  });
}
