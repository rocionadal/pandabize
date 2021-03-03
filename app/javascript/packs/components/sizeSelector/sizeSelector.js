import React from 'react';
import classes from './SizeSelector.module.scss';
import SelectorButton from '../UI/SelectorButton/SelectorButton';

const SizeSelector = (props) => {
    const sizes = props.options.map(option => {
        return (
            <SelectorButton text={option} key={option}/>
        );
    })

    return (
        <div className={classes.SizeSelector}>
            <h1>{props.title}</h1>
            <div className={classes.OptionContainer}>
              {sizes}
            </div>
        </div>
    )
}

export default SizeSelector;