function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBox(order) {
  const box = document.createElement('div');
  box.style.width = `${30 + order * 10}px`;
  box.style.height = `${30 + order * 10}px`;
  box.style.backgroundColor = getRandomHexColor();
  return box;
}

const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('div#boxes');

function createBoxes(amount) {
  const boxesArray = [];
  for (let i = 0; i < amount; i++) {
    boxesArray.push(createBox(i));
  }
  boxes.append(...boxesArray);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount > 1 || amount < 100) {
    destroyBoxes();
    createBoxes(amount);
  }
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});
