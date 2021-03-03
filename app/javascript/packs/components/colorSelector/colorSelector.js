import React from 'react';
import classes from './ColorSelector.module.scss';

const ColorSelector = (props) => {
    const props = ['white', 'purple', 'blue'];


    return (
        <div className={classes.ColorSelector}><h1>Color selector</h1></div>
    )
}

export default ColorSelector;