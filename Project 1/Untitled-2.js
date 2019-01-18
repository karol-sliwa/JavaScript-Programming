var callerLocation = current.caller_id.location.getDisplayValue();
var onBehLocaion = current.u_on_behalf_of_ref.location.getDisplayValue();




if (onBehLocaion != '') {
    if (onBehLocaion.indexOf('Dehli') > -1) {

        current.assignment_group = '6799ad51dbfd7e001529f3571d96195a'; //ITSD IN DEL - Field Support
        current.short_description = "Service Request for " + current.caller_id.name + ' ' + onBehLocaion + ' pierwszy if';

    }

} else {

    current.assignment_group = '7599a951dbfd7e001529f3571d961975'; // ITSD IN - Service Desk
    current.short_description = "Service Request for " + current.caller_id.name + ' ' + onBehLocaion + ' else ';

}


current.description = producer.request_description;