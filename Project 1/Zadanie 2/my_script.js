var newLi = document.querySelector('button')
var selectUl = document.querySelector('ul');
var count = 1
var addLi = function () {

    //creating a li element
    var li = document.createElement('li')
    //adding the element to the ul
    selectUl.appendChild(li)
    li.textContent = count

    if (count % 3 === 0) {
        li.classList.add('big');
    }
    count++
}


newLi.addEventListener('click', addLi);