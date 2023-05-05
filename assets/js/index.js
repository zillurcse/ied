const hero_1 = document.querySelector('.hero_1');
const hero_2 = document.querySelector('.hero_2');
const hero_3 = document.querySelector('.hero_3');

const hero_1_overlayh2 = document.querySelector('.hero_1_overlayh2');
const hero_1_overlayButton = document.querySelector('.hero_1_overlayButton');
const hero_1_overlay = document.querySelector('.hero_1_overlay');
const hero_1_btn = document.querySelector('.hero_1_btn');
const hero_1_p = document.querySelector('.hero_1_p');
const hero_1_h2 = document.querySelector('.hero_1_h2');

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
hero_2.addEventListener('mouseover', () => {
    hero_1.style.width = '40%';
    hero_1.style.clipPath = 'polygon(0% 0, 80% 0, 65% 100%, 0% 101%)';
    hero_1.style.transitionDuration = '.8s';
    hero_2.style.transitionDuration = '.6s';
    hero_1_overlayh2.style.transform = "translateX(" + (0) + "px) translateY(" + (0) + "px) ";
    hero_1_overlayButton.style.transform = "translateX(" + (0) + "px) translateY(" + (0) + "px) ";
    hero_1_overlay.style.opacity = "1"
    hero_1_overlay.style.visibility = "visible"
    hero_1_h2.style.opacity = "0"
    hero_1_p.style.opacity = "0"
    hero_1_btn.style.opacity = "0"
});

hero_2.addEventListener('mouseout', () => {
    hero_1.style.width = '50%';
    hero_1.style.clipPath = 'polygon(0% 0, 100% 0, 89% 100%, -1% 101%)';
    hero_1.style.transitionDuration = '.5s'
    hero_2.style.transitionDuration = '.8s'
    hero_1_overlayh2.style.transform = "translateX(" + (213) + "px) translateY(" + (61) + "px) ";
    hero_1_overlayButton.style.transform = "translateX(" + (249) + "px) translateY(" + (125) + "px) ";
    hero_1_overlay.style.opacity = "0"
    hero_1_overlay.style.visibility = "hidden"
    hero_1_h2.style.opacity = "1"
    hero_1_p.style.opacity = "1"
    hero_1_btn.style.opacity = "1"
});
hero_3.addEventListener('mouseover', () => {
    hero_1.style.width = '36%';

    hero_3.style.clipPath = 'polygon(24% 0, 100% 0, 100% 100%, 12% 100%)';

    hero_1.style.transitionDuration = '.8s';
    hero_2.style.transitionDuration = '.6s';
    hero_1_overlayh2.style.transform = "translateX(" + (0) + "px) translateY(" + (0) + "px) ";
    hero_1_overlayButton.style.transform = "translateX(" + (0) + "px) translateY(" + (0) + "px) ";
    hero_1_overlay.style.opacity = "1"
    hero_1_overlay.style.visibility = "visible"
    hero_1_h2.style.opacity = "0"
    hero_1_p.style.opacity = "0"
    hero_1_btn.style.opacity = "0"
});

hero_3.addEventListener('mouseout', () => {
    hero_1.style.width = '50%';
    hero_3.style.clipPath = 'polygon(30% 0, 100% 0, 100% 100%, 12% 100%)';

    hero_1.style.transitionDuration = '.5s'
    hero_2.style.transitionDuration = '.8s'
    hero_1_overlayh2.style.transform = "translateX(" + (213) + "px) translateY(" + (61) + "px) ";
    hero_1_overlayButton.style.transform = "translateX(" + (249) + "px) translateY(" + (125) + "px) ";
    hero_1_overlay.style.opacity = "0"
    hero_1_overlay.style.visibility = "hidden"
    hero_1_h2.style.opacity = "1"
    hero_1_p.style.opacity = "1"
    hero_1_btn.style.opacity = "1"
});

