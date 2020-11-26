import React,{useState} from 'react';
import stylesWrapper from './../HOC/stylesWrapper';

const ButtonOne = (props) => {
  const [Propety, setPropety] = useState("");
  // const [isShown, setIsShown] = useState(false);
  function changeBackground(e) {
    e.target.style.background = 'blue';
  }
  function Background(e) {
    e.target.style.background = 'green';
  }
 
    
    return (
      <div>
        <button style={props.styles}
        onMouseEnter={(e) => {setPropety("offsetHeight:"+e.target.offsetHeight+","+
        "offsetWidth:"+e.target.offsetWidth)}}
        onMouseLeave={Background}
        onMouseOver={changeBackground}
        >I am ButtonOne</button>
       
        {Propety?(
          <ul>
          {Propety}
        </ul>
        ):(
          <ul>
            I'll appear when you hover over the button.
          </ul>
        )}
        </div>
    )
}

export default stylesWrapper(ButtonOne);

