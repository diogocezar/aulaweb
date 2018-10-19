import React from 'react'
import './button.css'

const Button = (props) => {
    return <button type="button" className={props.type}>{props.children}</button>
};

export default Button;