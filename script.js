

const gift = document.getElementById("gift");
const blast = document.getElementById("blast");
const message = document.getElementById("message");


let opened = false;



gift.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    gift.classList.add("open");

    setTimeout(() => {
        blast.classList.add("show");
    }, 500);

    
    setTimeout(() => {
        message.classList.add("show");
    }, 1600);

});


// ===============================
// Mobile Touch Support
// ===============================

gift.addEventListener("touchstart", () => {

    if (opened) return;

    opened = true;

    gift.classList.add("open");

    setTimeout(() => {
        blast.classList.add("show");
    }, 500);

    setTimeout(() => {
        message.classList.add("show");
    }, 1600);

});