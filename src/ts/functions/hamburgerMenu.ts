export function hamburgerBar() {
  let hamburger = document.querySelector(".hamburgerMenu");
  let navBar = document.querySelector(".navBar");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
  });

  document.querySelectorAll(".navBar").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navBar.classList.remove("active");
    })
  );
}
