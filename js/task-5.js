function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('button.change-color');
const span = document.querySelector('span.color');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.style.color = color;
  span.textContent = color;
});
