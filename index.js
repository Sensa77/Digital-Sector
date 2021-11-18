const buttonSelect = document.querySelector(".buttons__list");
const list = document.querySelector(".buttons__list-container");

buttonSelect.addEventListener("click", () => {
  list.classList.toggle("show");
});

list.addEventListener("click", (event) => {
  // тебе нужно узнать куда ты кликнула, у этого элемента получить data-size и посдтавить эту букву в buttons__list
  event.stopPropagation();
  console.log();
  list.classList.toggle("show");
});
