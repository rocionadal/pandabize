import React from 'react';
import classes from './ColorSelector.module.scss';

const ColorSelector = (props) => {
    return (
        <div className={classes.ColorSelector}><h1>{props.title}</h1></div>
    )
}

export default ColorSelector;