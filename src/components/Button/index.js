import React from 'react';
import './Button.css';

const Button = (props) => {
    if( !props?.buttonLabel ) return null;
    const { buttonLabel, className, ...remainingProps } = props;
    return (
        <button {...remainingProps} className={className ? className : 'btn'}>{buttonLabel}</button>
    );
}

export default Button;