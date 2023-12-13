let itemSlide = 2;      // set the number of content slide at one click

const slider = document.querySelector('.slider');
let currentIndex = 0;
let translateValue = 0;
let sliderlength = slider.scrollWidth;
let containerlength = document.querySelector(".slide-container").clientWidth;
let restlength = sliderlength - containerlength;
let availableSlideLength = 0;
let itemLength =  document.querySelector(".slider-item").clientWidth + 4;
if (currentIndex = 0) {
    document.querySelector(".slide-prev").style.display = "none";
}
function nextSlide() {
    currentIndex++;
    translateValue = currentIndex * itemLength * itemSlide;
    availableSlideLength = restlength - translateValue;
    slider.style.transform = `translateX(${-translateValue}px)`;
    document.querySelector(".slide-prev").style.display = "flex";
    if (availableSlideLength < itemLength) {
        document.querySelector(".slide-next").style.display = "none";
        return;
    }
}
function prevSlide() {
    translateValue = (currentIndex - 1) * itemLength * itemSlide;
    availableSlideLength = restlength - translateValue;
    if (availableSlideLength > restlength) {
        return;
    }
    document.querySelector(".slide-next").style.display = "flex";
    slider.style.transform = `translateX(${-translateValue}px)`;
    currentIndex--;
    if (currentIndex == 0) {
        document.querySelector(".slide-prev").style.display = "none";
    }
}