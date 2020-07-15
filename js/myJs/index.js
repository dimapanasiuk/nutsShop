import {
    delivery,
    productionAria,
    production,
    quality,
    laboratory,
    productContent
} from "./popupContent.mjs";

import { addPopToHtml } from "./utils.mjs"

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



addPopToHtml(worksItems, categoriesContent);
addPopToHtml(products, productsContent);