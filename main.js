// PROCEDURAL PROGRAMMING PORTFOLIO

let vivaldiIMG = document.getElementById("vivaldi");
let operatorsIMG = document.getElementById("operators");
let vivaldiCounter = 0;
let operatorsCounter = 0;

// Intervals for Vivaldi and Operators
swapVivaldiImageInterval = setInterval(function() {
    swapImage(vivaldiCounter, vivaldiIMG, "images/summer.jpg", "images/autumn.jpg", "images/winter.jpg", "images/spring.jpg")
    if(vivaldiCounter == 3) {
        vivaldiCounter = 0;
    } else {
        vivaldiCounter++;
    }
}, 800);
swapOperatorsImageInterval = setInterval(function() {
    swapImage(operatorsCounter, operatorsIMG, "images/add-operator.jpg", "images/divide-operator.jpg", "images/multiply-operator.jpg", "images/equal-operator.jpg")
    if(operatorsCounter == 3) {
        operatorsCounter = 0;
    } else {
        operatorsCounter++;
    }
}, 500);


function swapImage(counter, element, img1, img2, img3, img4) {
    switch(counter) {
        case 0:
            element.src = img1;
            break;
        case 1:
            element.src = img2;
            break;
        case 2:
            element.src = img3;
            break;
        case 3:
            element.src = img4
    }
}


let diceIMG = document.getElementById("dice");
let degrees = 0;
let diceInterval = setInterval(rotateDice, 50);

// Dice Rotation
function rotateDice() {
    degrees += 10;
    diceIMG.style.transform = `rotate(${degrees}deg)`;
}


// KFP slideshow
let kfpInterval = setInterval(swapKFP, 1000);
let kfpIMG = document.getElementById("kfp")
let characters = ['tigress', 'po']
let charCounter = 1;

function swapKFP() {
    kfpIMG.src = `images/${characters[charCounter]}.png`
    charCounter++
    if (charCounter >= 2) {
        charCounter = 0;
    }
}
