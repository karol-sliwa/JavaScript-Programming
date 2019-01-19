//====== PROJEKT 3 =========

// for loop
console.log('projekt 3 zadanie')
var button = document.querySelector('button');
var allLis = document.querySelectorAll('li')
var fontSize = 10

var changeLi = function () {

    for (var i = 0; i < allLis.length; i++) {
        allLis[i].style.display = 'block';
        allLis[i].style.fontSize = fontSize + 'px';

    }
    fontSize += 1;
}

button.addEventListener('click', changeLi);


// forEach  ========================

console.log('projekt 3 zadanie')

var button = document.querySelector('button');
var allLis = document.querySelectorAll('li')
var fontSize = 10


var changeLi = function () {


    allLis.forEach(function (element) {
        console.log(element);
        element.style.display = 'block';
        element.style.fontSize = fontSize + 'px';
    })
    fontSize += 1;
}

button.addEventListener('click', changeLi);