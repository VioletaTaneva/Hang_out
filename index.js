const noBtn = document.querySelector('.noBTN');
const yesBtn = document.querySelector('.yesBTN');
const content = document.querySelector('.content');

 const min = - content.offsetHeight/3;
 const max = content.offsetHeight/3;

// const containgerHeight = content.offsetHeight;
// const containerWidth = content.offsetWidth;

// const btnWidth = noBtn.offsetWidth;
// const btnHeight = noBtn.offsetHeight;

// const maxX = containerWidth - btnWidth;
// const maxY = containgerHeight - btnHeight;

// randomX = Math.random() * maxX;
// randomY = Math.random() * maxY;


function randomNumber() {
    var number = Math.random() * (max - min) + min;

    // while (number > content.offsetHeight/2 &&  number > content.offsetWidth/2) {
    //     number = Math.random() * (max - min) + min;
    // }

    return number;
}   
    

noBtn.addEventListener('mouseover', () => {

//  noBtn.style.left = Math.random() * 250 + "px";
//  noBtn.style.top = Math.random() *  250 + "px";

  noBtn.style.top =  Math.ceil(randomNumber())  + "px";
  noBtn.style.left = Math.ceil(randomNumber()) + "px";

    // noBtn.style.top = Math.random() * maxY + "px";
    // noBtn.style.left = Math.random() * maxX + "px";

// noBtn.style.top = randomY + "px";
// noBtn.style.left = randomX + "px";


console.log(noBtn.style.top, "top");
console.log(noBtn.style.left, "left");

 if (yesBtn.offsetHeight <= 500 && yesBtn.offsetWidth <= 500) {
    yesBtn.style.height = yesBtn.offsetHeight + 25 + "px";
    yesBtn.style.width = yesBtn.offsetWidth + 50 + "px";
 }
 
});

