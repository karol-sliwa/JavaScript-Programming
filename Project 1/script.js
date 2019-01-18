var callLang = current.caller_id.preferred_language.toString(); // Pull user prefered language and change into string value

if (callLang == "") { // Send english notification for empty prefered language setting
    answer = true;
} else if (propertyValue.indexOf(callLang) > -1) { // Do not send Notification if Other language notification has been identified from property
    answer = false;
} else { // Send english notification in all other cases
    answer = true;
}

var callerLocation = current.caller_id.location.toString();
var onBehLocaion = current.u_on_behalf_of_ref.location.toString();


if (onBehLocaion === '') {
    if (callerLocation.indexOf('Dehli') > -1) {

        current.assignment_group = '6799ad51dbfd7e001529f3571d96195a'; //ITSD IN DEL - Field Support
    } else if (callerLocation.indexOf('Chennai') > -1) {
        current.assignment_group = '2f99ad51dbfd7e001529f3571d96195c'; //ITSD IN MAA - Field Support 
    } else if (callerLocation.indexOf('Calcutta') > -1) {
        current.assignment_group = 'ef99ad51dbfd7e001529f3571d961952'; // ITSD IN CCU - Field Support
    } else if (callerLocation.indexOf('Mumbai') > -1) {
        current.assignment_group = 'ab99ad51dbfd7e001529f3571d961961'; // ITSD IN BOM - Field Support
    } else if (callerLocation.indexOf('Bangalore') > -1) {
        current.assignment_group = '2b99ad51dbfd7e001529f3571d961950'; // ITSD IN BLR - Field Support
    } else {
        current.assignment_group = '7599a951dbfd7e001529f3571d961975' // ITSD IN - Service Desk
    }

}

if (onBehLocaion !== '') {
    if (onBehLocaion.indexOf('Dehli') > -1) {

        current.assignment_group = '6799ad51dbfd7e001529f3571d96195a'; //ITSD IN DEL - Field Support
    } else if (onBehLocaion.indexOf('Chennai') > -1) {
        current.assignment_group = '2f99ad51dbfd7e001529f3571d96195c'; //ITSD IN MAA - Field Support 
    } else if (onBehLocaion.indexOf('Calcutta') > -1) {
        current.assignment_group = 'ef99ad51dbfd7e001529f3571d961952'; // ITSD IN CCU - Field Support
    } else if (onBehLocaion.indexOf('Mumbai') > -1) {
        current.assignment_group = 'ab99ad51dbfd7e001529f3571d961961'; // ITSD IN BOM - Field Support
    } else if (onBehLocaion.indexOf('Bangalore') > -1) {
        current.assignment_group = '2b99ad51dbfd7e001529f3571d961950'; // ITSD IN BLR - Field Support
    } else {
        current.assignment_group = '7599a951dbfd7e001529f3571d961975' // ITSD IN - Service Desk
    }

}