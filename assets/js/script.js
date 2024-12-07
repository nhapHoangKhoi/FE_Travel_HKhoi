// ----- Box filter
const boxFilter = document.querySelector(".box-filter");

if(boxFilter)
{
   const inputNumberLabels = boxFilter.querySelectorAll("[input-number-element]");

   if(inputNumberLabels.length > 0)
   {
      inputNumberLabels.forEach((inputNumberLabel) => 
         {
            const buttonUp = inputNumberLabel.querySelector(".button-up");
            const buttonDown = inputNumberLabel.querySelector(".button-down");
      
            const inputNumberElement = inputNumberLabel.querySelector("input[type='number']");
            let initialValue = parseInt(inputNumberElement.value);
            const minValue = parseInt(inputNumberElement.min);
            const maxValue = parseInt(inputNumberElement.max);
            
            // --- can only check for the very first time render
            if(initialValue <= minValue)
            {
               buttonDown.classList.add("disabled");
            }
            else if(initialValue >= maxValue)
            {
               buttonUp.classList.add("disabled");
            }
            // --- End can only check for the very first time render
      
            buttonUp.addEventListener("click", () => {
               let currentValue = parseInt(inputNumberElement.value);
               currentValue = currentValue + 1;
               inputNumberElement.value = Math.min(maxValue, currentValue); // ensure the new value does not exceed max value
               
               buttonDown.classList.remove("disabled");
      
               if(inputNumberElement.value >= maxValue)
               {
                  buttonUp.classList.add("disabled");
               }
            });
      
            buttonDown.addEventListener("click", () => {
               let currentValue = parseInt(inputNumberElement.value);
               currentValue = currentValue - 1;
               inputNumberElement.value = Math.max(minValue, currentValue); // ensure the new value does not go below min value
      
               buttonUp.classList.remove("disabled");
      
               if(inputNumberElement.value <= minValue)
               {
                  buttonDown.classList.add("disabled");
               }
            });
      
            // --- when user type directly in the <input> instead of clicking buttons
            inputNumberElement.addEventListener("input", () => {
               let newValue = parseInt(inputNumberElement.value);
         
               if(newValue <= minValue) {
                  inputNumberElement.value = minValue; // automatically reset to min
                  buttonDown.classList.add("disabled");
               }
               else {
                  buttonDown.classList.remove("disabled");
               }
      
               if(newValue >= maxValue) {
                  inputNumberElement.value = maxValue; // automatically reset to max
                  buttonUp.classList.add("disabled");
               }
               else {
                  buttonUp.classList.remove("disabled");
               }
            });
      
            inputNumberElement.addEventListener("blur", () => {
               let newValue = parseInt(inputNumberElement.value);
      
               if(!newValue) {
                  inputNumberElement.value = minValue;
                  buttonDown.classList.add("disabled");
                  return;
               }
            });
            // --- End when user type directly in the <input> instead of clicking buttons
         }
      );
   }
}
// ----- End box filter


// ----- Box tour detail
const boxTourDetail = document.querySelector(".box-tour-detail");

