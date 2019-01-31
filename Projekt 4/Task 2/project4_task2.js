//select body

var body = document.querySelector('body');

// add event listener on click

body.addEventListener('click', function (event) {
    console.log(event.clientY + ' ' + event.clientX)
    // var x = e.clientX;
    // var y = e.clientY;
    // if ((x % 2 === 0) && (y % 2 === 0)) {
    //     console.log('obie parzyste');
    //     body.style.backgroundColor = 'red';
    // } else if ((x % 2 !== 0) && (y % 2 !== 0)) {
    //     console.log('obie nieparzyste');
    //     body.style.backgroundColor = 'blue';
    // } else if ((x % 2 === 0) || (y % 2 == 0) && (x % 2 !== 0) || (y % 2 !== 0)) {
    //     console.log('jedna nieparzysta druga parzysta');
    //     body.style.backgroundColor = 'green';
    // }

    var color = getColor(event);
    console.log(color);
    document.body.style.backgroundColor = color;

});

var getColor = function (test) {

    if (test.clientX % 2 === 0) {

        if (test.clientY % 2 === 0) {
            return 'red';
        } else {
            return 'green';
        }
    } else {
        if (test.clientY % 2 === 0) {
            return 'green'
        }
        return 'blue';
    }

};