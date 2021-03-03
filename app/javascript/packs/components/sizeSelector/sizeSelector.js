import React from 'react';
import classes from './SizeSelector.module.scss';

const SizeSelector = () => {
    const props = [17, 18, 19]


    return (
        <div className={classes.SizeSelector}><h1>Size selector</h1></div>
    )
}

export default SizeSelector;