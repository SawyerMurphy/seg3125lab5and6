// The function "disableDates(date)" was inspired by Ryan M. (https://github.com/RyanMatte/Lab5_Starter/blob/main/scripts/service.js) and edited by Sawyer M.

var unavailableDates = ["29/06/2020","07/07/2020","10/07/2020"] ;
const setDateFormat = "dd/mm/yy" ;

function disableDates(date) {
    if (date.getDay() === 1)
        return [false] ;
    var string = jQuery.datepicker.formatDate(setDateFormat, date) ;
    return [ unavailableDates.indexOf(string) === -1 ]
}

$(document).ready(function() {
    $("#dateInput").datepicker({
            dateFormat: setDateFormat,
            minDate: new Date('01/06/2021'),
            maxDate: '+4M',
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        });
});

// The below function "cardNoValidator" was inspired by this site: https://www.w3resource.com/javascript/form/credit-card-validation.php and edited by Sawyer M.

function cardNoValidator(cardNo) {
    var cardNoLayout = /^(?:[0-9]{16})$/ ;

    if(cardNoLayout.test(cardNo)) {
        return true ;
    } else {
        window.alert('The Credit Card Number Entered is Invalid, Please Check for Mistakes.\nThe Required Format is: xxxx-xxxx-xxxx-xxxx') ;
        return false ;
    }
}

// The below function "emailValidator" was inspired by this site: https://www.w3resource.com/javascript/form/credit-card-validation.php and edited by Sawyer M.
// The regular expression "emailAddressLayout" is found at: https://emailregex.com/

function emailValidator(emailAddress) {
    var emailAddressLayout = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;

    if(emailAddressLayout.test(emailAddress)) {
        return true ;
    } else {
        window.alert('The Email Address Entered is Invalid, Please Check for Mistakes.') ;
        return false ;
    }
}

function cvvValidator(cvv) {

    var cvvLayout = /^[0-9]{3}$/ ;

    console.log(cvv) ;

    if(cvvLayout.test(cvv)) {
        return true ;
    } else {
        window.alert('The CVV Entered is Invalid, Please Check for Mistakes.\nThe Required Format is: xxx') ;
    }

}