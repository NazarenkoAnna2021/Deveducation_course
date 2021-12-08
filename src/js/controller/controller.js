import { dom } from '../dom'
import { Model } from '../model/model'
import { View } from '../veiw/view'

class Controller {
    position = 0;
    previous = 0;
    next = 1;
    isPaused = false;
    constructor() {
        this.model = new Model(this.getDogs());
        this.view = new View();
        this.setPause = this.setPause.bind(this);
        this.readKeyPress = this.readKeyPress.bind(this);
    }
    setPause(event) {
        switch (event.target.getAttribute('id')) {
            case 'pause': this.isPaused = !this.isPaused;
                if (!this.isPaused) this.view.showDogs(dom.galleryImg, this.model.state.message, this.position);
                break;
            case 'prev': this.isPaused = true;
                this.goToPrevious(this.model.state.message);
                break;
            case 'next': this.isPaused = true;
                this.goToNext(this.model.state.message);
                break;
        }
        this.viewswitchPauseImg(dom.pause);
    }
    async getDogs() {
        const data = await fetch("https://dog.ceo/api/breed/hound/images/random/5");
        const dogs = await data.json();
        return dogs;
    }
    drawPosition(num) {
        this.isPaused = true;
        this.view.draw(dom.galleryImg, this.model.state.message[num]);
    }
    readKeyPress(event) {
        switch (event.code) {
            case 'Digit1': drawPosition(0);
                break;
            case 'Digit2': drawPosition(1);
                break;
            case 'Digit3': drawPosition(2);
                break;
            case 'Digit4': drawPosition(3);
                break;
            case 'Digit5': drawPosition(4);
                break;
            case 'Space': this.isPaused = !this.isPaused;
                if (!this.isPaused) this.view.showDogs(dom.galleryImg, this.model.state.message, this.position);
                break;
        }
        this.view.switchPauseImg(dom.pause);
    }
    goToPrevious(dogs) {
        if (this.previous >= 0) {
            this.calcValues(this.previous);
            this.view.draw(dom.galleryImg, dogs.message[this.position])
        };
    }
    goToNext(dogs) {
        if (this.next < 5) {
            this.calcValues(this.next);
            this.view.draw(dom.galleryImg, dogs.message[this.position]);
        }
    }
    calcValues(number) {
        this.position = number;
        this.previous = this.position - 1;
        this.next = this.position + 1;
    }
    showFirstTime(){ this.view.showDogs(dom.galleryImg, this.model.state.message, this.position) }
}

export const controller = new Controller();