console.log('ok')

// - Stwórz rozwiązanie z pomocą dwóch funkcji w oparciu o strukturę w main.js Nie dodawaj nic więcej do zakresu globalnego.

// - funkcja init, która będzie uruchomiona po wczytaniu strony. Jej zadaniem jest:


// --- stworzyć dwa elementy
// <button>Dodaj 10 elementów listy</buttn>
// <ul></ul>
// --- dodaj je do body
// --- ustaw nasłuchiwanie na przycisk

// --- funkcja createLiElements, która będzie uruchamiana po kliknięciu przycisku stworzonego przez funkcję init. Jej zadanie to:

// --- tworzenie 10 elementów li i umieszczanie ich w elemencie ul
// --- kazdy z 10 elementów ma mieć swój indeks (order) pczy czym kolejne 10 elementów ma być konynuacją (czilu pierwszy klik mamy 1-10, kolejny 11-20 itd)
// --- każdy kolejny element il ma mieć font-size większy o 1px.

// - bez zmian w pliku html (nie dodajemy html-a i css-a). //Cały kod piszemy w elemencie main;



var size = 10
var orderOfElement = 1;

var init = function () {
    var button1 = document.createElement('button');
    button1.textContent = 'Dodaj 10 elementów listy';
    button1.style.fontSize = '25px';
    document.body.appendChild(button1);
    var uls = document.createElement('ul')
    document.body.appendChild(uls)

    var reset = document.createElement('button')
    reset.textContent = 'Reset';
    reset.style.fontSize = '20px'
    document.body.appendChild(reset);

    button1.addEventListener('click', createElement);
    reset.addEventListener('click', resetFunction);
}

//reset button 
var resetFunction = function () {
    document.querySelector('ul').textContent = '';
    orderOfElement = 1
    size = 10;
}

var createElement = function () {
    console.log('in created element')

    for (i = 1; i <= 10; i++) {
        var lis = document.createElement('li')
        lis.textContent = 'Element nr ' + orderOfElement;
        var uls = document.querySelector('ul');
        uls.appendChild(lis);
        orderOfElement++
        size++
        lis.style.fontSize = size + 'px'
    }


};




init();