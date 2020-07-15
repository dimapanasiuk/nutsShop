let addPopToHtml = (htmlCollection, content) => {

    //get language
    const language = document.body.getAttribute('id');

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


export { addPopToHtml };