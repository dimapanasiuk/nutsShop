import {
    delivery,
    productionAria,
    production,
    quality,
    laboratory,
    productContent
} from "./popupContent.mjs";

const categoriesContent = [
    productionAria,
    production,
    delivery,
    quality,
    laboratory
];

const productsContent = [productContent, productContent, productContent, productContent];

const products = document.querySelectorAll('.our-products');

const worksItems = document.querySelectorAll('.product-images');

//get language
const language = document.body.getAttribute('id');



let addPopToHtml = (htmlCollection, content) => {

    //pop up elements with then we work
    const popupWrapper = document.querySelector(".custom-model-main");
    const popupContent = document.querySelector(".pop-up-content");
    const closeButton = document.querySelector(".close-btn");



    htmlCollection.forEach((item, i) => {
        item.addEventListener('click', () => {
            popupWrapper.classList.add("model-open");
            popupContent.innerHTML = content[i][language];
        })
    })

    closeButton.addEventListener('click', () => {
        popupWrapper.classList.remove("model-open");
    })
}

addPopToHtml(worksItems, categoriesContent);
addPopToHtml(products, productsContent);