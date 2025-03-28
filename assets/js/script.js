// --------------------- 0. Header --------------------- //

// ----- Menu for mobile
const menuMobileIcon = document.querySelector(".inner-menu-mobile-button");

if(menuMobileIcon)
{
   const menuMobileCloseIcon = document.querySelector(".inner-menu-mobile-button-cancel");
   const backdrop = document.querySelector(".menu-sider .inner-overlay");
   const menuSider = document.querySelector(".menu-sider");

   if(menuMobileCloseIcon && backdrop && menuSider) 
   {
      const listButtonSubMenus = menuSider.querySelectorAll("ul > li > i");
      
      menuMobileIcon.addEventListener("click", () => 
         {
            menuMobileCloseIcon.classList.add("open");
            backdrop.classList.toggle("open");
            menuSider.classList.toggle("open");
         }
      );
   
      backdrop.addEventListener("click", () => 
         {
            menuMobileCloseIcon.classList.remove("open");
            backdrop.classList.remove("open");
            menuSider.classList.remove("open");

            // also automatically close sub menu
            listButtonSubMenus.forEach((eachButton) => {
               const parentElement = eachButton.parentNode;
               parentElement.classList.remove("expand");
            });
         }
      );

      menuMobileCloseIcon.addEventListener("click", () => 
         {
            menuMobileCloseIcon.classList.remove("open");
            backdrop.classList.remove("open");
            menuSider.classList.remove("open");

            // also automatically close sub menu
            listButtonSubMenus.forEach((eachButton) => {
               const parentElement = eachButton.parentNode;
               parentElement.classList.remove("expand");
            });
         }
      );

      // Event when click a menu, it will open the sub menu      
      listButtonSubMenus.forEach((eachButton) => {
         eachButton.addEventListener("click", () => {
            const parentElement = eachButton.parentNode;
            parentElement.classList.toggle("expand");
         });
      });
   }
}
// ----- End menu for mobile

// --------------------- 0. End header --------------------- //


// --------------------- 1. index page --------------------- //

// ----- Countdown-datetime
const countdownElement = document.querySelector(".countdown-datetime");

if(countdownElement)
{
   function formatNumber(number)
   {
      return number < 10 ? "0" + number : number;
   }

   const daysElement = countdownElement.querySelector(".countdown-value[days]");
   const hoursElement = countdownElement.querySelector(".countdown-value[hours]");
   const minutesElement = countdownElement.querySelector(".countdown-value[minutes]");
   const secondsElement = countdownElement.querySelector(".countdown-value[seconds]");

   // --- Real data
   // const endValue = countdownElement.getAttribute("date-end");
   // const endDate = new Date(`${endValue}`);
   // --- End real data

   // --- Fake creating new data every day
   const now = new Date();
   const year = now.getFullYear();
   const month = now.getMonth() + 1;
   const day = now.getDate();
   const endDate = new Date(`${year}-${formatNumber(month)}-${formatNumber(day)}T23:59:59`);
   // --- End fake creating new data every day

   const counter = setInterval(() => {
      const currentTime = new Date();
      const distance = endDate - currentTime;

      const daysRemain = Math.floor( distance / (1000 * 60 * 60 * 24) );
      const hoursRemain = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
      const minutesRemain = Math.floor( (distance % (1000 * 60 * 60)) / (1000 * 60) );
      const secondsRemain = Math.floor( (distance % (1000 * 60)) / (1000) );

      if(daysElement) {
         daysElement.innerHTML = formatNumber(daysRemain);
      }

      if(hoursElement) {
         hoursElement.innerHTML = formatNumber(hoursRemain);
      }

      if(minutesElement) {
         minutesElement.innerHTML = formatNumber(minutesRemain);
      }

      if(secondsElement) {
         secondsElement.innerHTML = formatNumber(secondsRemain);
      }

      if(daysRemain == 0 && hoursRemain == 0 && minutesRemain == 0 && secondsRemain == 0) {
         clearInterval(counter);
         return;
      }
   }, 1000);
}
// ----- End countdown-datetime


// ----- Quantity emelement
const elementQuantityBannerHero = document.querySelector(".banner-hero .banner-hero-area .inner-form .inner-quantity");

