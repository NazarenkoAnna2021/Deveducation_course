import '/css/style.css'
import { main, toClicked, goToPrevious, goToNext, showBigImg, closeBigDog } from './functions'
import { dom } from './dom'

main();
dom.pagination.addEventListener('click', toClicked);
dom.goUp.addEventListener('click', goToPrevious);
dom.goDown.addEventListener('click', goToNext);
dom.gallery.addEventListener('click', showBigImg);
dom.close.addEventListener('click', closeBigDog);