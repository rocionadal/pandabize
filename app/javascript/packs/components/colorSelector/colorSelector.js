import React from 'react';
import classes from './ColorSelector.module.scss';
import SelectorButton from '../UI/SelectorButton/SelectorButton';

const ColorSelector = (props) => {
    return (
        <div className={classes.ColorSelector}>
            <h1>{props.title}</h1>
            <div>
                
            </div>
        </div>
    )
}

export default ColorSelector;