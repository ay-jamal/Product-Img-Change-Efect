const hoverImage = document.querySelectorAll(".hover-container div img");
const imgContainer = document.querySelector(".img-container");

window.addEventListener("DOMContentLoaded", () => {
  hoverImage[0].parentElement.classList.add("active");
});

hoverImage.forEach((img) => {
  img.addEventListener("click", () => {
    console.log(img.src);
    imgContainer.innerHTML = `
      <img src="${img.src}" alt="watch" />
      `;
    restActive();
    img.parentElement.classList.add("active");
  });
});

function restActive() {
  hoverImage.forEach((img) => {
    img.parentElement.classList.remove("active");
  });
}
