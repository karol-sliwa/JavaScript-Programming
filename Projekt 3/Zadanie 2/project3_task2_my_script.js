console.log('ok')

// - Stwórz rozwiązanie z pomocą dwóch funkcji w oparciu o strukturę w main.js Nie dodawaj nic więcej do zakresu globalnego.

// - funkcja init, która będzie uruchomiona po wczytaniu strony. Jej zadaniem jest:


// --- stworzyć dwa elementy
// <button>Dodaj 10 elementów listy</buttn>
// <ul></ul>
// --- dodaj je do body
// --- ustaw nasłuchiwanie na przycisk

// --- funkcja createLiElements, która będzie uruchamiana po kliknięciu przycisku stworzonego przez funkcję init. Jej zadanie to:

var init = function () {
    var button = document.createElement('button');
    this.button.textContent = 'Dodaj 10 elementów listy';
    this.body.appendChild(button);
    //body.appendChild('button');
    var uls = document.createElement('ul')
    this.body.appendChild(uls)
}
init();

var createElement = function () {
    var order

    for (i = 1; i <= 10; i++) {

        var lis = document.createElement('li')
        lis.textContent = i
        document.ul.appendChild(lis);

    };


}

button.addEventListener('click', createElement);





// --- tworzenie 10 elementów li i umieszczanie ich w elemencie ul
// --- kazdy z 10 elementów ma mieć swój indeks (order) pczy czym kolejne 10 elementów ma być konynuacją (czilu pierwszy klik mamy 1-10, kolejny 11-20 itd)
// --- każdy kolejny element il ma mieć font-size większy o 1px.

// - bez zmian w pliku html (nie dodajemy html-a i css-a). Cały kod piszemy w elemencie main.js