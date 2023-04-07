$(document).ready(function() {
  // Set up slider
  var sliderContainer = $(".slider-container");
  var sliderItems = sliderContainer.find(".slider-item");
  var sliderItemCount = sliderItems.length;
  var activeIndex = 0;
  var slideInterval = 5000; // Time between slides in milliseconds

  // Set up arrows
  var leftArrow = $(".slider-arrow-left");
  var rightArrow = $(".slider-arrow-right");

  // Set up slide function
  function slide(index) {
    // Update active item
    sliderItems.removeClass("active");
    $(sliderItems[index]).addClass("active");

    // Update active index
    activeIndex = index;

    // Reset timer
    clearInterval(slideTimer);
    slideTimer = setInterval(nextSlide, slideInterval);
  }

  // Set up timer
  var slideTimer = setInterval(nextSlide, slideInterval);

  // Set up next slide function
  function nextSlide() {
    var nextIndex = activeIndex + 1;
    if (nextIndex >= sliderItemCount) {
      nextIndex = 0;
    }
    slide(nextIndex);
  }

  // Set up previous slide function
  function previousSlide() {
    var previousIndex = activeIndex - 1;
    if (previousIndex < 0) {
      previousIndex = sliderItemCount - 1;
    }
    slide(previousIndex);
  }

  // Set up arrow click events
  leftArrow.click(function() {
    previousSlide();
  });
  rightArrow.click(function() {
    nextSlide();
  });
});
