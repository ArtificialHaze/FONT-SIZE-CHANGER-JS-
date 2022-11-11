document.addEventListener("DOMContentLoaded", () => {
  const smallFont = document.querySelector("#small");
  smallFont.addEventListener("click", (e) => {
    e.preventDefault();
    const h1 = document.querySelector("h1");
    const h2 = document.querySelector("h2");
    const p = document.querySelector("p");
    h1.style.fontSize = "24px";
    h2.style.fontSize = "16px";
    p.style.fontSize = "12px";
    smallFont.classList.toggle("active");
    mediumFont.classList.remove("active");
    largeFont.classList.remove("active");
    maximumFontSize.classList.remove("active");
  });

  const mediumFont = document.querySelector("#medium");
  mediumFont.addEventListener("click", (e) => {
    e.preventDefault();
    const h1 = document.querySelector("h1");
    const h2 = document.querySelector("h2");
    const p = document.querySelector("p");
    h1.style.fontSize = "36px";
    h2.style.fontSize = "24px";
    p.style.fontSize = "14px";
    smallFont.classList.remove("active");
    mediumFont.classList.toggle("active");
    largeFont.classList.remove("active");
    maximumFontSize.classList.remove("active");
  });

  const largeFont = document.querySelector("#large");
  largeFont.addEventListener("click", (e) => {
    e.preventDefault();
    const h1 = document.querySelector("h1");
    const h2 = document.querySelector("h2");
    const p = document.querySelector("p");
    h1.style.fontSize = "48px";
    h2.style.fontSize = "30px";
    p.style.fontSize = "16px";
    smallFont.classList.remove("active");
    mediumFont.classList.remove("active");
    largeFont.classList.toggle("active");
    maximumFontSize.classList.remove("active");
  });

  const maximumFontSize = document.querySelector("#maximum");
  maximumFontSize.addEventListener("click", (e) => {
    e.preventDefault();
    const h1 = document.querySelector("h1");
    const h2 = document.querySelector("h2");
    const p = document.querySelector("p");
    h1.style.fontSize = "56px";
    h2.style.fontSize = "42px";
    p.style.fontSize = "24px";
    smallFont.classList.remove("active");
    mediumFont.classList.remove("active");
    largeFont.classList.remove("active");
    maximumFontSize.classList.toggle("active");
  });
});
