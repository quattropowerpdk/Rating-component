"use strict";

const firstBtn = document.querySelector(".first");
const secondBtn = document.querySelector(".second");
const thirdBtn = document.querySelector(".third");
const fourthBtn = document.querySelector(".fourth");
const fifthBtn = document.querySelector(".fifth");
const submit = document.querySelector(".submit");
const bigContainer = document.querySelector(".big_container");
const secondBigContainer = document.querySelector(".big_container2");
const selectedText = document.querySelector(".selected_p");

firstBtn.addEventListener("click", function () {
  firstBtn.classList.toggle("background_buttons");
  secondBtn.classList.remove("background_buttons");
  thirdBtn.classList.remove("background_buttons");
  fourthBtn.classList.remove("background_buttons");
  fifthBtn.classList.remove("background_buttons");
});

secondBtn.addEventListener("click", function () {
  secondBtn.classList.toggle("background_buttons");
  firstBtn.classList.remove("background_buttons");
  thirdBtn.classList.remove("background_buttons");
  fourthBtn.classList.remove("background_buttons");
  fifthBtn.classList.remove("background_buttons");
});

thirdBtn.addEventListener("click", function () {
  thirdBtn.classList.toggle("background_buttons");
  secondBtn.classList.remove("background_buttons");
  firstBtn.classList.remove("background_buttons");
  fourthBtn.classList.remove("background_buttons");
  fifthBtn.classList.remove("background_buttons");
});

fourthBtn.addEventListener("click", function () {
  fourthBtn.classList.toggle("background_buttons");
  thirdBtn.classList.remove("background_buttons");
  secondBtn.classList.remove("background_buttons");
  firstBtn.classList.remove("background_buttons");
  fifthBtn.classList.remove("background_buttons");
});

fifthBtn.addEventListener("click", function () {
  fifthBtn.classList.toggle("background_buttons");
  fourthBtn.classList.remove("background_buttons");
  thirdBtn.classList.remove("background_buttons");
  secondBtn.classList.remove("background_buttons");
  firstBtn.classList.remove("background_buttons");
});

submit.addEventListener("click", function () {
  if (
    firstBtn.classList.contains("background_buttons") ||
    secondBtn.classList.contains("background_buttons") ||
    thirdBtn.classList.contains("background_buttons") ||
    fourthBtn.classList.contains("background_buttons") ||
    fifthBtn.classList.contains("background_buttons")
  ) {
    bigContainer.classList.add("hidden");
    secondBigContainer.classList.remove("hidden");
    selectedText.textContent = `You selected ${
      firstBtn.classList.contains("background_buttons")
        ? 1
        : secondBtn.classList.contains("background_buttons")
        ? 2
        : thirdBtn.classList.contains("background_buttons")
        ? 3
        : fourthBtn.classList.contains("background_buttons")
        ? 4
        : 5
    } out of 5`;
    ("");
  }
});
