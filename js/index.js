// Your code goes here
let heading = document.querySelector(".logo-heading");
let logo = document.querySelector(".logo-heading");
let nav = document.querySelectorAll(".nav a");
let home = document.querySelector(".home");
let footer = document.querySelector(".footer");
let button = document.querySelectorAll(".btn");
let text = document.querySelector("body");

heading.addEventListener("click", (e) => {
  e.target.style.backgroundColor = "green";
});

window.addEventListener("load", () => {
  alert("Double click the Logo!!");
});

logo.addEventListener("dblclick", () => {
  alert("Calm down!! :D");
});

nav.forEach((a) => {
  a.addEventListener("mouseenter", () => {
    a.style.fontWeight = "600";
  });
});

window.addEventListener("drag", () => {
  home.style.background = "purple";
});

window.addEventListener("scroll", () => {
  footer.style.background = "orange";
});

button.forEach((btn) => {
  btn.addEventListener("wheel", () => {
    btn.style.background = "black";
  });
});

window.addEventListener("keydown", () => {
  console.log("a key was pressed!");
});

window.addEventListener("resize", (e) => {
  e.stopPropagation();
  console.log("Window size is changing!");
});

text.addEventListener("copy", (e) => {
  e.target.style.color = "yellow";
});
