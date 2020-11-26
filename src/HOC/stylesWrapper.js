import React from 'react';
import commonStyles from './../styles/commonStyles';


const translateProps = (props) => {
    let _styles = {...commonStyles.default}
    if(props.change){
        _styles = {..._styles, ...commonStyles.change};  
    }
    const newProps = {...props,styles:_styles }
    return newProps;
} 


export default (WrappedComponent) => {
    return function wrappedRender(args) {
        return WrappedComponent(translateProps(args));
    }
}