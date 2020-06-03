'use strict'

var userData = getUserData();
let { bgc, textColor } = userData;
function onInit(){
    renderHomePageColors()

}

function renderHomePageColors() {
    let userData = getUserData();
    let { bgc, textColor } = userData;
    console.log(bgc, textColor)
    document.querySelector('.main').style.color=textColor
    document.querySelector('.main').style.backgroundColor=bgc
}


