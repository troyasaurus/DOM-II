
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



//-----------Body Color Change on click----------------
//-----------------------------------------------------
const body = document.querySelector("body");
body.addEventListener("click", () => {
  body.style.backgroundColor="green";
});
const navColor = document.querySelector("header");
navColor.addEventListener("click", () => {
  navColor.style.backgroundColor="seagreen";
  navColor.style.color="white";
});
//-----------------------------------------------------
//-----------------------------------------------------




//-----------------Resize Changes Image----------------
//-----------------------------------------------------
const imgSize = document.querySelector(".content-section img")
window.addEventListener("resize", () => {
    imgSize.src = "img/fun.jpg"
});
//-----------------------------------------------------
//-----------------------------------------------------




//---------------------Scroll--------------------------
//-----------------------------------------------------
window.addEventListener("scroll", () => {
    const scrolled = window.scrollY; 

    console.log(scrolled);
});
//-----------------------------------------------------
//-----------------------------------------------------



//--------------------For Each-------------------------
//-----------------------------------------------------

const navFontColor = document.querySelectorAll(".nav-link");
navFontColor.forEach(title => {
    title.addEventListener('click', (event) => {
        event.target.style.color = 'white';
    });
});

//-----------------------------------------------------
//-----------------------------------------------------