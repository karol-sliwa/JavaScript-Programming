//console.log('moj ok projekt 2');
document.body.style.height = 10000;

var div2 = document.createElement('div');

// function addEl1() {
document.body.appendChild(div2);

var divHeight = 100;

//div preferences 
document.body.style.height = 10000 + 'px';
div2.style.width = 100 + '%';
div2.style.height = divHeight + 'px';
div2.style.position = 'fixed';
div2.style.left = '0';
div2.style.top = '0';
div2.style.backgroundColor = 'green';
var divFlag = true;

// checking the flag
function changeHeight() {
    if (divHeight > window.innerHeight / 2) {
        divFlag = !divFlag
        div2.style.backgroundColor = 'red';

    } else if (divHeight === 0) {
        divFlag = !divFlag;
        div2.style.backgroundColor = 'green';
    }

    // increasing Heigh if flag == true
    if (divFlag) {
        divHeight += 5;

        //decreasing Heigh if the flag === false
    } else {
        divHeight -= 5;


    }

    div2.style.height = divHeight + 'px';
}
window.addEventListener('scroll', changeHeight);