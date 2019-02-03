console.log('project ok');

var red = 100;
var green = 100;
var blue = 100;

document.body.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
console.log(document.body.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')');
var changeColor = function (e) {

    // IF
    if (e.keyCode === 40) {
        if (red >= 0) {
            red -= 2
            green -= 2
            blue -= 2
        }

    } else if (e.keyCode === 38) {
        if (red < 255) {
            red += 2
            green += 2
            blue += 2
        }

    }

    //  switch
    switch (e.keyCode) {
        case 40:
            red > 0 ? red -= 2 : red
            green > 0 ? green -= 2 : green
            blue > 0 ? blue -= 2 : blue;
            break;

        case 38:
            red < 255 ? red += 2 : red
            green < 255 ? green += 2 : green
            blue < 255 ? blue += 2 : blue;
    }

    console.log(e);
    console.log(red);
    document.body.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}


window.addEventListener('keydown', changeColor)