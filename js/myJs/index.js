import {
    delivery,
    productionAria,
    production,
    quality,
    laboratory,
} from "./popupContent.mjs";

const categoriesContent = [
    productionAria,
    production,
    delivery,
    quality,
    laboratory
]

const products = document.querySelectorAll('.product-images');

//get language
const language = document.body.getAttribute('id');

//pop up elements
const popupWrapper = document.querySelector(".custom-model-main");
const popupContent = document.querySelector(".pop-up-content");
const closeButton = document.querySelector(".close-btn");

products.forEach((item, i) => {
    item.addEventListener('click', () => {
        popupWrapper.classList.add("model-open");
        popupContent.innerHTML = categoriesContent[i][language];
    })
})

closeButton.addEventListener('click', () => {
    popupWrapper.classList.remove("model-open");
})