const incrementBtn = document.querySelector(".increment-btn");
const decrementBtn = document.querySelector(".decrement-btn");
const counter = document.querySelector(".counter");
let count = 0;

incrementBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
decrementBtn.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});
