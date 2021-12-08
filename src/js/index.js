import '/css/style.css'
import { buttonsEffects } from './effects'
import { dom } from './dom'
import { controller } from './controller/controller'
import './img'
import { work } from './wopkClass'

//controller.showFirstTime();

//console.log(work.state);

//dom.switchImg.addEventListener('click', controller.setPause);
dom.switchImg.addEventListener('mouseover', buttonsEffects.setMouseOver);
dom.switchImg.addEventListener('mouseout', buttonsEffects.setMouseOut);
dom.switchImg.addEventListener('mousedown', buttonsEffects.clickedButton);
dom.switchImg.addEventListener('mouseup', buttonsEffects.normalizeButton);
addEventListener('keypress', controller.readKeyPress);