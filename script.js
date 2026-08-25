const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
menu.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "74px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.background = "#fff";
  nav.style.padding = "20px 7%";
  nav.style.flexDirection = "column";
});

document.querySelector("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("#formMessage").textContent =
    "Thanks! This demo form is working — no message was actually sent.";
});
