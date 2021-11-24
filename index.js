const buttonSelect = document.querySelector(".buttons__list");
const buttonTitle = document.querySelector(".buttons__title");
const list = document.querySelector(".buttons__list-container");
const sliderList = document.querySelector(".slider__list");
const sliderSwitches = document.querySelector(".slider__switches");
const dots = document.querySelectorAll(".slider__switch");
const mini = document.querySelectorAll(".slider__item");

buttonSelect.addEventListener("click", () => {
  list.classList.toggle("buttons__list-container--show");
});

list.addEventListener("click", (event) => {
  event.stopPropagation();
  const size = event.target;
  const dataSize = size.dataset.size;
  buttonTitle.innerHTML = `Размер: ${dataSize}`;
  list.classList.remove("buttons__list-container--show");
});

sliderList.addEventListener(
  "mouseover",
  (event) => {
    const target =
      event.target.tagName === "LI" ? event.target : event.target.closest("LI");
    if (target) {
      mini.forEach((elem) => {
        elem.classList.remove("slider__item--active");
      });
      const idx = target.dataset.id;
      mini[idx].classList.add("slider__item--active");
      $(".slider__photo").slick("slickGoTo", idx);
    }
  },
  { capture: true }
);

$(".slider__photo").on(
  "swipe",
  function (event, slick, currentSlide, nextSlide) {
    mini.forEach((elem) => {
      elem.classList.remove("slider__item--active");
    });
    mini[slick.currentSlide].classList.add("slider__item--active");
  }
);

sliderSwitches.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "LI") {
    dots.forEach((elem) => {
      elem.classList.remove("slider__switch--active");
    });
    target.classList.add("slider__switch--active");
    const idx = target.dataset.id;
    $(".slider__photo").slick("slickGoTo", idx);
  }
});

$(".slider__photo").on(
  "afterChange",
  function (event, slick, currentSlide, nextSlide) {
    dots.forEach((elem) => {
      elem.classList.remove("slider__switch--active");
    });
    dots[currentSlide].classList.add("slider__switch--active");
  }
);

$(document).ready(function () {
  $(".slider__photo").slick({
    arrows: false,
  });
});