if(boxTourDetail)
{
   const inputNumberLabels = boxTourDetail.querySelectorAll("[input-number-element]");

   if(inputNumberLabels.length > 0)
   {
      inputNumberLabels.forEach((inputNumberLabel) => 
         {
            const buttonUp = inputNumberLabel.querySelector(".button-up");
            const buttonDown = inputNumberLabel.querySelector(".button-down");
      
            const inputNumberElement = inputNumberLabel.querySelector("input[type='number']");
            let initialValue = parseInt(inputNumberElement.value);
            const minValue = parseInt(inputNumberElement.min);
            const maxValue = parseInt(inputNumberElement.max);

            const spanQuantityElement = inputNumberLabel.querySelector(".inner-item-price span[quantity]");
            spanQuantityElement.textContent = initialValue;
            
            // --- can only check for the very first time render
            if(initialValue <= minValue)
            {
               buttonDown.classList.add("disabled");
            }
            else if(initialValue >= maxValue)
            {
               buttonUp.classList.add("disabled");
            }
            // --- End can only check for the very first time render
      
            buttonUp.addEventListener("click", () => {
               let currentValue = parseInt(inputNumberElement.value);
               currentValue = currentValue + 1;
               inputNumberElement.value = Math.min(maxValue, currentValue); // ensure the new value does not exceed max value
               
               buttonDown.classList.remove("disabled");
      
               if(inputNumberElement.value >= maxValue)
               {
                  buttonUp.classList.add("disabled");
               }

               spanQuantityElement.textContent = inputNumberElement.value; // update new number for <span>
            });
      
            buttonDown.addEventListener("click", () => {
               let currentValue = parseInt(inputNumberElement.value);
               currentValue = currentValue - 1;
               inputNumberElement.value = Math.max(minValue, currentValue); // ensure the new value does not go below min value
      
               buttonUp.classList.remove("disabled");
      
               if(inputNumberElement.value <= minValue)
               {
                  buttonDown.classList.add("disabled");
               }

               spanQuantityElement.textContent = inputNumberElement.value; // update new number for <span>
            });
      
            // --- when user type directly in the <input> instead of clicking buttons
            inputNumberElement.addEventListener("input", () => {
               let newValue = parseInt(inputNumberElement.value);
               spanQuantityElement.textContent = inputNumberElement.value;
         
               if(newValue <= minValue) {
                  inputNumberElement.value = minValue; // automatically reset to min
                  spanQuantityElement.textContent = inputNumberElement.value;
                  buttonDown.classList.add("disabled");
               }
               else {
                  buttonDown.classList.remove("disabled");
               }
      
               if(newValue >= maxValue) {
                  inputNumberElement.value = maxValue; // automatically reset to max
                  spanQuantityElement.textContent = inputNumberElement.value;
                  buttonUp.classList.add("disabled");
               }
               else {
                  buttonUp.classList.remove("disabled");
               }
            });
      
            inputNumberElement.addEventListener("blur", () => {
               let newValue = parseInt(inputNumberElement.value);
      
               if(!newValue) {
                  inputNumberElement.value = minValue;
                  spanQuantityElement.textContent = inputNumberElement.value;
                  buttonDown.classList.add("disabled");
                  return;
               }
            });
            // --- End when user type directly in the <input> instead of clicking buttons
         }
      );
   }
}
// ----- End tour detail


// ----- Form search
const formSearch = document.querySelector("form[form-search]");

if(formSearch)
{
   const inputGroup = formSearch.querySelector(".inner-input-group");
   const inputElement = inputGroup.querySelector(".inner-input");
   const suggestionElement = formSearch.querySelector(".inner-suggest");

   inputElement.addEventListener("focus", () => {
      suggestionElement.classList.add("show");
   });

   inputElement.addEventListener("blur", () => {
      suggestionElement.classList.remove("show");
   });
}
// ----- End form search


// ----- Tour promotion swiper
const tourPromotions = document.querySelector(".tour-promotions");

