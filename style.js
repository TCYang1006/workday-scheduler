var currentDay = document.querySelector("#currentDay"),
    message9El = document.querySelector("#message9"),
    message9,
    nineBtn = document.querySelector("#nine"),
    message10El = document.querySelector("#message10"),
    message10,
    tenBtn = document.querySelector("#ten"),
    message11El = document.querySelector("#message11"),
    message11,
    elevenBtn = document.querySelector("#eleven"),
    message12El = document.querySelector("#message12"),
    message12,
    twelveBtn = document.querySelector("#twelve"),
    message13El = document.querySelector("#message13"),
    message13,
    thirteenBtn = document.querySelector("#thirteen"),
    message14El = document.querySelector("#message14"),
    message14,
    fourteenBtn = document.querySelector("#fourteen"),
    message15El = document.querySelector("#message15"),
    message15,
    fifteenBtn = document.querySelector("#fifteen"),
    message16El = document.querySelector("#message16"),
    message16,
    sixteenBtn = document.querySelector("#sixteen"),

    message17El = document.querySelector("#message17"),
    message17,
    seventeenBtn = document.querySelector("#seventeen"),
    localMessage,
    elementMessage,
    currentHour = moment().hour();

$(currentDay).text(moment().format('LLLL'));

//make this run continously in background to check if past, present or future
setInterval(function () {
    timeStatus();
}, 356 * 24 * 60 * 60)

function timeStatus() {
    var taskArea;

    for (let i = 9; i < 18; i++) {
        //assign ID to taskArea
        taskArea = ("#message" + i);
        if (currentHour > i) {
            //add class past inorder to change color
            $(taskArea).addClass("past");
        } else if (currentHour === i) {
            //add class present inorder to change color
            $(taskArea).addClass("present");
        } else {
            //add class future inorder to change color
            $(taskArea).addClass("future");
        }
    }

}

function recordMessage9() {
    message9 = message9El.value;
        localStorage.setItem("saved-message9", JSON.stringify(message9));
}
function recordMessage10() {  
    message10 = message10El.value;
        localStorage.setItem("saved-message10", JSON.stringify(message10));  
}
function recordMessage11() {  
    message11 = message11El.value;
        localStorage.setItem("saved-message11", JSON.stringify(message11));
}
function recordMessage12() {            
    message12 = message12El.value;
        localStorage.setItem("saved-message12", JSON.stringify(message12));
}
function recordMessage13() {    
    message13 = message13El.value;
        localStorage.setItem("saved-message13", JSON.stringify(message13));    
}
function recordMessage14() {                
    message14 = message14El.value;
        localStorage.setItem("saved-message14", JSON.stringify(message14));    
}
function recordMessage15() {        
    message15 = message15El.value;
        localStorage.setItem("saved-message15", JSON.stringify(message15));    
}
function recordMessage16() {        
    message16 = message16El.value;
        localStorage.setItem("saved-message16", JSON.stringify(message16));    
}
function recordMessage17() {        
    message17 = message17El.value;
        localStorage.setItem("saved-message17", JSON.stringify(message17));    
}

function loadMessages(){


for (let index = 9; index < 18; index++) {
    localMessage = "saved-message"+index;elementMessage = ("message"+index+"El.value");
    if (localStorage.getItem(localMessage)===null){
        //if localStorage is empty do nothing
        console.log("nothing");
    }else{
        //if localStorage is filled put it out on correct time message

        elementMessage = (JSON.parse(localStorage.getItem(localMessage)));

        // console.log(elementMessage);
        // console.log(localMessage);
        // elementMessage.value = (JSON.parse(localStorage.getItem(localMessage)));
        // console.log(JSON.parse(localStorage.getItem(localMessage)));
    }   
}
}
window.onload = loadMessages();
nineBtn.addEventListener('click', recordMessage9);
tenBtn.addEventListener('click', recordMessage10);
elevenBtn.addEventListener('click', recordMessage11);
twelveBtn.addEventListener('click', recordMessage12);
thirteenBtn.addEventListener('click', recordMessage13);
fourteenBtn.addEventListener('click', recordMessage14);
fifteenBtn.addEventListener('click', recordMessage15);
sixteenBtn.addEventListener('click', recordMessage16);
seventeenBtn.addEventListener('click', recordMessage17);
timeStatus();