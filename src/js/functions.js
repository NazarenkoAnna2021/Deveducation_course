import { state } from './constants';
import { dom } from './dom';

let position = 'goTo1';
let previous = null;
let next = 'goTo2';

export async function main() {
    await getDogs();
    console.log(state.message);
    showDogs(state.message);
}

function getDogs() {
    return fetch("https://dog.ceo/api/breed/hound/images/random/36")
        .then(data => data.json())
        .then(dogs => state.message = dogs)
}

function showDogs(dogs) {
    dogs.message.forEach((element, index) => {
        const newImg = document.createElement('div');
        newImg.innerHTML = `<img src="${element}" alt="" id="${index}" class="partGaleery">`
        dom.gallery.appendChild(newImg);
    });
}

export function toClicked(event) {
    if (event.target && event.target.nodeName == "INPUT") {
        let inputname = event.target.getAttribute('class');
        if (position != inputname && inputname != 'goUp' && inputname != 'goDown') {
            calcValues(inputname);
        }
    }
}

export function goToPrevious() {
    if (parseInt(previous.replace(/\D+/g, "")) != 0) {
        calcValues(previous);
    }
}

export function goToNext() {
    if (parseInt(next.replace(/\D+/g, "")) <= 6) {
        calcValues(next);
    }
}

function calcValues(inputname) {
    dom[inputname].classList.add('clickedButt');
    dom[inputname].setAttribute('disabled', 'disabled');
    dom[position].classList.remove('clickedButt');
    dom[position].removeAttribute('disabled', 'disabled');
    position = inputname;
    const number = parseInt(inputname.replace(/\D+/g, ""));
    previous = 'goTo'.concat(number - 1);
    next = 'goTo'.concat(number + 1);
    document.getElementById(findPage(number)).scrollIntoView();
}

function findPage(number) {
    switch (number) {
        case 1: return '0';
        case 2: return '6';
        case 3: return '12';
        case 4: return '18';
        case 5: return '24';
        case 6: return '30';
        default: return null;
    }
}

export function showBigImg(event) {
    if (event.target && event.target.nodeName == "IMG") {
        let img = document.getElementById(event.target.getAttribute('id')).src;
        dom.imgdog.src = img;
        dom.imgdog.style.width = (dom.imgdog.clientWidth + 500) + "px";
        dom.imgdog.style.height = (dom.imgdog.clientHeight + 500) + "px";
        dom.big.classList.remove('hidden');
    }

}

export function closeBigDog(){
    dom.big.classList.add('hidden');
}