import '/css/style.css'
import { main, goToPrevious, goToNext } from './functions'
import { dom } from './dom'
import '/img/previous.png'
import '/img/pause.png'
import '/img/next.png'

main();
dom.goUp.addEventListener('click', goToPrevious);
dom.goDown.addEventListener('click', goToNext);