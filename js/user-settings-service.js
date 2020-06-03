'use strict'

var gUserData = {
    bgc: "#a8d0e6",
    textColor: "#24305e",
    dob:null,
    hob:null,
    email:null,
    age:null
}

function SaveSettings(bgc,textColor,dob,hob,email,age) {
    let userData={
        bgc,
        textColor,
        dob,
        hob,
        email,
        age
    }
    gUserData=userData;
    saveToStorage('userData', gUserData)
    // renderHomePageColors()
}

function getUserData(){
    let userData=loadFromStorage('userData')
    return userData;
}
