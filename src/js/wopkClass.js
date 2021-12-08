import { dom } from './dom'

export class WorkClass{
    position = 0;
    previous = 0;
    next = 1;
    state = {};
    isPaused = false;
    constructor(){
        this.getDogs() 
        console.log(this.state);
        this.showDogs(this.state);
    }
    async getDogs() {
        await fetch("https://dog.ceo/api/breed/hound/images/random/5")
        .then(data => data.json())
        .then(dogs => console.log(dogs))
        //console.log(dogs);
        return dogs;
    }
    showDogs(dogs) {
        this.draw(dom.galleryImg, dogs[this.position++]);
        const interval = setInterval(() => {
            //console.log(dogs);
            if (this.isPaused) {
                clearInterval(interval);
                return;
            }
            if (++this.position >= 5) this.position = 0;
            this.draw(dom.galleryImg, dogs[this.position]);
        }, 3000);
    }
    switchPauseImg(domElement) { this.isPaused ? draw(domElement, '/img/play.png') : draw(domElement, '/img/pause.png') }
    draw(element, url) { element.setAttribute('src', url) }

}

export const work = new WorkClass();