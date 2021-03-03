import React, { useState, useEffect } from 'react';
import classes from './SizeSelector.module.scss';
import SelectorButton from '../UI/SelectorButton/SelectorButton';
import { Selected } from '../UI/SelectorButton/SelectorButton.module.scss';

const SizeSelector = (props) => {
    const sizes = props.options.map(option => {
        return (
            <SelectorButton text={option} clickHandler={props.clickHandler} key={option}/>
        );
    })

    return (
        <div className={classes.SizeSelector}>
            <h1>{props.title}</h1>
            <div className={classes.OptionContainer}>
              {sizes}
            </div>
            <h5>Selected size: {props.selected}</h5>
        </div>
    )
}

export default SizeSelector;