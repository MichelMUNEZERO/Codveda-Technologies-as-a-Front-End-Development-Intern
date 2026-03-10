const wrapper = document.querySelector(".wrapper");
const loginLink = wrapper.querySelector(".login-link");
const registerLink = wrapper.querySelector(".register-link");
const btnPopup = wrapper.querySelector(".btnLogin-popup");
const iconClose = wrapper.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
