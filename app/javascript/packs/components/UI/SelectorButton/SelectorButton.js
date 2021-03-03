import React from 'react';
import classes from './SelectorButton.module.scss';

const SelectorButton = (props) => {
    const clickHandler = event => {
        if (event.target.className !== 'selected') {
            event.target.classList.add('selected');
        }
    }

    return (
        <div className={classes.SelectorButton} onClick={clickHandler}>{props.text}</div>
    )
}

export default SelectorButton;