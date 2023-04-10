



let nav_toggle = document.querySelector('.nav_toggle');
let nav_toggle_icon = document.querySelector('.nav_toggle ion-icon');
let nav_menu = document.querySelector('.nav_menu');

nav_toggle.addEventListener('click', () => {
  nav_menu.classList.toggle('active');
  nav_toggle_icon.setAttribute('name',
    nav_menu.classList.contains('active') ? 'close-outline' : 'menu-outline'
  );
});


/*
This code defines the filterDisplayedProducts() function that filters the displayed products based on the search input. It also adds a click event listener to the search button, which calls the filterDisplayedProducts() function when clicked.

Note that this code assumes that you have HTML elements with the class product to represent your products, and that each product element has a child element with the class product-name that contains the product name. If your HTML is structured differently, you may need to adjust the code accordingly. */

/* HOME PAGE :: MAIN :: SLIDER FUNCTIONALITY :: JQUERY */

$(document).ready(function() 
{
  let sliderContainer = $(".slider-container");
  let sliderItems = sliderContainer.find(".slider-item");
  let sliderItemCount = sliderItems.length;
  let activeIndex = 0;
  let slideInterval = 4000; // Time between slides in milliseconds

  let leftArrow = $(".slider-arrow-left");
  let rightArrow = $(".slider-arrow-right");

  // SLIDE FUNCTIONALITY ACCORDING TO CERTAIN INDEX ARGUMENT
  function slide(index) 
  {
    // CURRENT SLIDE FUNCTION + AUTOMATIC SLIDING
    sliderItems.removeClass("active");
    $(sliderItems[index]).addClass("active");

    activeIndex = index;

    // Resetting timer
    clearInterval(slideTimer);
    slideTimer = setInterval(nextSlide, slideInterval);
  }

  let slideTimer = setInterval(nextSlide, slideInterval);

  function nextSlide() 
  {
    let nextIndex = activeIndex + 1;
    if (nextIndex >= sliderItemCount) 
    {
      nextIndex = 0;
    }
    slide(nextIndex);
  }

  function previousSlide() 
  {
    let previousIndex = activeIndex - 1;
    if (previousIndex < 0) 
    {
      previousIndex = sliderItemCount - 1;
    }
    slide(previousIndex);
  }

  leftArrow.click(function () 
  {
    previousSlide();
  });
  rightArrow.click(function () 
  {
    nextSlide();
  });
});

/************************************************************************************************************************/

/* HOME PAGE :: MAIN :: CAROUSEL FUNCTIONALITY :: JQUERY */
