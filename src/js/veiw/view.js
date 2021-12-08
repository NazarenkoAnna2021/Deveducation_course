export class View {
    showDogs() {
        this.draw(galleryImg, dogs[position++]);
        const interval = setInterval(() => {
            if (isPaused) {
                clearInterval(interval);
                return;
            }
            if (++position >= 5) position = 0;
            this.draw(dom.galleryImg, dogs[position]);
        }, 3000);
    }
    switchPauseImg(domElement, isPaused) { isPaused ? draw(domElement, '/img/play.png') : draw(dom.pause, '/img/pause.png') }
    draw(element, url) { element.setAttribute('src', url) }
}