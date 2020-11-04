//Function for working calendar
$(document).ready(function(){
    var currentHour = moment().hour();
    //Current day displayed using moment.js
    var today = moment().format('MMMM Do YYYY');
    $("#currentDay").text(today);
    var timeBlocks = $(".time-block");
    $(".saveBtn").on("click", function(){
        var textArea = $(this).siblings(".description").val();
        var hour = $(this).parent().attr('id');
        localStorage.setItem(hour, textArea);

    });
//code to distinguish via different colors the hours of the day as current/ past/ present
    $(timeBlocks).each(function(){
        var timeBlock = $(this);
        var timeBlockId = timeBlock.attr('id');
        var hour = parseInt(timeBlockId.split('-')[1]);
        if (hour < currentHour) {
            timeBlock.addClass("past");
        } else if (hour === currentHour) {
            timeBlock.addClass("present");
        } else {
            timeBlock.addClass("future");
        }

    });
// Local storage set up for each hour's textbox to display anything saved in each hour box.
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

});

