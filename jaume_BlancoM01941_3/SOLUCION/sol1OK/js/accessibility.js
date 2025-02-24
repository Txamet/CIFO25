const d = document;
onload = d.documentElement.style.setProperty(
  "--font-size",
  `${(fontSize = 14)}`
);
const btncontrast = d.querySelector("#contrast");
const contrast = () => {
  const consta = d.querySelector("body");
  consta.classList.toggle("contraste");
};

const getFontSize = () =>
  parseFloat(
    getComputedStyle(d.documentElement).getPropertyValue("--font-size")
  );

const fontUp = (element) => {
  element.addEventListener("click", () => {
    let fontSize = getFontSize();
    fontSize >= 14 && fontSize <= 28
      ? d.documentElement.style.setProperty("--font-size", `${fontSize + 2}`)
      : null;
  });
};

const fontDown = (element) => {
  element.addEventListener("click", () => {
    let fontSize = getFontSize();
    fontSize > 16
      ? d.documentElement.style.setProperty("--font-size", `${fontSize - 2}`)
      : d.documentElement.style.setProperty(
          "--font-size",
          `${(fontSize = 15)}`
        );
  });
};

addEventListener("keyup", (e) => {
  if (e.key === "ArrowUp") d.querySelector("#font-up").click();
  if (e.key === "ArrowDown") d.querySelector("#font-down").click();
});

fontUp(d.querySelector("#font-up"));
fontDown(d.querySelector("#font-down"));

btncontrast.onclick = contrast;
