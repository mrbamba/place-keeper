'use strict'



function onShowAge(newVal) {
    document.getElementById("uAge").innerHTML = newVal;
}
function onSaveSettings() {
    event.preventDefault()
    let bgc = document.querySelector('#bgc-color').value;
    let textColor = document.querySelector('#text-color').value;
    let dob = document.querySelector('#dob').value;
    let hob = document.querySelector('#hob').value;
    let email = document.querySelector('#email').value;
    let age = document.querySelector('#age').value;
    SaveSettings(bgc, textColor, dob, hob, email, age);
}