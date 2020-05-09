// Your code goes here
//------- Fun Bus Logo, Mouse Enter & Mouse Leave------
//-----------------------------------------------------
const funBusLogo = document.querySelector(".logo-heading");
funBusLogo.addEventListener("mouseover", (event) => {
    funBusLogo.textContent = "BUS FUN";
    funBusLogo.style.transition = "all 0.3s";
   });
   funBusLogo.addEventListener("mouseleave", (event) => {
    funBusLogo.textContent = "Fun Bus";
    funBusLogo.style.transition = "all 0.3s";
   });
   //--------------------------------------------------
//-----------------------------------------------------


const bottomPage = document.querySelector("body");
bottomPage.addEventListener("keydown", (event) => {
    bottomPage
    bottomPage.style.transition = "all 0.3s";
   });