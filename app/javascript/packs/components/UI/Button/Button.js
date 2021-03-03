import React from 'react';
import classes from './Button.module.scss';

const Button = (props) => {
    return (
        <div className={classes.ColorSelector}><h1>{props.text}</h1></div>
    )
}

export default Button;