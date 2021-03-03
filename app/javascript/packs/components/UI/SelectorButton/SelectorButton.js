import React from 'react';
import classes, { Selected } from './SelectorButton.module.scss';

const SelectorButton = (props) => {
    const clickHandler = event => {
        const selected = document.querySelector(`.${Selected}`);
        const classList = event.target.classList;
        if (!classList.contains(Selected) && !selected) {
            classList.toggle(Selected);
        } else if (!classList.contains(Selected) && selected) {
            selected.classList.toggle(Selected)
            classList.toggle(Selected)
        } else {
            classList.toggle(Selected)
        }
    }

    return (
        <div className={classes.SelectorButton} onClick={clickHandler}>{props.text}</div>
    )
}

export default SelectorButton;