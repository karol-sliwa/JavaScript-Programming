//select body

var body = document.querySelector('body');

// add event listener on click

body.addEventListener('click', function (e) {
    console.log(e.clientY + ' ' + e.clientX)
    var x = e.clientX;
    var y = e.clientY;
    if ((x % 2 === 0) && (y % 2 === 0)) {
        console.log('obie parzyste');
        body.style.backgroundColor = 'red';
    } else if ((x % 2 !== 0) && (y % 2 !== 0)) {
        console.log('obie nieparzyste');
        body.style.backgroundColor = 'blue';
    } else if ((x % 2 === 0) || (y % 2 == 0) && (x % 2 !== 0) || (y % 2 !== 0)) {
        console.log('jedna nieparzysta druga parzysta');
        body.style.backgroundColor = 'green';
    }
});