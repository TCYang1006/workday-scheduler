var currentDay = document.querySelector("#currentDay"),
    timeBlock = document.querySelector('.container');

$(currentDay).text(moment().format('LLLL'));