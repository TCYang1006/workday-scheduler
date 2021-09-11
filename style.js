var currentDay = document.querySelector("#currentDay"),
    message9El = document.querySelector("#message9"),
    message9,
    messageArray = [],
    nineBtn = document.querySelector("#nine"),
    currentHour = moment().hour();

$(currentDay).text(moment().format('LLLL'));

//make this run continously in background to check if past, present or future
setInterval(function () {
    timeStatus();
    loadMessages();
}, 356 * 24 * 60 * 60)

function timeStatus() {
    var taskArea;

    for (let i = 9; i < 18; i++) {
        //assign ID to taskArea
        taskArea = ("#message" + i);
        console.log(taskArea);
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

function recordMessage() {
    message9 = message9El.value;
    
        localStorage.setItem("saved-message9", JSON.stringify(message9));
    
}

function loadMessages(){
var localMessage;

for (let index = 9; index < 18; index++) {
    localMessage = ("saved-message"+index);
    if (localStorage.getItem(localMessage)===null){
        //if localStorage is empty do nothing
        console.log("nothing");
    }else{
        //if localStorage is filled put it out on correct time message
        console.log("something");
        message9El.value = JSON.parse(localStorage.getItem(localMessage));
    }
    
}

}

nineBtn.addEventListener('click', recordMessage);
timeStatus();