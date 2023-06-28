const menuBtn = document.querySelector("#Menu");
const links = document.querySelector("#links");

menuBtn.addEventListener("click", () => {
  links.classList.toggle("active");
});
