$(document).ready(function () {
    var currentHour = moment().hour();
    var timeBlocks = $(".time-block");
    //     for (var i = 0; i < timeBlocks.length; i++) {
    $(timeBlocks).each(function () {
        var timeBlock = $(this);
        var timeBlockId = timeBlock.attr('id');
        var hour = parseInt(timeBlockId.split('-')[1])
        if (hour < currentHour) {
            timeBlock.addClass(past)
        } else if (hour === currentHour) {
            timeBlock.addClass(present)
        } else {
            timeBlock.addClass(future)
        }

    })
});
