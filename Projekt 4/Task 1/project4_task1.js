console.log('ok')

//selecting the h1 tag

var h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', function (e) {
    console.log(e.clientX, e.clientY);

    //from the beginning on the actual viewed page
    // h1.textContent = clientX + ', ' + clientY
    // h1.textContent = e.clientX + ', ' + e.clientY;

    //changing text content of the h1 tag
    //counted from the beginning of the page, when the scroll is on the top
    //
    var x = e.clientX;
    var y = e.clientY;
    var width = window.innerWidth;
    var height = window.innerHeight;

    var red = x / width * 100; //100%
    var green = y / height * 100;
    var blue = ((x / width * 100) + (y / height * 100)) / 2;


    h1.textContent = e.pageX + ' , ' + e.pageY;
    document.body.style.backgroundColor = 'rgb(' + red + '% ,' + green + '% ,' + blue + '% )';

    console.log(document.body.style.backgroundColor = 'rgb(' + red + '% , ' + green + '% , ' + blue + '% )')

    // + '(' + e.pageX + ', ' + e.pageY + ' ,' + ((e.clientX / e.clientY) * 20) + ')');

});