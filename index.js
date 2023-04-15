let nav_toggle = document.querySelector(".nav_toggle");
let nav_toggle_icon = document.querySelector(".nav_toggle ion-icon");
let nav_menu = document.querySelector(".nav_menu");

nav_toggle.addEventListener("click", () => {
  nav_menu.classList.toggle("active");
  nav_toggle_icon.setAttribute(
    "name",
    nav_menu.classList.contains("active") ? "close-outline" : "menu-outline"
  );
});

/*
This code defines the filterDisplayedProducts() function that filters the displayed products based on the search input. It also adds a click event listener to the search button, which calls the filterDisplayedProducts() function when clicked.

Note that this code assumes that you have HTML elements with the class product to represent your products, and that each product element has a child element with the class product-name that contains the product name. If your HTML is structured differently, you may need to adjust the code accordingly. */

/* HOME PAGE :: MAIN :: SLIDER FUNCTIONALITY :: JQUERY */

$(document).ready(function () {
  let sliderContainer = $(".slider-container");
  let sliderItems = sliderContainer.find(".slider-item");
  let sliderItemCount = sliderItems.length;
  let activeIndex = 0;
  let slideInterval = 4000; // Time between slides in milliseconds

  let leftArrow = $(".slider-arrow-left");
  let rightArrow = $(".slider-arrow-right");

  // SLIDE FUNCTIONALITY ACCORDING TO CERTAIN INDEX ARGUMENT
  function slide(index) {
    // CURRENT SLIDE FUNCTION + AUTOMATIC SLIDING
    sliderItems.removeClass("active");
    $(sliderItems[index]).addClass("active");

    activeIndex = index;

    // Resetting timer
    clearInterval(slideTimer);
    slideTimer = setInterval(nextSlide, slideInterval);
  }

  let slideTimer = setInterval(nextSlide, slideInterval);

  function nextSlide() {
    let nextIndex = activeIndex + 1;
    if (nextIndex >= sliderItemCount) {
      nextIndex = 0;
    }
    slide(nextIndex);
  }

  function previousSlide() {
    let previousIndex = activeIndex - 1;
    if (previousIndex < 0) {
      previousIndex = sliderItemCount - 1;
    }
    slide(previousIndex);
  }

  leftArrow.click(function () {
    previousSlide();
  });
  rightArrow.click(function () {
    nextSlide();
  });
});

/************************************************************************************************************************/

/* HOME PAGE :: MAIN :: CAROUSEL FUNCTIONALITY :: JQUERY */
let filter_btn = document.querySelectorAll(".filter-btn");
let tab_items = document.querySelectorAll(".tab-item");

for (let i = 0; i < filter_btn.length; i++) {
  filter_btn[i].addEventListener("click", function () {
    for (let j = 0; j < filter_btn.length; j++) {
      filter_btn[j].classList.remove("active");
    }
    let select_tab = filter_btn[i].getAttribute("data-tab");
    filter_btn[i].classList.add("active");
    for (let t = 0; t < tab_items.length; t++) {
      document.querySelector(".tab-filter-item-container").style.height =
        tab_items[t].scrollHeight + "px";
      if (tab_items[t].classList.contains(select_tab)) {
        tab_items[t].classList.add("select_tab");
      } else {
        tab_items[t].classList.remove("select_tab");
      }
    }
  });
}

for (let th = 0; th < tab_items.length; th++) {
  document.querySelector(".tab-filter-item-container").style.height =
    tab_items[th].scrollHeight + "px";
}

let back_to_top = document.querySelector(".back_to_top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    back_to_top.classList.add("show");
  } else {
    back_to_top.classList.remove("show");
  }
});
back_to_top.addEventListener("click", function (e) {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
