let backBtn;
let nextBtn;
let continueBtn;

let blackBackground;
let body;

let pageNum;

const visible = "visible";
const hidden = "hidden";

const imageBackrounds = ['url("/assets/Klita/היכרות\ וקליטת\ העובד.png")' ,'url("/assets/Klita/קליטת\ העובד\ בלי\ חצים.png")','url("/assets/Klita/דור\ א\ דור\ ב.png")'];

//Onload function
window.onload = function() {
    Load();
    blackBackground.style.animation = "hideBackground 1.5s";
}

//Onload function
function Load() {
    pageNum = 0;
    body = document.getElementById("body");
    blackBackground = document.getElementById("blackBackground");

    // backBtn = document.getElementById("backBtn");
    // nextBtn = document.getElementById("nextBtn");
    // continueBtn = document.getElementById("continueBtn");
}

//Loads the next page of the section
function GoNext() {
    pageNum++;
    backBtn.style.visibility = "visible";
    if(pageNum !== 3) {
        body.style.backgroundImage = `${imageBackrounds[pageNum]}`;
        if(pageNum === 2) {
            continueBtn.style.visibility = "visible";
            nextBtn.style.visibility = "hidden";
        }
    }
    else if(sessionStorage.getItem("sectionNum") !== '2') {
        window.location.href = "/MainPage.html";
    }
    else {
        sessionStorage.setItem("sectionNum" , 3);
        window.location.href = "/MainPage.html";
    }
}

//Goes back on the pages of the sections
function GoBack() {
    pageNum--;
    body.style.backgroundImage = `${imageBackrounds[pageNum]}`;
    nextBtn.style.visibility = "visible";
    if(pageNum === 0){
        backBtn.style.visibility = "hidden";
    }
    else if(pageNum === 1) {
        continueBtn.style.visibility = "hidden";
    }
}