import React from 'react';
import classes, { Selected } from './SelectorButton.module.scss';

const SelectorButton = (props) => {
    return (
        <div className={classes.SelectorButton} onClick={props.clickHandler}>{props.text}</div>
    )
}

export default SelectorButton;