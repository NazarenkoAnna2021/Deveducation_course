class ButtonsEffects {
    normalizeButton(event){ event.target.classList.remove('click-down')}
    setMouseOver(event) {event.target.classList.add('mouse-over')}
    setMouseOut(event) {event.target.classList.remove('mouse-over')}
    clickedButton(event) {event.target.classList.add('click-down')}
}

export const buttonsEffects = new ButtonsEffects();