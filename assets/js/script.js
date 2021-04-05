// Floating labels

const inputLabel = document.querySelectorAll("[data-label]");
const inputField = document.querySelectorAll("[data-input]");

class Label {
  constructor(input, field) {
    this.input = input;
    this.field = field;
    floatLabel(this);
  }
}

function floatLabel(label) {
  label.input.forEach((el) => {
    el.addEventListener("focus", (e) => {
      const labelText = e.target.offsetParent.children[0];
      labelText.classList.add("active");
      el.classList.add("active");
    });
    el.addEventListener("blur", (e) => {
      if (e.target.value != "") return;
      e.target.offsetParent.children[0].classList.remove("active");
      el.classList.remove("active");
    });
  });
}

const float = new Label(inputField, inputLabel);

// Nav On Scroll

const nav = document.querySelector("nav");

function runOnScroll() {
  const front = document.querySelector(".front");
  const top = front.getBoundingClientRect().y;

  if (top <= -450) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

window.addEventListener("scroll", runOnScroll);
