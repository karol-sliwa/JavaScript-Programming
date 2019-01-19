var squere = document.createElement('div');
document.body.appendChild(squere);
var size = 100;

squere.style.width = size + 'px';
squere.style.height = size + 'px';
squere.style.backgroundColor = 'red'
//document.body.style.backgroundColor = 'blue';

//maksymalna wielkosc kwadratu
//window.innerWidht * 0.5

window.addEventListener('scroll', function () {
    size += 10;
    squere.style.width = size + 'px';
    squere.style.height = size + 'px';

})