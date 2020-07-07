import {
  firstCategoryContent,
  secondCateContent,
  thirdCategoryContent,
  fourthCategoryContent,
  fifthCategoryContent,
  productContent,
  productContentOne,
} from "./popupContent.mjs";

const categoryContent = {
  "category-first": firstCategoryContent,
  "category-second": secondCateContent,
  "category-third": thirdCategoryContent,
  "category-fourth": fourthCategoryContent,
  "category-fifth": fifthCategoryContent,
};

const productsId = [
  "product-one",
  "product-two",
  "product-three",
  "product-four",
];

const popupWrapper = $(".custom-model-main");
const popupContent = $(".pop-up-content");

$(".pop-up-click").on("click", (e) => {
  const contentKeys = Object.keys(categoryContent);

  popupWrapper.addClass("model-open");

  contentKeys.forEach((i) => {
    if (e.target.id === i) {
      popupContent.append(categoryContent[i]);
    }
  });
  productsId.forEach((i) => {
    if (e.target.id === i) {
      popupContent.append(productContent(productContentOne));
    }
  });
});
$(".close-btn, .bg-overlay").click(function () {
  $(".custom-model-main").removeClass("model-open");
  $("#content").remove();
});
