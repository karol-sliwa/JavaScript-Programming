console.log('ok')

document.body.addEventListener('mousemove', function (e) {
    console.log(e.clientX, e.clientY);
    var h1 = document.querySelector('h1');
    // var clientX = e.clientX.toString()
    // var clientY = e.clientY.toString()

    //from the beginning on the actual viewed page
    // h1.textContent = clientX + ', ' + clientY
    // h1.textContent = e.clientX + ', ' + e.clientY;

    //from the beginning of the page
    h1.textContent = e.pageX + ', ' + e.pageY;

});

//