if(elementQuantityBannerHero)
{
   const inputElement = elementQuantityBannerHero.querySelector(".inner-input-group .inner-input");
   const inputIconLeft = elementQuantityBannerHero.querySelector(".inner-input-group .inner-icon");
   const inputIconRight = elementQuantityBannerHero.querySelector(".inner-input-group .inner-down");

   const quantityListElement = elementQuantityBannerHero.querySelector(".inner-quantity-list");

   // Event when focusing input element, show the quantity box 
   inputElement.addEventListener("focus", () => {
      quantityListElement.classList.add("show");
   });

   // Event when fully-unfocusing the element, hide the quantity box 
   document.addEventListener("click", (event) => {
      const theClickedElement = event.target; // print out the element that is clicked
      // console.log(event.target); 

      if(elementQuantityBannerHero.contains(theClickedElement) == false)
      {
         quantityListElement.classList.remove("show");
      }
   });

   // Event when click or hold the icon, 
   // automatically focus on the input and open the quantity box 
   inputIconLeft.addEventListener("mousedown", (event) => {
      event.preventDefault(); // at the beginning, prevent the input from losing focus
      
      inputElement.focus(); // start focusing on the input tag
      quantityListElement.classList.add("show");
   });

   // Event when click or hold the icon, 
   // automatically focus on the input and open the quantity box 
   inputIconRight.addEventListener("mousedown", (event) => {
      event.preventDefault(); // at the beginning, prevent the input from losing focus

      inputElement.focus(); // start focusing on the input tag
      quantityListElement.classList.add("show");
   });

   // Function to fill the quantity result into the <input> element
   function updateQuantityInput()
   {
      const listBoxNumbers = quantityListElement.querySelectorAll(".inner-item .inner-count .inner-number");

      const listNumbers = [];
      listBoxNumbers.forEach((eachBoxNumber) => {
         const number = parseInt(eachBoxNumber.innerHTML);
         listNumbers.push(number);
      });
      
      const strValue = `NL: ${listNumbers[0]}, TE: ${listNumbers[1]}, EB: ${listNumbers[2]}`;
      inputElement.value = strValue;
   }

   // Event when click button up
   const listButtonUps = quantityListElement.querySelectorAll(".inner-item .inner-count .inner-up");
   listButtonUps.forEach((eachButton) => {
      eachButton.addEventListener("click", () => {
         const parentElement = eachButton.parentNode;
         const boxNumber = parentElement.querySelector(".inner-number");
         const number = parseInt(boxNumber.innerHTML);

         const numberUpdate = number + 1;
         boxNumber.innerHTML = numberUpdate;

         updateQuantityInput(); // fill the quantity result into the <input> element
      });
   });

   // Event when click button down
   const listButtonDowns = quantityListElement.querySelectorAll(".inner-item .inner-count .inner-down");
   listButtonDowns.forEach((eachButton) => {
      eachButton.addEventListener("click", () => {
         const parentElement = eachButton.parentNode;
         const boxNumber = parentElement.querySelector(".inner-number");
         const number = parseInt(boxNumber.innerHTML);
         
         if(number > 0) {
            const numberUpdate = number - 1;
            boxNumber.innerHTML = numberUpdate;

            updateQuantityInput(); // fill the quantity result into the <input> element
         }
      });
   });
}
// ----- End quantity emelement


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


// ----- Suggestion emelement
const elementAddressBannerHero = document.querySelector(".banner-hero .banner-hero-area .inner-form .inner-address");

if(elementAddressBannerHero)
{
   const inputElement = elementAddressBannerHero.querySelector(".inner-input-group .inner-input");
   const inputIconLeft = elementAddressBannerHero.querySelector(".inner-input-group .inner-icon");
   const inputIconRight = elementAddressBannerHero.querySelector(".inner-input-group .inner-down");

   const suggestionElement = elementAddressBannerHero.querySelector(".inner-suggest");

   // Event when focusing/unfocusing the input element, show or hide the suggestion box 
   inputElement.addEventListener("focus", () => {
      suggestionElement.classList.add("show");
   });

   inputElement.addEventListener("blur", () => {
      suggestionElement.classList.remove("show");
   });

   // Event when click or hold the icon, 
   // automatically focus on the input and open the suggestion box 
   inputIconLeft.addEventListener("mousedown", (event) => {
      event.preventDefault(); // at the beginning, prevent the input from losing focus
      
      inputElement.focus(); // start focusing on the input tag
      suggestionElement.classList.add("show");
   });

   // Event when click or hold the icon, 
   // automatically focus on the input and open the suggestion box 
   inputIconRight.addEventListener("mousedown", (event) => {
      event.preventDefault(); // at the beginning, prevent the input from losing focus

      inputElement.focus(); // start focusing on the input tag
      suggestionElement.classList.add("show");
   });

   // Event when clicking on an item
   const listSuggestItems = suggestionElement.querySelectorAll(".suggest-list .inner-item");

   listSuggestItems.forEach((eachItem) => {
      eachItem.addEventListener("mousedown", () => {
         const itemTitle = eachItem.querySelector(".inner-location").innerHTML.trim();
         inputElement.value = itemTitle;
      });
   });
}
// ----- End sugggestion element

// --------------------- 1. End index page --------------------- //


// --------------------- 2. tour-list page --------------------- //

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

// --------------------- 2. End tour-list page --------------------- //


// --------------------- 3. tour-detail page --------------------- //

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

// --------------------- 3. End tour-detail page --------------------- //


// --------------------- 4. cart page --------------------- //

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

// --------------------- 4. End cart page --------------------- //