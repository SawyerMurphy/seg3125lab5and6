// functions.js was inspired by Ryan M. (https://github.com/RyanMatte/Lab5_Starter/blob/main/scripts/service.js) and edited by Sawyer M.

var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"] ;
const setDateFormat = "mm/dd/yy" ;

function disableDates(date) {
    if (date.getDay() === 1)
        return [false] ;
    var string = jQuery.datepicker.formatDate(setDateFormat, date) ;
    return [ unavailableDates.indexOf(string) === -1 ]
}

$(document).ready(function() {
    $("#dateInput").datepicker({
            dateFormat: setDateFormat,
            minDate: new Date('06/01/2021'),
            maxDate: '+4M',
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        });
});