const noBtn = document.querySelector('.noBTN');
const yesBtn = document.querySelector('.yesBTN');

noBtn.addEventListener('mouseover', () => {

 noBtn.style.left = Math.random() * 250 + "px";
 noBtn.style.top = Math.random() *  250 + "px";

 console.log("hover");

if (yesBtn.offsetHeight <= 200 && yesBtn.offsetWidth <= 200) {
    yesBtn.style.height = yesBtn.offsetHeight + 25 + "px";
    yesBtn.style.width = yesBtn.offsetWidth + 50 + "px";
}
 
});

