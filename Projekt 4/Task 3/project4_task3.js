console.log('projekt ok');

var div = document.querySelector('div');
var divX = 250;
var divY = 50;

var drawActive = false;

div.style.left = divX + 'px'
div.style.top = divY + 'px'

var insertDivX;
var insertDivY;

div.addEventListener('mousedown', function (e) {
    console.log('wcisniete');
    div.style.backgroundColor = 'gray';
    drawActive = !drawActive

    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
    console.log(insertDivX, insertDivY);

})
div.addEventListener('mousemove', function (e) {

    if (drawActive) {
        divX = e.clientX;
        divY = e.clientY;
        div.style.left = divX - insertDivX + 'px'
        div.style.top = divY - insertDivY + 'px'

    }


})
div.addEventListener('mouseup', function () {
    console.log('puscilem');
    div.style.backgroundColor = 'black';
    drawActive = !drawActive
})