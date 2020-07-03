import {
  firstCategoryContent,
  secondCateContent,
  thirdCategoryContent,
  fourthCategoryContent,
  fifthCategoryContent,
} from "./popupContent.mjs";

const content = {
  "category-first": firstCategoryContent,
  "category-second": secondCateContent,
  "category-third": thirdCategoryContent,
  "category-fourth": fourthCategoryContent,
  "category-fifth": fifthCategoryContent,
};

const popupWrapper = $(".custom-model-main");
const popupContent = $(".pop-up-content");

$(".pop-up-click").on("click", (e) => {
  const contentKeys = Object.keys(content);

  popupWrapper.addClass("model-open");
  contentKeys.forEach((i) => {
    if (e.target.id === i) {
      popupContent.append(content[i]);
    }
  });
});
$(".close-btn, .bg-overlay").click(function () {
  $(".custom-model-main").removeClass("model-open");
  $("#content").remove();
});
