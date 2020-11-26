import React,{useState} from 'react';
import stylesWrapper from './../HOC/stylesWrapper';

const ButtonOne = (props) => {
   
  function changeBackground(e) {
    e.target.style.background = 'blue';
  }
 
    
    return (
        <button style={props.styles}
        onMouseOver={changeBackground}
        >I am ButtonOne</button>
    )
}

export default stylesWrapper(ButtonOne);

