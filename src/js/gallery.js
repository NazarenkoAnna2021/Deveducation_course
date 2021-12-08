import { dom } from './dom'
import { constants } from './constants';

export class Gallery {
    position = 0;
    previous = 0;
    next = 1;
    state = {};
    isPaused = false;

    constructor() {
        this.runGallery();
        this.setPause = this.setPause.bind(this);
        this.readKeyPress = this.readKeyPress.bind(this);
    }

    switchPauseImg = (domElement) => this.isPaused ? this.draw(domElement, constants.playIMg)
        : this.draw(domElement, constants.pauseIMG)

    draw = (element, url) => element.setAttribute(constants.src, url)

    drawPosition(num) {
        this.isPaused = true;
        this.draw(dom.galleryImg, this.state.message.message[num]);
    }

    async getDogs() {
        return fetch(constants.dogApiURL)
            .then(data => data.json())
            .then(dogs => this.state.message = dogs)
    }

    showDogs(dogs) {
        this.draw(dom.galleryImg, dogs[this.position++]);
        const interval = setInterval(() => {
            if (this.isPaused) {
                clearInterval(interval);
                return;
            }
            if (++this.position >= 5) this.position = 0;
            this.draw(dom.galleryImg, dogs[this.position]);
        }, 3000);
    }

    async runGallery() {
        await this.getDogs()
        this.showDogs(this.state.message.message);
    }

    setPause(event) {
        switch (event.target.getAttribute(constants.id)) {
            case constants.pause: this.isPaused = !this.isPaused;
                if (!this.isPaused) this.showDogs(this.state.message.message);
                break;
            case constants.prev: this.goTo(this.state.message.message, this.previous);
                break;
            case constants.next: this.goTo(this.state.message.message, this.next);
                break;
        }
        this.switchPauseImg(dom.pause);
    }

    goTo(dogs, plase) {
        this.isPaused = true;
        if (plase >= 0 && plase < 5) {
            this.calcValues(plase);
            this.draw(dom.galleryImg, dogs[this.position]);
        }
    }

    calcValues(number) {
        this.position = number;
        this.previous = this.position - 1;
        this.next = this.position + 1;
    }

    readKeyPress(event) {
        switch (event.code) {
            case constants.digit1: this.drawPosition(0);
                break;
            case constants.digit2: this.drawPosition(1);
                break;
            case constants.digit3: this.drawPosition(2);
                break;
            case constants.digit4: this.drawPosition(3);
                break;
            case constants.digit5: this.drawPosition(4);
                break;
            case constants.spase: this.isPaused = !this.isPaused;
                if (!this.isPaused) this.showDogs(this.state.message.message);
                break;
        }
        this.switchPauseImg(dom.pause);
    }
}

export const gallery = new Gallery();