if(tourPromotions)
{
   const myButtonPrev = document.querySelector(".section-promotion .inner-right-group .inner-previous-button");
   const swiperButtonPrev = tourPromotions.querySelector(".swiper-button-prev");
   const myButtonNext = document.querySelector(".section-promotion .inner-right-group .inner-next-button");
   const swiperButtonNext = tourPromotions.querySelector(".swiper-button-next");

   myButtonPrev.addEventListener("click", () => {
      swiperButtonPrev.click();
   });

   myButtonNext.addEventListener("click", () => {
      swiperButtonNext.click();
   });

   const swiper = new Swiper(".tour-promotions", {
      slidesPerView: 1,
      spaceBetween: 0,
      rewind: true,
      autoplay: {
         // delay: 2500,
         delay: 1500,
         disableOnInteraction: false,
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      breakpoints: {
         // when window width is >= 576px
         576: {
            slidesPerView: 1,
            spaceBetween: 0
         },
         // when window width is >= 992px
         992: {
            slidesPerView: 2,
            spaceBetween: 20
         },
         // when window width is >= 1200px
         1200: {
            slidesPerView: 3,
            spaceBetween: 20,
         },
      }
   });
}
// ----- End tour promotion swiper


// ----- Tour discount swiper
const tourImages = document.querySelector(".tour-images");

if(tourImages)
{
   const swiper = new Swiper(".tour-images", {
      slidesPerView: 1,
      spaceBetween: 0,
      rewind: true,
      autoplay: {
         // delay: 2500,
         delay: 1500,
         disableOnInteraction: false,
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      breakpoints: {
         // when window width is >= 576px
         576: {
            slidesPerView: 2,
            spaceBetween: 20
         },
         // when window width is >= 768px
         768: {
            slidesPerView: 3,
            spaceBetween: 20
         },
         // // when window width is >= 1200px
         // 1200: {
         //    slidesPerView: 3,
         //    spaceBetween: 20,
         // },
      }
   });
}
// ----- End tour discount swiper


// ----- Tour list in cart
const sectionCart = document.querySelector(".section-cart");

if(sectionCart)
{
   const inputNumberLabels = sectionCart.querySelectorAll("[input-number-element]");

   if(inputNumberLabels.length > 0)
   {
      inputNumberLabels.forEach((inputNumberLabel) => 
         {
            const buttonUp = inputNumberLabel.querySelector(".button-up");
            const buttonDown = inputNumberLabel.querySelector(".button-down");
      
            const inputNumberElement = inputNumberLabel.querySelector("input[type='number']");
            let initialValue = parseInt(inputNumberElement.value);
            const minValue = parseInt(inputNumberElement.min);
            const maxValue = parseInt(inputNumberElement.max);

            const spanQuantityElement = inputNumberLabel.querySelector(".inner-item-price span[quantity]");
            spanQuantityElement.textContent = initialValue;
            
            // --- can only check for the very first time render
            if(initialValue <= minValue)
            {
               buttonDown.classList.add("disabled");
            }
            else if(initialValue >= maxValue)
            {
               buttonUp.classList.add("disabled");
            }
            // --- End can only check for the very first time render
      
            buttonUp.addEventListener("click", () => {
               let currentValue = parseInt(inputNumberElement.value);
               currentValue = currentValue + 1;
               inputNumberElement.value = Math.min(maxValue, currentValue); // ensure the new value does not exceed max value
               
               buttonDown.classList.remove("disabled");
      
               if(inputNumberElement.value >= maxValue)
               {
                  buttonUp.classList.add("disabled");
               }

               spanQuantityElement.textContent = inputNumberElement.value; // update new number for <span>
            });
      
            buttonDown.addEventListener("click", () => {
               let currentValue = parseInt(inputNumberElement.value);
               currentValue = currentValue - 1;
               inputNumberElement.value = Math.max(minValue, currentValue); // ensure the new value does not go below min value
      
               buttonUp.classList.remove("disabled");
      
               if(inputNumberElement.value <= minValue)
               {
                  buttonDown.classList.add("disabled");
               }

               spanQuantityElement.textContent = inputNumberElement.value; // update new number for <span>
            });
      
            // --- when user type directly in the <input> instead of clicking buttons
            inputNumberElement.addEventListener("input", () => {
               let newValue = parseInt(inputNumberElement.value);
               spanQuantityElement.textContent = inputNumberElement.value;
         
               if(newValue <= minValue) {
                  inputNumberElement.value = minValue; // automatically reset to min
                  spanQuantityElement.textContent = inputNumberElement.value;
                  buttonDown.classList.add("disabled");
               }
               else {
                  buttonDown.classList.remove("disabled");
               }
      
               if(newValue >= maxValue) {
                  inputNumberElement.value = maxValue; // automatically reset to max
                  spanQuantityElement.textContent = inputNumberElement.value;
                  buttonUp.classList.add("disabled");
               }
               else {
                  buttonUp.classList.remove("disabled");
               }
            });
      
            inputNumberElement.addEventListener("blur", () => {
               let newValue = parseInt(inputNumberElement.value);
      
               if(!newValue) {
                  inputNumberElement.value = minValue;
                  spanQuantityElement.textContent = inputNumberElement.value;
                  buttonDown.classList.add("disabled");
                  return;
               }
            });
            // --- End when user type directly in the <input> instead of clicking buttons
         }
      );
   }
}
// ----- End tour list in cart


// ----- Tour detail images swiper
const tourMainImages = document.querySelector(".box-images .tour-images-main");
const tourImagesSmallSlide = document.querySelector(".box-images .tour-images-small-slide");

if(tourMainImages && tourImagesSmallSlide)
{
   const swiperSmall = new Swiper(".tour-images-small-slide", {
      spaceBetween: 20,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
   });

   const swiperLarge = new Swiper(".tour-images-main", {
      slidesPerView: 1,
      spaceBetween: 30,
      rewind: true,
      autoplay: {
         // delay: 2500,
         delay: 1500,
         disableOnInteraction: false,
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      thumbs: {
         swiper: swiperSmall,
      }
   });
}
// ----- End Tour detail images swiper