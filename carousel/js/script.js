// VARIABLES
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const picture = document.querySelector(".picture");
const images = ["./img/kep (1).jpg", "./img/kep (2).jpg", "./img/kep (3).jpg", "./img/kep (4).jpg", "./img/kep (5).jpg", "./img/kep (6).jpg"];
let i = 0;

// EVENT LISTENERS
rightBtn.addEventListener("click", () => {
    i++;
    picture.src = images[i];
    console.log(i);
    if (i > images.length - 1) {
        i = 0;
        picture.src = images[i];
    }
})

leftBtn.addEventListener("click", () => {
    i--;
    picture.src = images[i];
    console.log(i);
    if (i < 0) {
        i = images.length - 1;
        picture.src = images[i];
    }
})

// TOGGLE FADE IN EFFECT 
picture.addEventListener("DOMAttrModified", function (event) {
    if (event.attrName == "src") { // Ha a source módosul, adja hozzá a fade classt
        picture.classList.add("fade");
        picture.addEventListener("webkitAnimationEnd", () => { //amint véget ér az animáció, vegye le a fade classt
            picture.classList.remove("fade");
        });
    }
});

// FUNCTIONS
window.onload = picture.src = images[i];
