const searchIn = document.querySelector('.search_in_wrapper');
const searchInDropdown = document.querySelector('.search_in_dropdown');

searchIn.addEventListener("click", () => {
    searchInDropdown.classList.toggle('d-block');

})
const hambarger_menu = document.querySelector(".hambarger_menu");
const responsive_links = document.querySelector(".responsive_links")
const hambarger_cross = document.querySelector(".hambarger_cross")
hambarger_menu.addEventListener("click", () => {
    responsive_links.style.transform = " translateX(" + (0) + "px)";
    responsive_links.style.opacity = "1"
    responsive_links.style.visibility = "visible"

})


hambarger_cross.addEventListener("click", () => {
    responsive_links.style.transform = " translateX(" + (-500) + "px)";
    responsive_links.style.opacity = "0"
    responsive_links.style.visibility = "hidden"

})

const allCategoriesLists = document.querySelector('.all_categories_lists');
const categoriesWrapper = document.querySelector('.categories_wrapper');
categoriesWrapper.addEventListener('click', () => {
    allCategoriesLists.classList.toggle('d-block');
})