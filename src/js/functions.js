import { state } from './constants';
import { dom } from './dom';

let position = 0;
let previous = -1;
let next = 1;
let isPaused = false;

export async function main() {
    await getDogs();
    console.log(state.message);
    showDogs(state.message);
}

function getDogs() {
    return fetch("https://dog.ceo/api/breed/hound/images/random/5")
        .then(data => data.json())
        .then(dogs => state.message = dogs)
}

function drawDog(url) {
    dom.galleryImg.setAttribute('src', url)
}

function showDogs(dogs) {
    const interval = setInterval(() => {
        drawDog(dogs[position])
        if(isPaused) clearInterval(() => (clearInterval(interval)));
         if(++position > 5)  position = 0;        
    }, 5000);
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
    position = parseInt(inputname.replace(/\D+/g, ""));
    previous = position - 1;
    next = position + 1;
}

function findPage(number) {
    switch (number) {
        case 1: return '0';
        case 2: return '1';
        case 3: return '2';
        case 4: return '3';
        case 5: return '4';
        default: return null;
    }
}