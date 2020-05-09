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



//------- Fun Bus Pic, Double Click------
//-----------------------------------------------------
const greenBlock = document.querySelector(".intro img");
    greenBlock.addEventListener("dblclick", (event) => {
    greenBlock.src = "img/destination.jpg";
  });
//-----------------------------------------------------
//-----------------------------------------------------
