let rightButton;
let wrongButton;
let body;
let questionNum = 0;
let trueAnswer;
let falseAnswer;
let continueBtn;

let firstAnswer;
let secondAnswer;
let thirdAnswer;
let fourthAnswer;

const backgroundImages = ['url("../assets/Exercise/שאלה\ 1\ הקדמה.png")', 'url("../assets/Exercise/שאלה\ אמריקאית\ 1.png")', 'url("../assets/Exercise/שאלה\ 1\ הקדמה.png")'];
const allAnswers = ["right", "1"];


window.onload = function() {
    Load();
    sessionStorage.setItem("questionNum", 0);
}

//Loads all the variables
function Load() {
    rightButton = document.getElementById("rightButton");
    wrongButton = document.getElementById("wrongButton");

    body = document.getElementById("body");
    continueBtn = document.getElementById("continueBtn");

    trueAnswer = document.getElementById("trueAnswer");
    falseAnswer = document.getElementById("falseAnswer");

    firstAnswer = document.getElementById("firstAnswer");
    secondAnswer = document.getElementById("secondAnswer");
    thirdAnswer = document.getElementById("thirdAnswer");
    fourthAnswer = document.getElementById("fourthAnswer");
};

//Check if the answer is right or wrong
function CheckAnswer(whatChose) {
    if(whatChose === allAnswers[questionNum]) {
        rightButton.style.visibility = "hidden";
        wrongButton.style.visibility = "hidden";
        trueAnswer.style.visibility = "visible";
        continueBtn.style.visibility = "visible";
    }
    else {
        rightButton.style.visibility = "hidden";
        wrongButton.style.visibility = "hidden";
        falseAnswer.style.visibility = "visible";
        continueBtn.style.visibility = "visible";
    }
};

function GoNextQuestion() {
    sessionStorage.setItem("questionNum", parseInt(sessionStorage.getItem("questionNum")) + 1 );
    console.log(sessionStorage.getItem("questionNum"));
    switch(sessionStorage.getItem("questionNum")) {
        case "2":
            window.location.href = "../MainPage.html";
            break;
        case "5":
            window.location.href = "../MainPage.html";
            break;
        case "9":
            window.location.href = "../MainPage.html";
            break;
        case "10":
            window.location.href = "../MainPage.html";
            break;
        case "15":
            window.location.href = "../MainPage.html";
            break;
        default:
            body.style.backgroundImage = backgroundImages[sessionStorage.getItem("questionNum")];
            if(backgroundImages[sessionStorage.getItem("questionNum")].includes('אמריקאית')) {
                SetAmericanPage();
            }
            else {
                SetPage();
            }
            break;
    }
}

function SetAmericanPage() {
    continueBtn.style.visibility = "hidden";
    rightButton.style.visibility = "hidden";
    wrongButton.style.visibility = "hidden";
    falseAnswer.style.visibility = "hidden";
    trueAnswer.style.visibility = "hidden";

    firstAnswer.style.visibility = "visible";
    secondAnswer.style.visibility = "visible";
    thirdAnswer.style.visibility = "visible";
    fourthAnswer.style.visibility = "visible";
}

function SetPage() {
    continueBtn.style.visibility = "hidden";
    rightButton.style.visibility = "visible";
    wrongButton.style.visibility = "visible";
    falseAnswer.style.visibility = "hidden";
    trueAnswer.style.visibility = "hidden";

    firstAnswer.style.visibility = "hidden";
    secondAnswer.style.visibility = "hidden";
    thirdAnswer.style.visibility = "hidden";
    fourthAnswer.style.visibility = "hidden";
}

function CheckAmericanAnswer(whatChose) {
    if(whatChose === allAnswers[sessionStorage.getItem("questionNum")]) {
        ArrangeAnswers();
        continueBtn.style.visibility = "visible";
    }
    else {
        ArrangeAnswers();
        continueBtn.style.visibility = "visible";
    }
};

function ArrangeAnswers() {
    firstAnswer.disabled = "true";
    secondAnswer.disabled = "true";
    thirdAnswer.disabled = "true";
    fourthAnswer.disabled = "true";

    firstAnswer.style.cursor = "auto";
    secondAnswer.style.cursor = "auto";
    thirdAnswer.style.cursor = "auto";
    fourthAnswer.style.cursor = "auto";

    firstAnswer.style.opacity = "0.25";
    secondAnswer.style.opacity = "0.25";
    thirdAnswer.style.opacity = "0.25";
    fourthAnswer.style.opacity = "0.25";

    firstAnswer.style.backgroundColor = "red";
    secondAnswer.style.backgroundColor = "red";
    thirdAnswer.style.backgroundColor = "red";
    fourthAnswer.style.backgroundColor = "red";

    switch(allAnswers[sessionStorage.getItem("questionNum")]) {
        case "1":
            firstAnswer.style.backgroundColor = "green";
            break;
        case "2":
            secondAnswer.style.backgroundColor = "green";
            break;
        case "3":
            thirdAnswer.style.backgroundColor = "green";
            break;
        case "4":
            fourthAnswer.style.backgroundColor = "green";
            break;
    }
}