const listItems = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${listItems.length}`);

listItems.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});
