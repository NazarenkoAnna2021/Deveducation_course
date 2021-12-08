import '/css/style.css'
import { buttonsEffects } from './effects'
import { dom } from './dom'
import { gallery } from './gallery'

dom.switchImg.addEventListener('click', gallery.setPause);
dom.switchImg.addEventListener('mouseover', buttonsEffects.setMouseOver);
dom.switchImg.addEventListener('mouseout', buttonsEffects.setMouseOut);
dom.switchImg.addEventListener('mousedown', buttonsEffects.clickedButton);
dom.switchImg.addEventListener('mouseup', buttonsEffects.normalizeButton);
addEventListener('keypress', gallery.readKeyPress);