console.log('ok')

var squere = document.createElement('div');
document.body.appendChild(squere);
var a = '100px'
var squereSize = 10;
squere.style.height = squereSize + 'px';
squere.style.width = squereSize + 'px';

squere.style.backgroundColor = 'red';
document.body.style.backgroundColor = 'grey'
var grow = true;

//console.log(grow);

window.addEventListener('scroll', function () {
    //jezeli squerSize jest wieksze niz polowa strony ustaw false i przejdz dalej
    if (squereSize > window.innerWidth / 2) {
        grow = false;
        console.log('jestem w pierwszym ifie');
        // squereSize += 50
        // squere.style.width = squereSize + 'px';
        // squere.style.height = squereSize + 'px';
        //jezeli wielkosc squerSize dojdzie do zera zmien wartosc grow z false na true
    } else if (squereSize === 0) {
        grow = true;

    }
    //jezeli grow rowne true (czyli ==0) zacznij zwiekszac
    if (grow === true) {
        console.log('jestem w drugim ifie')
        squereSize += 5
        squere.style.width = squereSize + 'px';
        squere.style.height = squereSize + 'px';

        //jezeli false (czyli wieksze niz polowa strony) zacznij zmniejszac
    } else {
        squereSize -= 5;
        squere.style.width = squereSize + 'px';
        squere.style.height = squereSize + 'px';
    }



});

// width: 100px;
// height: 100px;