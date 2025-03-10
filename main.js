// PROCEDURAL PROGRAMMING PORTFOLIO

vivaldiIMG = document.getElementById("vivaldi");
operatorsIMG = document.getElementById("operators");
vivaldiCounter = 0;
operatorsCounter = 0;

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


diceIMG = document.getElementById("dice");
degrees = 0;
diceInterval = setInterval(rotateDice, 50);

// Dice Rotation
function rotateDice() {
    degrees += 10;
    diceIMG.style.transform = `rotate(${degrees}deg)`;
}